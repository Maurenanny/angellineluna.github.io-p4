self.addEventListener('install', (event) => {
    console.log('SW: install');
    const cachePromise = caches.open('cache-v1').then((cache) => {
        return cache.addAll(
            [
                './',
                './index.html',
                './css/style.css',
                './js/app.js',
                './pages/dividir.html',
                './pages/sumar.html',
                './pages/restar.html',
                './pages/multiplicar.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
            ]
        );
    })
    event.waitUntil(cachePromise);
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    const cacheRes = caches.match(event.request);
    event.respondWith(cacheRes);
});
