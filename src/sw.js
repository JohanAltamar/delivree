importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const {registerRoute} = workbox.routing;
const {CacheFirst, StaleWhileRevalidate, NetworkFirst} = workbox.strategies;
const {ExpirationPlugin} = workbox.expiration;

self.addEventListener('install', () => {
    self.skipWaiting();
});

workbox.core.clientsClaim();

if(workbox){
  self.__WB_MANIFEST
  workbox.precaching.precacheAndRoute([{"revision":"ef99192438e8b103ec13e10043469be3","url":"asset-manifest.json"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"cbcadbac8018ffacb568e6086cfa281f","url":"index.html"},{"revision":"2828bfc5243d083de02da37607032780","url":"logo192.png"},{"revision":"6be8a2e0f5817881e3a90170d4d2df5c","url":"logo512.png"},{"revision":"70c9e9ae65fdc1a1a3024867a6bb2d27","url":"manifest.json"},{"revision":"7566e621f464d09abc8a60f3edf621a2","url":"precache-manifest.7566e621f464d09abc8a60f3edf621a2.js"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"0a486978afcf048d609a50553bf3c479","url":"service-worker.js"},{"revision":"b0d6fdbfd8eb62fa8cc002e98901438e","url":"static/css/12.ddd45f5d.chunk.css"},{"revision":"873dad5527c1a75997cdbb140f338d90","url":"static/css/13.fb7f7995.chunk.css"},{"revision":"b586a563fc805332f03aff50ef88b01a","url":"static/css/8.af3c1da9.chunk.css"},{"revision":"a3e332a6e3e1864e856a43c20fd96b4d","url":"static/css/main.fcc07165.chunk.css"},{"revision":"38ba787375c97b6fd605b7ba8b3ffe4e","url":"static/js/0.957ac3ea.chunk.js"},{"revision":"4e2c02fcb88b596eaa92de7b97a0e735","url":"static/js/0.957ac3ea.chunk.js.LICENSE.txt"},{"revision":"1c17f2fa0a9f168ee6a488576bc93224","url":"static/js/1.56eeba42.chunk.js"},{"revision":"d7be4a50d7d8c4d893e21ab59475019e","url":"static/js/10.7277d02e.chunk.js"},{"revision":"cc999af64f72ee15e364a4fbf47abb15","url":"static/js/11.5c159d94.chunk.js"},{"revision":"791d693275f6281c43f1549860f0b26b","url":"static/js/12.810340c3.chunk.js"},{"revision":"bac1390309ba5dcf69533c7255e30cf9","url":"static/js/13.dc1807e9.chunk.js"},{"revision":"3b9bfe4f5fa2cbd94aaae6ea789752c2","url":"static/js/14.7a06dcf2.chunk.js"},{"revision":"3399dfeb532a4e37b2a71a534d418d9a","url":"static/js/15.0d12c6b4.chunk.js"},{"revision":"79a88b9abfd2299d4bc2a217eea12d80","url":"static/js/16.b5cc28e0.chunk.js"},{"revision":"5e43040dea55d46fceb88bfb8c0050d7","url":"static/js/17.34fc8d44.chunk.js"},{"revision":"a7cb33b1ca409118ab939198b6438ac4","url":"static/js/18.88548b1d.chunk.js"},{"revision":"09ca61693ca9115509969bc468cf626a","url":"static/js/19.7796330c.chunk.js"},{"revision":"d338ba064c0b6ce57b95a01fb1c5fb1a","url":"static/js/2.9f99f99c.chunk.js"},{"revision":"a03a62e9f9b3c9dcc1260833ca2bdc34","url":"static/js/20.41a3ece6.chunk.js"},{"revision":"77a0de54d604ae84e557e792ef0bddd5","url":"static/js/21.9ca9023e.chunk.js"},{"revision":"7f863e0311dd5cb5434bd6544b5c5dae","url":"static/js/22.ca54443e.chunk.js"},{"revision":"412d9457d957b1bdd9e2f0014799923b","url":"static/js/23.e943280a.chunk.js"},{"revision":"0ad6c0886f9771bbd84d5cf0920f3884","url":"static/js/24.0a003afa.chunk.js"},{"revision":"dc335b4900e57d89589e63559f8d0679","url":"static/js/25.5eab9f25.chunk.js"},{"revision":"de5ad3da93c19dac9f0cb48b8d08153d","url":"static/js/3.bc60f9a3.chunk.js"},{"revision":"5fe50bc06f3c19fdcaabc0942381122f","url":"static/js/4.dd1c3748.chunk.js"},{"revision":"bddd388f64acfba0fa1df9d59af9c689","url":"static/js/5.761a5f63.chunk.js"},{"revision":"7ee234bcfd09a787d8f799269b439fd2","url":"static/js/8.6d6790c0.chunk.js"},{"revision":"117d65892edc8adcd29d4a0d57b5a80a","url":"static/js/8.6d6790c0.chunk.js.LICENSE.txt"},{"revision":"f7b291de76b358db822e1e212bc7fb30","url":"static/js/9.9a7f11d3.chunk.js"},{"revision":"2f94a1bc4edca72d96a840913c2d9bf5","url":"static/js/main.c9409a48.chunk.js"},{"revision":"f9915889cb5e5bfd4361e9dfc21926fa","url":"static/js/runtime-main.f44cd117.js"},{"revision":"28e81ee6aee43603dd5af3afaaa2f773","url":"static/media/restaurantHero2.28e81ee6.webp"}])

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
