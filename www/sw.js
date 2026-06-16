// Dylan's Workout App — offline service worker
const CACHE = 'dwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './vendor/xlsx.full.min.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // never cache API calls (Anthropic) — always go to network
  if (req.url.includes('api.anthropic.com') || req.method !== 'GET') return;
  // cache-first for app assets, fall back to network, then cache
  e.respondWith(
    caches.match(req).then(cached => {
      const fetched = fetch(req).then(res => {
        // cache same-origin successful GETs (incl. fonts)
        if (res && res.status === 200 && (req.url.startsWith(self.location.origin) || req.url.includes('fonts.g'))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
        }
        return res;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
