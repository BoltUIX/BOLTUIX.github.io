'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "279c5968bf35d1fd0aa37d11225cb46c",
"assets/assets/anim/developer.json": "7291e369e716ef4e64d1eb1552c2050b",
"assets/assets/anim/developer.zip": "642f8524c43c18f5b1b78c048df34d06",
"assets/assets/fonts/BonheurRoyale-Regular.ttf": "b7a75d41edda50101fff48a7d2ad3853",
"assets/assets/fonts/Jost-Bold.ttf": "693d37486a0eab3d822b5f6b185f11e0",
"assets/assets/fonts/Jost-Medium.ttf": "2c2945b9da98d9b48d6104893d9558c0",
"assets/assets/fonts/Jost-Regular.ttf": "3dba44482cb4f0bfa595833a76643d93",
"assets/assets/fonts/Jost-SemiBold.ttf": "bcac976eb8c9ec9a512ec8a53fac8be9",
"assets/assets/images/10_Connection.png": "c3c2e263ba2e46517cd4eaccc0084e47",
"assets/assets/images/19_Error.png": "61ae46b4ffb30c250bb6416ad54dbac4",
"assets/assets/images/7_Error.png": "8934445e449486fc6fdf4365dd4ac029",
"assets/assets/images/abt_loader.json": "b1f83f2f01f045e9d3e0f914c0641f77",
"assets/assets/images/bg_no_item_cactus.png": "3c29ead3998c5dbae56f42c3275daf58",
"assets/assets/images/bg_no_item_city.png": "23965fcf6742ec174111593b6d6b0e1c",
"assets/assets/images/bird.png": "fa1f748787103b2d1386d531d3804333",
"assets/assets/images/bird_flutter.png": "14963278b1eacab6784abee0ee829e5a",
"assets/assets/images/chat.png": "754d734a7811f29240f1aac62d44df93",
"assets/assets/images/facebook.png": "3b149a0e5a55d5a92f114f091364de40",
"assets/assets/images/flutter.json": "caf07791c9fdf8c951c1e5441b70fb03",
"assets/assets/images/github.png": "73f6facb5690334ce00e33382c60bda6",
"assets/assets/images/google.png": "66047864288a9df7b69c6bc3c94d16f5",
"assets/assets/images/google_logo.png": "6067f49d4b722f3ce02005548be05fad",
"assets/assets/images/headset.png": "c292a4f05283f8f341d6dc80ccab758f",
"assets/assets/images/ic_copper_card.png": "f885c6bfe375e1beacbc61353231f0c8",
"assets/assets/images/ic_social_facebook.png": "95464149e9509e509e4c8ae8903700ce",
"assets/assets/images/ic_social_instagram.png": "7871dd17efa479351c4367c9069c946c",
"assets/assets/images/ic_social_twitter.png": "b7750241a9d3da5e9c82b6b0bf54e4fc",
"assets/assets/images/ic_visa.png": "50d1fa1fa93c690ae2260185badf4e40",
"assets/assets/images/image1.png": "d10514763d52437e3c1c40a2e09f31ec",
"assets/assets/images/image2.png": "80f994a4ad6bd6b7e81ef74867ddac74",
"assets/assets/images/image3.png": "c219544282c8ba651a9b410ebbecc0dc",
"assets/assets/images/image_user.png": "4d289bb5f95b344ebb8f5eafa9e02beb",
"assets/assets/images/img_plant_1.jpg": "b57c9ce94992c8f501f57453864b953e",
"assets/assets/images/img_plant_2.jpg": "f385316ffd67374cd14e5e2b2c49b9d0",
"assets/assets/images/img_plant_3.jpg": "cba797fccc962ce993a2cc69d8a1cfad",
"assets/assets/images/img_plant_4.jpg": "6bcecedd4ddab395d460bee80c44c12f",
"assets/assets/images/internet.png": "13d1bf1e34182e9a2e790fe861b5a096",
"assets/assets/images/intro1.json": "8db7f7312372a5b6b046c8d3f9d952f7",
"assets/assets/images/intro1.png": "75b0b0a461a601bee7a6d935ad72a5b1",
"assets/assets/images/intro2.json": "f52b501963766cf4fd3b38b4c43c8ef8",
"assets/assets/images/intro2.png": "11a5b23017104921ba8afb61b7168af9",
"assets/assets/images/intro3.json": "af1f820644382841906c1de170265e9d",
"assets/assets/images/intro3.png": "8a2c477082d17a5f7de0f951e947320d",
"assets/assets/images/intro4.png": "13a9cfe6bd32673dd9f70f6be26b466d",
"assets/assets/images/loader_black.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/loader_blue.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/images/location.json": "dd2872668ddae97bc75bdf39b690484e",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/logo_small_round.png": "f44d8a4c46b57d9ccd04a2aa96dcd750",
"assets/assets/images/maintenance_mode.png": "a991b71f3cc505fd1a0f8c8441090259",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/material_bg_1.png": "305793810f533ba90a847f765887220a",
"assets/assets/images/phone.png": "f940f31784e355dbcff409bd01888b67",
"assets/assets/images/rating.json": "ebc37db958ff19bb290bdf0383f3a1da",
"assets/assets/images/reading.png": "001cf80b51aadbdc03f9c9116261f02b",
"assets/assets/images/relaxing-man.png": "eb145b120f9d4200453c0be5ee8ca352",
"assets/assets/images/robot.json": "3d9e14b9731ccde68504f3d3676de8b0",
"assets/assets/images/run.png": "699af1f76814600e1bd65afac98af4b4",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/user.jpg": "5828ad62a78dcb93e8c8b5652e19f3f1",
"assets/assets/images/user_cat.webp": "b633bcfd515c7035ccc1135158f89081",
"assets/assets/images/world_map.png": "fe2acba8940af85e6e799c009da308d2",
"assets/FontManifest.json": "43d7014249204d44fe6f6965aa85b91a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9ac2c065819a3f5a057c36e763b7f1fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a072fac1645ca0e797d0a97a79e52f7",
"/": "5a072fac1645ca0e797d0a97a79e52f7",
"main.dart.js": "05901af3dd2b24284d47c88bd7660115",
"manifest.json": "3c3ef41ea66302006e5680dfeccb0bd8",
"version.json": "f4bfcc84fd3a6f241b19fcd7b29b5692"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
