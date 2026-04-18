const CACHE_NAME = 'geoquiz-cache-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './js/bundle.js',
  './js/firebase.js',
  './js/japan.topojson.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://d3js.org/d3.v7.min.js',
  'https://unpkg.com/topojson-client@3',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics-compat.js',
  // Critical Avatars & Sounds
  './assets/sounds/kettei.wav',
  './assets/sounds/seikai.wav',
  './assets/sounds/fuseikai.wav',
  './assets/sounds/key.wav',
  './assets/sounds/delete.wav',
  './assets/sounds/submit.wav',
  './assets/bgm/MenuBGM.mp3',
  './assets/bgm/CategoryBGM.mp3',
  './assets/bgm/others.mp3',
  './assets/bgm/boss.mp3',
  './assets/bgm/BossBGM.mp3',
  './assets/avatars/silhouette_placeholder.png'
];

const DYNAMIC_CACHE_NAME = 'geoquiz-dynamic-v4';


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url => {
          return cache.add(url).catch(err => console.warn(`[SW] Failed to cache: ${url}`, err));
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const skipUrls = [
    'firestore.googleapis.com',
    'firebasestatistics.googleapis.com',
    'firebaseinstallations.googleapis.com',
    'identitytoolkit.googleapis.com'
  ];
  
  if (skipUrls.some(domain => event.request.url.includes(domain))) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
             return networkResponse;
        }

        const isAsset = event.request.url.includes('/assets/') || 
                        event.request.url.includes('fonts.gstatic.com') ||
                        event.request.url.includes('cdnjs.cloudflare.com') ||
                        event.request.url.includes('d3js.org');

        if (isAsset) {
          const responseToCache = networkResponse.clone();
          caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
