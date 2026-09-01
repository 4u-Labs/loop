// ============================================
// Loop Messenger - Service Worker
// ============================================

const CACHE_NAME = 'loop-pwa-v1.5.0';
const OFFLINE_URL = 'index.php';

const STATIC_ASSETS = [
  './',
  'index.php',
  'style.css',
  'app.js',
  'manifest.json',
  'assets/icon16.png',
  'assets/icon48.png',
  'assets/icon128.png',
  'assets/icone_ia.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Fira+Code:wght@400;500&display=swap'
];

// Install Event
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install v1.5.0 (Network-First)');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        await Promise.allSettled(
          STATIC_ASSETS.map(async (assetUrl) => {
            try {
              const res = await fetch(assetUrl);
              if (res && res.ok) {
                await cache.put(assetUrl, res);
              }
            } catch (e) {}
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate v1.5.0');
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch Event - PURE NETWORK-FIRST
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  const url = new URL(event.request.url);
  const isAllowedOrigin =
    url.origin === self.location.origin ||
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com';

  if (!isAllowedOrigin) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('index.php').then((res) => res || caches.match('./') || caches.match('index.html'));
          }
        });
      })
  );
});

// Message Listener
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting' || (event.data && event.data.action === 'skipWaiting')) {
    self.skipWaiting();
  }
});
