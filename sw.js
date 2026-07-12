// My O! Service Worker — stale-while-revalidate caching strategy
const CACHE_NAME = 'myo-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/v2.html',
  '/poster.html',
  '/llms.txt',
  '/pricing.md',
  '/blog/index.html',
  '/image/01_company_logo.png',
  '/image/icon-192x192.png',
  '/image/icon-512x512.png',
  '/manifest.json',
  '/privacy.html',
  '/terms.html'
];

// Install: pre-cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch(() => console.warn('Failed to cache: ' + url))
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached || new Response('Offline', { status: 503 }));

      return cached || fetchPromise;
    })
  );
});