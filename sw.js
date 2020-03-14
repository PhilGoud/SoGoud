var cacheName = 'Phil_Goud';
var filesToCache = [
  '/',
  '/style.css',
  '/main.js',
  `/assets/podradio.pdf`,
  '/images/avatar2.jpg',
  `/assets/plateformepodcast.pdf`,
  '/CV-Thomas-FOREST-2020.pdf'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});