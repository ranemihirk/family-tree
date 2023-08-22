const CACHE_NAME = "raorane-cache";
const urlsToCache = !navigator.onLine ? [
    '/',
    '/index.html',
    '/static/js/bundle.js',
    '/static/js/vendors-node_modules_react-router-dom_dist_index_js.chunk.js',
    '/static/js/vendors-node_modules_fortawesome_free-solid-svg-icons_faBars_js-node_modules_fortawesome_free-aad28d.chunk.js',
    '/static/js/Router.chunk.js',
    '/static/js/CoreLayout.chunk.js',
] : [
    '/',
    '/index.html',
    '/static/js/main.b4d0f366.js',
    '/static/js/947.abec9008.chunk.js',
    '/static/js/Router.25dd4ea0.chunk.js',
    '/static/js/602.a5b5d198.chunk.js',
    '/static/js/CoreLayout.a4df5cb2.chunk.js',
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

this.addEventListener('fetch', event => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl);
            })
        )
    }
});