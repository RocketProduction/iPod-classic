/* iPod PWA Service Worker v31 - Improved Cache Strategy */
const CACHE_NAME = 'ipod-pwa-v31';
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

// External resources to cache (static CDN only)
const EXTERNAL_CACHE = [
  'https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js'
];

// Domains that should NEVER be cached or intercepted (API calls)
const BYPASS_DOMAINS = [
  'itunes.apple.com',
  'mzstatic.com',           // iTunes artwork CDN
  'is1-ssl.mzstatic.com',
  'is2-ssl.mzstatic.com',
  'is3-ssl.mzstatic.com',
  'is4-ssl.mzstatic.com',
  'is5-ssl.mzstatic.com'
];

self.addEventListener('install', (event) => {
  console.log('[SW v31] Installing');
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    
    // Cache external resources (non-blocking)
    for (const url of EXTERNAL_CACHE) {
      try {
        await cache.add(url);
      } catch (e) {
        console.log('[SW v31] Could not cache external:', url);
      }
    }
    
    // Cache local files (critical)
    try {
      return await cache.addAll(PRECACHE);
    } catch (e) {
      console.error('[SW v31] Local cache failed:', e);
    }
  })());
});

self.addEventListener('activate', (event) => {
  console.log('[SW v31] Activating');
  event.waitUntil((async () => {
    // Delete old caches
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    );
    // Take control immediately
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1. BYPASS: Never intercept API calls or artwork fetches - let them go directly to network
  if (BYPASS_DOMAINS.some(domain => url.hostname.includes(domain))) {
    // Don't call respondWith - let the browser handle it natively
    return;
  }

  // 2. BYPASS: Never intercept blob: URLs (local audio files)
  if (url.protocol === 'blob:') {
    return;
  }

  // 3. BYPASS: Never intercept non-GET requests
  if (req.method !== 'GET') {
    return;
  }

  // 4. Cache-first for navigation and same-origin static files
  if (req.mode === 'navigate' || url.origin === self.location.origin) {
    event.respondWith((async () => {
      // Try cache first
      const cached = await caches.match(req);
      if (cached) {
        return cached;
      }
      
      // If not in cache, fetch from network
      try {
        const networkRes = await fetch(req);
        // Cache successful responses for next time
        if (networkRes.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, networkRes.clone());
        }
        return networkRes;
      } catch (e) {
        // Fallback to index.html for navigation requests
        if (req.mode === 'navigate') {
          const fallback = await caches.match('./index.html');
          if (fallback) return fallback;
        }
        return new Response('Offline', { status: 503 });
      }
    })());
    return;
  }

  // 5. Network-first for other external resources (CDN)
  if (url.origin !== self.location.origin) {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        // Cache CDN resources if successful
        if (res.ok && EXTERNAL_CACHE.includes(req.url)) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, res.clone());
        }
        return res;
      } catch (e) {
        // Try cache as fallback
        const cached = await caches.match(req);
        if (cached) return cached;
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      }
    })());
  }
});
