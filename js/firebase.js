// ============================================================
// GeoQuiz - Firebase Integration
// Auth: Anonymous Sign-In
// Firestore: learning_logs, cards, boss_scores
// ============================================================

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCkzPGkfYfklxC0ofwBrNT55KZExlcTYOA",
    authDomain: "geoquiz-ccecb.firebaseapp.com",
    projectId: "geoquiz-ccecb",
    storageBucket: "geoquiz-ccecb.firebasestorage.app",
    messagingSenderId: "496084581916",
    appId: "1:496084581916:web:41fb11052329dfbe7d69d9",
    measurementId: "G-H6QYH9D79V"
};

// Initialize Firebase (compat SDK loaded via CDN in index.html)
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();
const auth = firebase.auth();

// ============================================================
// Auth State
// ============================================================
let currentUser = null;
let selectedProfile = localStorage.getItem('geoquiz_profile') || null;
let authResolver = null;
const authReady = new Promise((resolve) => {
    authResolver = resolve;
});

function initFirebase(onReady) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            console.log('[GeoQuiz] Firebase Auth Ready:', user.uid);
            if (authResolver) authResolver(user);
            if (onReady) onReady(user);
        } else {
            console.log('[GeoQuiz] No user, signing in anonymously...');
            auth.signInAnonymously()
                .then((result) => {
                    currentUser = result.user;
                    console.log('[GeoQuiz] Signed in anonymously:', result.user.uid);
                    if (authResolver) authResolver(result.user);
                    if (onReady) onReady(result.user);
                })
                .catch((err) => {
                    console.error('[GeoQuiz] Login Error:', err);
                    if (authResolver) authResolver(null);
                    if (onReady) onReady(null);
                });
        }
    });
}

function waitForAuth() {
    return authReady;
}

function setProfile(name) {
    selectedProfile = name;
    if (name) {
        localStorage.setItem('geoquiz_profile', name);
    } else {
        localStorage.removeItem('geoquiz_profile');
    }
}

function getSelectedProfile() { return selectedProfile; }

// ============================================================
// Firestore: Helpers
// ============================================================
function getProfileDoc() {
    if (!selectedProfile) {
        console.warn('[GeoQuiz] No profile selected for getProfileDoc');
        return null;
    }
    return db.collection('profiles').doc(selectedProfile);
}

// ============================================================
// Firestore: 学習ログ (learning_logs)
// ============================================================

