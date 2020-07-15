importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate, NetworkFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;


if (workbox) {
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

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
