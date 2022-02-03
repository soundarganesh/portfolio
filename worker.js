var CACHE_NAME = 'static-resources';
var urlsToCache = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Cache Opened!');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all[
      caches.open('static-resources').then(function (cache) {
        cache.keys().then(function (keys) {
          keys.forEach(function (request, index, array) {
            cache.delete(request);
          });
        });
      })
    ]
  );
});
