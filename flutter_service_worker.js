'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1a8c61d4524ef51ede71d38113086e3",
"assets/AssetManifest.json": "11e247d27d839fa3eb02cc09ebea9e84",
"assets/assets/fonts/Jost-Bold.ttf": "693d37486a0eab3d822b5f6b185f11e0",
"assets/assets/fonts/Jost-Medium.ttf": "2c2945b9da98d9b48d6104893d9558c0",
"assets/assets/fonts/Jost-Regular.ttf": "3dba44482cb4f0bfa595833a76643d93",
"assets/assets/fonts/Jost-SemiBold.ttf": "bcac976eb8c9ec9a512ec8a53fac8be9",
"assets/assets/images/bg.webp": "dc67e301b13278992cb090308bcc3ec6",
"assets/assets/images/bird_flutter.png": "14963278b1eacab6784abee0ee829e5a",
"assets/assets/images/boltuix.png": "5499cfb3a332f18b1374e84833381e2f",
"assets/assets/images/business.png": "4649e3f2bb71efa35e833547d2557ab5",
"assets/assets/images/flutter_fly.png": "8da583a03812a8b16bed131dcde187ab",
"assets/assets/images/h1_hero.png": "591dbb5480b064e94acb95699e03fd5f",
"assets/assets/images/ic_social_facebook.png": "95464149e9509e509e4c8ae8903700ce",
"assets/assets/images/ic_social_instagram.png": "7871dd17efa479351c4367c9069c946c",
"assets/assets/images/ic_social_twitter.png": "b7750241a9d3da5e9c82b6b0bf54e4fc",
"assets/assets/images/image1.webp": "c72d2ef6dc9522a6d72cd1e6623120d1",
"assets/assets/images/logo.png": "5499cfb3a332f18b1374e84833381e2f",
"assets/assets/images/logo.webp": "dc67e301b13278992cb090308bcc3ec6",
"assets/assets/images/marketing.png": "4d0f2115a0998fd83ac7b4ed692718c6",
"assets/assets/images/music.png": "07f73c3d94f9d868c5365c6cab4ca3c0",
"assets/assets/images/photography.png": "dbcb4dae76073c244813176cd72ad0eb",
"assets/assets/images/thumbs_down.png": "9d91da3bb15e641a6300ffb2fb939a05",
"assets/assets/images/thumbs_up.png": "8d330540d6e203431d0cc1fd1578a72d",
"assets/assets/images/user.png": "a92e7d213a1b9c3a8472d26076605cf6",
"assets/assets/images/ux_big.png": "219d9181c8aa4216eb0cc3bedffabaf9",
"assets/assets/images/ux_design.png": "e0a228fc131bdf5209e102caf4dca263",
"assets/FontManifest.json": "54f2b1a6f6f47769b9f342a269db2012",
"assets/fonts/MaterialIcons-Regular.otf": "0d42df486393b815a379eb0267afff1d",
"assets/NOTICES": "651652591349026bc2f7f96ebaa87b54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fabbdd9f24e27cc7780f7712ac0a3948",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "e073b05954bf6a523f983854d8fe3653",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "d26220a81b10b29a6d9902d6d4b05eb8",
"icons/Icon-512.png": "b3942053d3761863a9c0344ea92ac524",
"icons/Icon-maskable-192.png": "3981bfcae6afcaa121edb6dec5c82ca0",
"icons/Icon-maskable-512.png": "b267959bbbdccecc74091a31a6bfc26c",
"index.html": "191e3599920dbd1217d9c94e4104d5c7",
"/": "191e3599920dbd1217d9c94e4104d5c7",
"main.dart.js": "8e2273984edbfeb50519553bca4017c2",
"manifest.json": "da3f4bb660700563afd714ab4607be92",
"version.json": "1ac323b06f3345787cc4e11dd2e6b8bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
