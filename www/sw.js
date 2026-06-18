// Dylan's Workout App — offline service worker
const CACHE = 'dwa-v31-command';
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

  // Navigation / index.html: network-first, fallback to cache. This keeps UI updates from getting stuck behind old cached HTML.
  const isIndex = req.mode === 'navigate' || req.url.endsWith('/') || req.url.includes('/index.html');
  if (isIndex) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.status === 200) caches.open(CACHE).then(c => c.put(req, res.clone())).catch(()=>{});
        return res;
      }).catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Other app assets: cache-first, fall back to network, then cache.
  e.respondWith(
    caches.match(req).then(cached => {
      const fetched = fetch(req).then(res => {
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
