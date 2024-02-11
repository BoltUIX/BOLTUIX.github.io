'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dcd59431cdfdbaad3550f58d15c5dea6",
"assets/AssetManifest.bin.json": "5fdac34abd26934878155cd9fcf598fd",
"assets/AssetManifest.json": "6fa1ac0b83e99581ca0a59cb12a30984",
"assets/assets/anim/404.json": "53f5efd8ad8d26b977c2756f998c8482",
"assets/assets/anim/7.json": "23851fc3a1533fa847ae12038426780a",
"assets/assets/anim/anim.json": "fbe9edc80c6e24ca61ac0420252fe653",
"assets/assets/anim/line.json": "fbe9edc80c6e24ca61ac0420252fe653",
"assets/assets/anim/line_blue.json": "c68d4363dfb110270986e5b06370ebca",
"assets/assets/anim/m3.json": "ab10392eb9976adece47469bc0f465ef",
"assets/assets/anim/material_bg.json": "f6a4e8f6ed25eab61ab1b7d1b4740666",
"assets/assets/anim/material_line.json": "fbe9edc80c6e24ca61ac0420252fe653",
"assets/assets/anim/material_line1.zip": "292fa2dc433bec3af1ee5c311cd9edbb",
"assets/assets/anim/material_logo.json": "2054dd60bc8759a248eca56953bb3f2f",
"assets/assets/anim/shape.json": "6911a6ea07f0b6e6a914be86b2104d98",
"assets/assets/anim/shape1.json": "6911a6ea07f0b6e6a914be86b2104d98",
"assets/assets/anim/space.json": "23851fc3a1533fa847ae12038426780a",
"assets/assets/images/1_button_elevated.webp": "122d59d69aa20630d0e9d00f0341e1fe",
"assets/assets/images/1_button_fillled.webp": "ee5094ff733963e0398fc2b16044a1d4",
"assets/assets/images/1_button_fillled_tonal.webp": "eaa8d8b0e0145dd87e567c4ad9bd1cb7",
"assets/assets/images/1_button_outlined.webp": "a1f57f65473d845560cf23cecb256497",
"assets/assets/images/23_menu2.png": "edf380d049219f05a325f9d87113fa73",
"assets/assets/images/29_textfield2.webp": "370352c37767f6e64c7108ffc5cf5139",
"assets/assets/images/29_textfield3.webp": "d7455e5b2f3485cd3080193df3db5b10",
"assets/assets/images/2_fab_color.webp": "3110c2580b9798f2aa2bfcab9eb82c1f",
"assets/assets/images/2_fab_extend.webp": "dd915c9dbaf975a0f2ffb123e3d07165",
"assets/assets/images/2_fab_large.webp": "40170b019da62836c8502c92307928ef",
"assets/assets/images/2_fab_normal.png": "de918e465abf9f4afdd6317cb406eb8a",
"assets/assets/images/2_fab_properties.webp": "da4785c881d0326a56f4c1883b63ad1e",
"assets/assets/images/2_fab_small.webp": "0f9264e7e0200bae8a00e57a349897cf",
"assets/assets/images/32_banner.webp": "e6c568dfbce6a6df75c6d298ea3d9a8c",
"assets/assets/images/33_typography.webp": "a1349da5232c841a5c5d64bd3d356165",
"assets/assets/images/34_custom_font.webp": "909e4896538c3c1581a3e1a238143e68",
"assets/assets/images/35_transitions.webp": "de12dcd1781b8dc606bb5e6b53c53059",
"assets/assets/images/36_elevation.webp": "1d80f17b5d3c29d787c09dbabe76843d",
"assets/assets/images/37_shape.webp": "f3c49aa43d7e6d3b3d27d95b653d610f",
"assets/assets/images/38_color_system.webp": "8cd5acb05907d36ed3606c09a7c8beac",
"assets/assets/images/39_material_theme_builder.webp": "e35c31bc437bfbbd448bed22e6fa68c7",
"assets/assets/images/3_fab_extend.webp": "fb2fcbcff60c1bb2cb981adc29cd9b75",
"assets/assets/images/40_adaptive_layout.webp": "62f8152ad110878354ec41f7bd7956c4",
"assets/assets/images/4_icon_button_2.webp": "d26666e23c81a29097e8f617628fc2d4",
"assets/assets/images/5_button_segmented.webp": "7fe821ac297fb0f93a3b883e798b47d0",
"assets/assets/images/5_button_segmented1.webp": "f26ab47c5398053f94a8ef8099186566",
"assets/assets/images/8_snackbar2.webp": "73efc87af2783f34e7ec12c3963162ee",
"assets/assets/images/about.webp": "645dafe673b2af6128884968db6e44da",
"assets/assets/images/app_bar.webp": "1e8a0c237bd6954de3ca001b836bda1f",
"assets/assets/images/badges.webp": "af7e8f9e0f4ba0af93bd875d511a9a0b",
"assets/assets/images/bg.webp": "41fc76bd953355257c61b8fd04db994c",
"assets/assets/images/bottom_app_bar.webp": "4d642dfd74128cdcdaf7174f9a7395dd",
"assets/assets/images/bottom_navigation.webp": "55ff988b71c92e0bfb14724c9965de4e",
"assets/assets/images/bottom_sheet_modal.webp": "5b3db8d6c6faec1e8e2d51e94eefa0b8",
"assets/assets/images/bottom_sheet_persistent.webp": "efe2ceabafd52c9d556529b702561c8e",
"assets/assets/images/button_text.webp": "e5b11a0cfba4501496b6e805333dac60",
"assets/assets/images/button_text_gradient.webp": "10885901b00ffebf836dff32a6d523db",
"assets/assets/images/checkbox.webp": "66c3d972eb0ea41faef5c47a2a65ad1f",
"assets/assets/images/chip1.webp": "49a155c38429fc92812d4b6a3a84c773",
"assets/assets/images/chip2.webp": "b0753a4b082dfb45ff7cef9228b7c51c",
"assets/assets/images/chip3.webp": "c2b6d3848bcd4d18f6d9abe56ccd8791",
"assets/assets/images/chip4.webp": "1b9783b7e08e2dd2e0a42750a4bd5c03",
"assets/assets/images/color.webp": "236432e64be4e0f7694555433430ec2f",
"assets/assets/images/common_text_fields.webp": "370352c37767f6e64c7108ffc5cf5139",
"assets/assets/images/component_button1.webp": "1e55dec8af2a895f68390adabe3339a3",
"assets/assets/images/cupertino_action_sheet.webp": "d2e9b8ccd09881d64af44d7811f0321d",
"assets/assets/images/cupertino_activity_indicator.webp": "dbf13cfdc07a120bd7a816fbafff25f0",
"assets/assets/images/cupertino_alert_dialog.webp": "cffe81de46d77dba5b791619e2932563",
"assets/assets/images/cupertino_button.webp": "73542ff47e0bcc255208ae4fc9eec208",
"assets/assets/images/cupertino_context_menu.webp": "e795f5b2a9fb647c03fba01b4ca5b2fa",
"assets/assets/images/cupertino_date_picker.webp": "21d3922c32627e77192eebb4cb82f090",
"assets/assets/images/cupertino_list_section.webp": "a3486f5bd3122691ecf02580e279e7b6",
"assets/assets/images/cupertino_nav_bar.webp": "22567fc91f553ea6eb3a5d82d653a9ed",
"assets/assets/images/cupertino_picker.webp": "4a1df23a4c448f15bd877e139897303c",
"assets/assets/images/cupertino_scrollbar.webp": "14dd752e3ba6556b2f1f127241f6793f",
"assets/assets/images/cupertino_search_field.webp": "bfb056d3099c38dbba297e402853b04c",
"assets/assets/images/cupertino_segmented_control.webp": "7f236d22129a8694130c61e5c6722f57",
"assets/assets/images/cupertino_slider.webp": "dbd0f8116be82b94bb3120a30c8947d3",
"assets/assets/images/cupertino_switch.png": "6d27cd008a66bf8c5317f2dd6760f6db",
"assets/assets/images/cupertino_tab_bar.webp": "e98fe2014bf3f7963794c919559f3000",
"assets/assets/images/cupertino_textfield.webp": "bd05b9b37bb63b9249b0d147e3e40614",
"assets/assets/images/cupertino_timer_picker.webp": "674e1a21605f0126a616cbbf3268a5ca",
"assets/assets/images/data_table.webp": "90a1ecc245ad23b51e77a6d8fb84be68",
"assets/assets/images/date_picker.webp": "714524c3b126fe471e006fd9d09059b0",
"assets/assets/images/dialog_basic.webp": "bb0b86bc3fd2118a859b18494264c98b",
"assets/assets/images/divider.webp": "2d330ddb2f6f73a8c80b3f93d8611f6c",
"assets/assets/images/elevation.webp": "1d80f17b5d3c29d787c09dbabe76843d",
"assets/assets/images/empty_state.webp": "050f18c630b06b9381ed05b4394ac89c",
"assets/assets/images/expansion.webp": "6cee43347cb56755203919e3e496e526",
"assets/assets/images/filled_textfield.webp": "c650785618da60cd1c6cb2df23dcffe6",
"assets/assets/images/flutter_announcement.webp": "66e36a8e3a268a15ab3ac68d74e65c15",
"assets/assets/images/grid.webp": "33c136b9e78df92050d0c9340ec57bfb",
"assets/assets/images/icons.webp": "6ce5ef48480583c6326af8e804e98748",
"assets/assets/images/icon_button.webp": "56e4aa55ad1f95341c90fa1048c15a4f",
"assets/assets/images/imagery.webp": "d43cbb422745194b8d16feb4e5bfd5ba",
"assets/assets/images/launch.webp": "a97a7b09b3b9bcdfdf88bf1fb92b3ec2",
"assets/assets/images/list.webp": "faa8fde2403298ab3a5de4f5a87d21c4",
"assets/assets/images/list_title.webp": "093d2abff02cc7e1c5859c53d1d93fea",
"assets/assets/images/motions.png": "a368b1b32b6dc42ce56ee3c26895ab93",
"assets/assets/images/navigation_drawer.webp": "2baac808524069e82f9b0fca1c82f879",
"assets/assets/images/navigation_rail.webp": "42404a70b45e39758e2c18a43c46bab3",
"assets/assets/images/onboard.webp": "c5cded4099b53114a93b4f312e67c83c",
"assets/assets/images/outlined_textfield.webp": "7088c7026c4e4817b0c51ff489b71531",
"assets/assets/images/progress_bar.webp": "a5152d1886fb452db70b2386effe4670",
"assets/assets/images/radio.webp": "0d87d6c0ba28137ffdb9a7fc6113846e",
"assets/assets/images/slider.webp": "f691d44ae5c5379d1e2f7df886c72220",
"assets/assets/images/stepper.webp": "82a197d6c9fc5a224a5b2a850a7d3e41",
"assets/assets/images/switch.webp": "fecc59ca3d3bcc5a6ce4258d31545cae",
"assets/assets/images/tab_layout.webp": "2ca4adf5e0ec57ba1c0b658e6d187b57",
"assets/assets/images/time_picker.webp": "27b07e12090bbe14da406978d1ce055e",
"assets/assets/images/tooltip.webp": "9b6b0934a978f0829ddab9c56625b197",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b5ab18080812c14f2bc0a56cb1d5920d",
"assets/NOTICES": "53bd7883e77ef31bcbd0d21bd730b890",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c25825328f5e911a567dee4a1cd0e03e",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "dcf4103b74bb9d6522015f529f2fd73b",
"icons/Icon-512.png": "cfa6b4faa41b623f826086437eed92d7",
"icons/Icon-maskable-192.png": "cfa6b4faa41b623f826086437eed92d7",
"icons/Icon-maskable-512.png": "cfa6b4faa41b623f826086437eed92d7",
"index.html": "6b0490eafa42b5d2f5f5de2223d6ba87",
"/": "6b0490eafa42b5d2f5f5de2223d6ba87",
"main.dart.js": "a951029ccb4340a8c8f42d860261d8fb",
"manifest.json": "d5d6187051e77f9bb253177a6ca4632b",
"version.json": "1df16c850b5a94499d62b5909a2e1e65"};
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
