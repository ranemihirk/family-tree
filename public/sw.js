const CACHE_NAME = "raorane-cache";
const urlsToCache = [
    '/',
    '/index.html',
];

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('caches: ', caches);
                console.log('cache: ', cache);
                cache.addAll(urlsToCache)
            })
    );
});

// this.addEventListener('fetch', (event) => {
//     if (!navigator.onLine) {
//         event.waitUntil(
//             this.registration.showNotification("Internet", {
//                 body: "internet not working",
//             })
//         )
//         event.respondWith(
//             caches.match(event.request).then((resp) => {
//                 if (resp) {
//                     return resp
//                 }
//                 let requestUrl = event.request.clone();
//                 fetch(requestUrl)
//             })
//         )
//     }
// })

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});