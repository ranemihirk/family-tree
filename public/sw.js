const CACHE_NAME = "raorane-cache";

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/vendors-node_modules_react-router-dom_dist_index_js.chunk.js',
                '/static/js/vendors-node_modules_fortawesome_free-solid-svg-icons_faBars_js-node_modules_fortawesome_free-aad28d.chunk.js',
                '/static/js/CoreLayout.chunk.js',
                '/static/js/Router.chunk.js',
                'https://cdn.tailwindcss.com/3.3.3',
                '/index.html',
                '/'
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
   event.respondWith(
    caches.match(event.request).then((result) => {
        if(result){
            // return result;
            console.log('result: ', result);
        }
    })
   )
})

