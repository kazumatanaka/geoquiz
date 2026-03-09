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

function initFirebase(onReady) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            console.log('[GeoQuiz] ログイン済み:', user.uid);
            onReady(user);
        } else {
            // 匿名ログイン
            auth.signInAnonymously()
                .then((result) => {
                    currentUser = result.user;
                    console.log('[GeoQuiz] 匿名ログイン完了:', result.user.uid);
                    onReady(result.user);
                })
                .catch((err) => {
                    console.error('[GeoQuiz] ログインエラー:', err);
                    onReady(null); // オフラインでも動作継続
                });
        }
    });
}

function getCurrentUser() { return currentUser; }

// ============================================================
// Firestore: 学習ログ (learning_logs)
// ============================================================

async function syncProgressToCloud(geoId, masteryLevel) {
    if (!currentUser) return;
    const nextReviewDate = calcNextReviewDate(masteryLevel);
    try {
        await db.collection('users').doc(currentUser.uid)
            .collection('learning_logs').doc(geoId).set({
                geoId,
                masteryLevel,
                lastClearedAt: firebase.firestore.FieldValue.serverTimestamp(),
                nextReviewDate: firebase.firestore.Timestamp.fromDate(nextReviewDate),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (learning_logs):', e);
    }
}

async function syncMistakeToCloud(geoId, tappedDummy) {
    if (!currentUser) return;
    try {
        await db.collection('users').doc(currentUser.uid)
            .collection('mistakes').add({
                geoId,
                tappedDummy,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (mistakes):', e);
    }
}

async function fetchProgressFromCloud() {
    if (!currentUser) return {};
    try {
        const snap = await db.collection('users').doc(currentUser.uid)
            .collection('learning_logs').get();
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
        return result;
    } catch (e) {
        console.warn('[GeoQuiz] 取得失敗 (learning_logs):', e);
        return {};
    }
}

async function fetchMistakesFromCloud() {
    if (!currentUser) return [];
    try {
        const snap = await db.collection('users').doc(currentUser.uid)
            .collection('mistakes').orderBy('timestamp', 'desc').limit(200).get();
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

// 防衛クエスト: nextReviewDate を過ぎた地形を取得
async function fetchDueForReview() {
    if (!currentUser) return [];
    try {
        const now = new Date();
        const snap = await db.collection('users').doc(currentUser.uid)
            .collection('learning_logs')
            .where('nextReviewDate', '<=', firebase.firestore.Timestamp.fromDate(now))
            .where('masteryLevel', '<', 4)
            .get();
        return snap.docs.map(doc => doc.data());
    } catch (e) {
        console.warn('[GeoQuiz] 防衛クエスト取得失敗:', e);
        return [];
    }
}

// ============================================================
// Firestore: カード (cards)
// ============================================================

async function syncCardToCloud(cardId, cardLevel, quantity) {
    if (!currentUser) return;
    try {
        await db.collection('users').doc(currentUser.uid)
            .collection('cards').doc(cardId).set({
                cardId, cardLevel, quantity,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
    } catch (e) {
        console.warn('[GeoQuiz] 同期失敗 (cards):', e);
    }
}

// ============================================================
// Firestore: ボス戦スコア (boss_scores) - 全ユーザー共有
// ============================================================

async function submitBossScore(score, areaName, nickname) {
    if (!currentUser) return;
    try {
        await db.collection('boss_scores').add({
            uid: currentUser.uid,
            nickname: nickname || 'Anonymous',
            score,
            areaName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('[GeoQuiz] ボス戦スコア送信:', score);
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
    getCurrentUser,
    syncProgressToCloud,
    syncMistakeToCloud,
    fetchProgressFromCloud,
    fetchMistakesFromCloud,
    fetchDueForReview,
    syncCardToCloud,
    submitBossScore,
    fetchRanking,
    calcNextReviewDate
};
