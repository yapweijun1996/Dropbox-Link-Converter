const CACHE_NAME = 'dropbox-converter-v1';
const ASSETS = [
	'./',
	'./index.html',
	'./manifest.json',
	'./og_img.jpg',
	'./icons/icon-192.svg',
	'./icons/icon-512.svg'
];

// Install: cache app shell
self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
	);
	self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
		)
	);
	self.clients.claim();
});

// Fetch: cache-first for app shell, network-first for others
self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((cached) => {
			return cached || fetch(e.request).then((response) => {
				// Don't cache non-GET or cross-origin requests
				if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
					return response;
				}
				const clone = response.clone();
				caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
				return response;
			});
		}).catch(() => {
			// Offline fallback
			if (e.request.mode === 'navigate') {
				return caches.match('./index.html');
			}
		})
	);
});
