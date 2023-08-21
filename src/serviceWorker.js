// const CACHE_NAME = "raorane-cache";

// export default function register(){
//   window.addEventListener("install", (e) => {
//     console.log("installing service worker");
//     e.waitUntil(
//       caches.open(CACHE_NAME).then((cache) => {
//         return cache
//           .addAll([`/`, `/index.html`])
//           .then(() => window.skipWaiting());
//       })
//     );
//   });
  
//   window.addEventListener('activate', event => {
//       console.log('activating service worker');
//       event.waitUntil(window.clients.claim());
//   });
  
//   window.addEventListener('fetch', event => {
//     console.log(`fetching ${event.request.url}`);
//     if(navigator.onLine){
//       const fetchRequest = event.request.clone();
//       console.log('fetchRequest: ', fetchRequest);
  
//     }
//     else{
  
//     }
//   });
// }

console.log('service worker is ready');