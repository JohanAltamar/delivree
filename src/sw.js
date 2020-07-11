importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate, NetworkFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

if (workbox) {
  workbox.precaching.precacheAndRoute([
    {
      revision: "c341cf69417b909952179278c8f530a8",
      url: "asset-manifest.json",
    },
    { revision: "6e1267d9d946b0236cdf6ffd02890894", url: "favicon.ico" },
    { revision: "08bb35fcce7a5b5572f9e6cb6a4d7efd", url: "index.html" },
    { revision: "2828bfc5243d083de02da37607032780", url: "logo192.png" },
    { revision: "6be8a2e0f5817881e3a90170d4d2df5c", url: "logo512.png" },
    { revision: "70c9e9ae65fdc1a1a3024867a6bb2d27", url: "manifest.json" },
    {
      revision: "e6d0b8d529995519210461d28b09f044",
      url: "precache-manifest.e6d0b8d529995519210461d28b09f044.js",
    },
    { revision: "fa1ded1ed7c11438a9b0385b1e112850", url: "robots.txt" },
    { revision: "590cf8fa8343d7034a20827d0b7d1056", url: "service-worker.js" },
    {
      revision: "4a692509b550df928e60362679930223",
      url: "static/css/12.5c240233.chunk.css",
    },
    {
      revision: "9461a9f4f3538d62f886df34a94b9200",
      url: "static/css/16.fb7f7995.chunk.css",
    },
    {
      revision: "67be437a8e49ddaf954d13d0400939b1",
      url: "static/css/7.af3c1da9.chunk.css",
    },
    {
      revision: "19a0b33f0fe8cfc8a7b46e81b227c266",
      url: "static/css/main.17b3b76a.chunk.css",
    },
    {
      revision: "ca0d99331d2e66f15d81ebd03ff44368",
      url: "static/js/0.5e8fb26d.chunk.js",
    },
    {
      revision: "4e2c02fcb88b596eaa92de7b97a0e735",
      url: "static/js/0.5e8fb26d.chunk.js.LICENSE.txt",
    },
    {
      revision: "41df813183701fe5a84e41a3d6aea313",
      url: "static/js/1.3397ae71.chunk.js",
    },
    {
      revision: "58777cbdca59f55f2f187214a4a8c124",
      url: "static/js/10.bfee73aa.chunk.js",
    },
    {
      revision: "1639906d5d511099e1fee42c670f9f04",
      url: "static/js/11.8782ba84.chunk.js",
    },
    {
      revision: "20cdaff1482595cd19c5a5371bc51574",
      url: "static/js/12.9e7e7ea1.chunk.js",
    },
    {
      revision: "e0822291671a3c6630f9d6dadae3b30d",
      url: "static/js/13.717a812d.chunk.js",
    },
    {
      revision: "9601bf8a5714a63fe5856b213f4e053e",
      url: "static/js/14.8def9d75.chunk.js",
    },
    {
      revision: "819e343d01917f749370654c59f184c7",
      url: "static/js/15.b7539c9a.chunk.js",
    },
    {
      revision: "5d3b3a36f94987b2f2e8f931c9b1b2f9",
      url: "static/js/16.e2954671.chunk.js",
    },
    {
      revision: "c6dd18c3ae5950d34e04fc725674e53a",
      url: "static/js/17.a17b4ee1.chunk.js",
    },
    {
      revision: "780ef62b837663afad6a5a7f75a83a76",
      url: "static/js/18.b0c95ef1.chunk.js",
    },
    {
      revision: "346af175ed8b7cda4fccc68bdb30f9ca",
      url: "static/js/19.5a934f09.chunk.js",
    },
    {
      revision: "abc67eb7f694b8fc196a36a06d8ae3e9",
      url: "static/js/2.418aa8ed.chunk.js",
    },
    {
      revision: "152367d735a5f23454648fa74810feaa",
      url: "static/js/20.f561bc8d.chunk.js",
    },
    {
      revision: "266536f5d4dd9185dcb087599454a52d",
      url: "static/js/21.dedcee22.chunk.js",
    },
    {
      revision: "b69e3c9ee9e1232d13ba8e7dae56ea62",
      url: "static/js/22.9d60990f.chunk.js",
    },
    {
      revision: "f3be8a8178522d5bfc2f3f8fe68d9d82",
      url: "static/js/23.6d2f2b33.chunk.js",
    },
    {
      revision: "dea6ba853f4fd3dd58264af831aa92b2",
      url: "static/js/3.0247d349.chunk.js",
    },
    {
      revision: "31f122e725a05c07b62297b0b95f18a5",
      url: "static/js/4.87ccd86d.chunk.js",
    },
    {
      revision: "035849b8ec5738cae0ba834a9a10c8db",
      url: "static/js/7.b86cee3b.chunk.js",
    },
    {
      revision: "117d65892edc8adcd29d4a0d57b5a80a",
      url: "static/js/7.b86cee3b.chunk.js.LICENSE.txt",
    },
    {
      revision: "6f007162bfcb20911bb7bf08cde517b4",
      url: "static/js/8.454f5ff2.chunk.js",
    },
    {
      revision: "973ae56f54be2e9ca6a2fa81ffaa61cc",
      url: "static/js/9.624c8431.chunk.js",
    },
    {
      revision: "79f85af6d6b26a3c317ac8703b3f9a0d",
      url: "static/js/main.3b91a789.chunk.js",
    },
    {
      revision: "478b3b4a6aa9d06192fe358f5463c532",
      url: "static/js/runtime-main.9d6152b6.js",
    },
    {
      revision: "28e81ee6aee43603dd5af3afaaa2f773",
      url: "static/media/restaurantHero2.28e81ee6.webp",
    },
  ]);

  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });

  workbox.core.clientsClaim();
  registerRoute(
    ({ request }) => request.destination === "script",
    new NetworkFirst({
      cacheName: "script-cache",
    })
  );

  registerRoute(
    // Cache style resources, i.e. CSS files.
    ({ request }) => request.destination === "style",
    // Use cache but update in the background.
    new StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: "css-cache",
    })
  );

  registerRoute(
    new RegExp(".+/cloudstorage-abfc4.appspot.com/.+"),
    new StaleWhileRevalidate({
      cacheName: "firestore-images-cache",
    })
  );

  registerRoute(
    // Cache image files.
    ({ request }) => request.destination === "image",
    // Use the cache if it's available.
    new StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: "image-cache",
      plugins: [
        new ExpirationPlugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
      ],
    })
  );
}