async function syncProgressToCloud(geoId, masteryLevel) {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return;
    const nextReviewDate = calcNextReviewDate(masteryLevel);
    try {
        await profileDoc.collection('learning_logs').doc(geoId).set({
            geoId,
            masteryLevel,
            lastClearedAt: firebase.firestore.FieldValue.serverTimestamp(),
            nextReviewDate: firebase.firestore.Timestamp.fromDate(nextReviewDate),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log(`[GeoQuiz] Progress synced: ${geoId}`);
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (learning_logs):', e);
    }
}

async function syncMistakeToCloud(geoId, tappedDummy) {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return;
    try {
        await profileDoc.collection('mistakes').add({
            geoId,
            tappedDummy,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (mistakes):', e);
    }
}

async function fetchProgressFromCloud() {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) {
        console.warn('[GeoQuiz] Cannot fetch progress: profile not set');
        return {};
    }
    try {
        console.log(`[GeoQuiz] Fetching progress for: ${selectedProfile}...`);
        const snap = await profileDoc.collection('learning_logs').get();
        const result = {};
        snap.forEach(doc => {
            const d = doc.data();
            result[doc.id] = {
                geoId: doc.id,
                masteryLevel: d.masteryLevel || 0,
                lastClearedAt: d.lastClearedAt?.toMillis?.() || Date.now(),
                nextReviewDate: d.nextReviewDate?.toDate?.() || new Date()
            };
        });
        console.log(`[GeoQuiz] Progress fetched: ${Object.keys(result).length} items`);
        return result;
    } catch (e) {
        console.error('[GeoQuiz] Cloud Fetch Error (learning_logs):', e);
        return { _error: true };
    }
}

async function fetchMistakesFromCloud() {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return [];
    try {
        const snap = await profileDoc.collection('mistakes').orderBy('timestamp', 'desc').limit(200).get();
        return snap.docs.map(doc => ({
            geoId: doc.data().geoId,
            tappedDummy: doc.data().tappedDummy,
            timestamp: doc.data().timestamp?.toMillis?.() || Date.now()
        }));
    } catch (e) {
        console.warn('[GeoQuiz] 取得失敗 (mistakes):', e);
        return [];
    }
}

// 防衛クエスト
async function fetchDueForReview() {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return [];
    try {
        const now = new Date();
        const snap = await profileDoc.collection('learning_logs')
            .where('nextReviewDate', '<=', firebase.firestore.Timestamp.fromDate(now))
            .where('masteryLevel', '<', 4)
            .get();
        return snap.docs.map(doc => doc.data());
    } catch (e) {
        console.warn('[GeoQuiz] 防衛クエスト取得失敗:', e);
        return [];
    }
}

async function syncCardToCloud(cardId, level, quantity) {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return;
    try {
        await profileDoc.collection('cards').doc(cardId).set({
            cardId, level, quantity,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log(`[GeoQuiz] Card synced: ${cardId}`);
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (cards):', e);
    }
}

async function fetchCardsFromCloud() {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) {
        console.warn('[GeoQuiz] Cannot fetch cards: profile not set');
        return {};
    }
    try {
        console.log(`[GeoQuiz] Fetching cards for: ${selectedProfile}...`);
        const snap = await profileDoc.collection('cards').get();
        const result = {};
        snap.forEach(doc => {
            result[doc.id] = doc.data();
        });
        console.log(`[GeoQuiz] Cards fetched: ${Object.keys(result).length} cards`);
        return result;
    } catch (e) {
        console.error('[GeoQuiz] Cloud Fetch Error (cards):', e);
        return { _error: true };
    }
}

async function syncStatsToCloud(level, exp) {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return;
    try {
        await profileDoc.set({
            level,
            exp,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log(`[GeoQuiz] Stats synced: Lvl ${level}`);
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (stats):', e);
    }
}

async function fetchStatsFromCloud() {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) {
        console.warn('[GeoQuiz] Cannot fetch stats: profile not set');
        return null;
    }
    try {
        console.log(`[GeoQuiz] Fetching stats for: ${selectedProfile}...`);
        const doc = await profileDoc.get();
        if (doc.exists) {
            const data = doc.data();
            console.log(`[GeoQuiz] Stats fetched: Level ${data.level}`);
            return {
                level: data.level || 1,
                exp: data.exp || 0
            };
        }
        console.log('[GeoQuiz] No stats found on cloud for this profile');
        return null;
    } catch (e) {
        console.error('[GeoQuiz] Cloud Fetch Error (stats):', e);
        return { _error: true };
    }
}

async function syncFullProfileToCloud(state) {
    await waitForAuth();
    const profileDoc = getProfileDoc();
    if (!profileDoc) return;

    try {
        console.log('[GeoQuiz] Starting Full Cloud Sync (Upload)...');
        const batch = db.batch();

        // Sync Stats
        batch.set(profileDoc, {
            level: state.playerLevel || 1,
            exp: state.playerExp || 0,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        // Sync Progress (limited to avoid huge batches, though GeoQuiz data is small)
        for (const geoId in state.progress) {
            const p = state.progress[geoId];
            const logDoc = profileDoc.collection('learning_logs').doc(geoId);
            batch.set(logDoc, {
                geoId,
                masteryLevel: p.masteryLevel,
                lastClearedAt: p.lastClearedAt ? firebase.firestore.Timestamp.fromMillis(p.lastClearedAt) : firebase.firestore.FieldValue.serverTimestamp(),
                nextReviewDate: firebase.firestore.Timestamp.fromDate(calcNextReviewDate(p.masteryLevel)),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }

        // Sync Cards
        for (const cardId in state.cards) {
            const c = state.cards[cardId];
            const cardDoc = profileDoc.collection('cards').doc(cardId);
            batch.set(cardDoc, {
                cardId,
                level: c.level || 1,
                quantity: c.quantity || 1,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }

        await batch.commit();
        console.log('[GeoQuiz] Full Cloud Sync Completed.');
    } catch (e) {
        console.error('[GeoQuiz] Full Sync Failed:', e);
    }
}

// ============================================================
// Firestore: ボス戦スコア (boss_scores) - 全ユーザー共有
// ============================================================

async function submitBossScore(score, areaName, nickname) {
    if (!currentUser || !selectedProfile) return;
    try {
        await db.collection('boss_scores').add({
            uid: currentUser.uid,
            profile: selectedProfile,
            nickname: nickname || selectedProfile,
            score,
            areaName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (e) {
        console.warn('[GeoQuiz] ボス戦スコア送信失敗:', e);
    }
}

async function fetchRanking(areaName = null, limit = 10) {
    try {
        let query = db.collection('boss_scores').orderBy('score', 'desc').limit(limit);
        if (areaName) query = query.where('areaName', '==', areaName);
        const snap = await query.get();
        return snap.docs.map((doc, i) => ({
            rank: i + 1,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate?.()?.toLocaleDateString('ja-JP') || ''
        }));
    } catch (e) {
        console.warn('[GeoQuiz] ランキング取得失敗:', e);
        return [];
    }
}

// ============================================================
// 忘却曲線: 次回復習日の計算
// ============================================================
function calcNextReviewDate(masteryLevel) {
    const now = new Date();
    const daysMap = { 1: 1, 2: 3, 3: 7, 4: 30 };
    const days = daysMap[masteryLevel] ?? 1;
    const next = new Date(now);
    next.setDate(next.getDate() + days);
    return next;
}

// ============================================================
// グローバルエクスポート
// ============================================================
window.geoFirebase = {
    initFirebase,
    waitForAuth,
    setProfile,
    getSelectedProfile,
    syncProgressToCloud,
    syncMistakeToCloud,
    fetchProgressFromCloud,
    fetchMistakesFromCloud,
    fetchDueForReview,
    syncCardToCloud,
    fetchCardsFromCloud,
    submitBossScore,
    fetchRanking,
    calcNextReviewDate,
    syncStatsToCloud,
    fetchStatsFromCloud,
    syncFullProfileToCloud
};
