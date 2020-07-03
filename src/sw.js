importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const {registerRoute} = workbox.routing;
const {CacheFirst, StaleWhileRevalidate, NetworkFirst} = workbox.strategies;
const {ExpirationPlugin} = workbox.expiration;

if(workbox){
  self.__WB_MANIFEST
  workbox.precaching.precacheAndRoute([{"revision":"874d7d84dc23b6376e27d7aecb2c1126","url":"asset-manifest.json"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"bf8333933ec36bf6aed4de4ed8b5a211","url":"index.html"},{"revision":"2828bfc5243d083de02da37607032780","url":"logo192.png"},{"revision":"6be8a2e0f5817881e3a90170d4d2df5c","url":"logo512.png"},{"revision":"95df80e4a24a9a4b5410e89cf1af09f7","url":"manifest.json"},{"revision":"1d1910735584a84bb9526ec05c721c55","url":"precache-manifest.1d1910735584a84bb9526ec05c721c55.js"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"fb17df648186d42fa412665e8aaa50fb","url":"service-worker.js"},{"revision":"503c05f675a91a0211f920a84f5f1639","url":"static/css/2.af3c1da9.chunk.css"},{"revision":"bc384b5230a3154d69793f8b71ba996f","url":"static/css/main.40c8e7d7.chunk.css"},{"revision":"906b5b2af9ae42af324c32a15ad6a730","url":"static/js/2.91ba3753.chunk.js"},{"revision":"121176ba3fca79ab1bfc07fa7daca3df","url":"static/js/2.91ba3753.chunk.js.LICENSE.txt"},{"revision":"cd54bbddbe93e4bfc25e7d4f3fbb0ce8","url":"static/js/main.101d513f.chunk.js"},{"revision":"28a24fb1ad9ea1c87f3edc5c8a0086ea","url":"static/js/runtime-main.c21f0840.js"},{"revision":"28e81ee6aee43603dd5af3afaaa2f773","url":"static/media/restaurantHero2.28e81ee6.webp"}])

  registerRoute(
    ({request}) => request.destination === 'script',
      new StaleWhileRevalidate({
        cacheName: "script-cache"
      })
  );

  registerRoute(
    // Cache style resources, i.e. CSS files.
    ({request}) => request.destination === 'style',
    // Use cache but update in the background.
    new StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'css-cache',
    })
  );

  registerRoute(
    new RegExp(".+/cloudstorage-abfc4.appspot.com/.+"),
    new StaleWhileRevalidate({
      cacheName: "firestore-images-cache"
    })
  );

  registerRoute(
    // Cache image files.
    ({request}) => request.destination === 'image',
    // Use the cache if it's available.
    new StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'image-cache',
      plugins: [
        new ExpirationPlugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );
}
