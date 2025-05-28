'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/MaterialIcons-Regular.otf": "f49b5e388dd5132f52f61c78aa37b8ca",
"assets/AssetManifest.bin.json": "11c8b095fd5322645d5e750ae4f7b89c",
"assets/AssetManifest.bin": "95743bd75a153eea1244c5129b778902",
"assets/AssetManifest.json": "073418916c3530448213e35024f842fd",
"assets/assets/event_images/aust_iupc_2022/475455259_1850298425713965_7237281727436605880_n.jpg": "119f7876a6e3e678cd7d2d2e27b42275",
"assets/assets/event_images/sylhet_tour_2022/WhatsApp%2520Image%25202025-05-28%2520at%252018.45.19.jpeg": "e41c83f26c15b39295a5f067f4d98f48",
"assets/assets/event_images/ruet_iupc_2022/ruet-iupc1.jpg": "565a19e6771c8262caa45a03fb1ff9b3",
"assets/assets/event_images/job_joining/475775192_1851426915601116_1504323245011454393_n.jpg": "347f865302dbbf105d2f0bad293399ab",
"assets/assets/event_images/word_camp_sylhet_2024/2.jpeg": "bc634313d4eb19bc8e9e0b2db61504dd",
"assets/assets/event_images/word_camp_sylhet_2024/1.jpeg": "0710db74ddf17fdda0aebda851ea9927",
"assets/assets/event_images/word_camp_sylhet_2024/481900558_1877121303031677_688003095720842657_n.jpg": "7300e6aa81edbc1f41ee877c5db668c5",
"assets/assets/event_images/word_camp_sylhet_2024/WhatsApp%2520Image%25202025-05-28%2520at%252018.08.41.jpeg": "da5fb533c1478c054b964b84eec1d7a6",
"assets/assets/event_images/word_camp_sylhet_2024/4.jpeg": "61af9dcdf2b44d51bab7a4837b969b3a",
"assets/assets/event_images/word_camp_sylhet_2024/WhatsApp%2520Image%25202025-05-28%2520at%252018.08.40.jpeg": "52041a2266ae48392a6721b2fec1a942",
"assets/assets/event_images/britania_iupc_2019/81583789_638596426884177_4032595754001367040_n.jpg": "7234e96beac0ac4fb4ca3af2daf1c13f",
"assets/assets/event_images/britania_iupc_2019/86252358_667926573951162_8866036036342382592_n.jpg": "a385f3926c3ba33b8b5a6cb99604267a",
"assets/assets/event_images/britania_iupc_2019/81621365_638597523550734_164946702879424512_n.jpg": "512ff8018fe2c522dd76ef6d2a5a4c03",
"assets/assets/event_images/sundorban_tour_2025/2.jpeg": "65e80d73a80073d13e76adba585db570",
"assets/assets/event_images/sundorban_tour_2025/WhatsApp%2520Image%25202025-05-28%2520at%252018.16.31.jpeg": "9daec20fe640caf3ec3e8ac2590aa2fa",
"assets/assets/event_images/sundorban_tour_2025/1.jpeg": "d5277319dcb14104b305cc9d849d874f",
"assets/assets/event_images/sundorban_tour_2025/WhatsApp%2520Image%25202025-05-28%2520at%252018.16.32.jpeg": "d4f58bc6b69bfc54e4af702e6f14a40b",
"assets/assets/event_images/sundorban_tour_2025/WhatsApp%2520Image%25202025-05-28%2520at%252018.16.33.jpeg": "342e4fd2c95fc6031421fb0324f0f427",
"assets/assets/event_images/ai_hackathon_2025/REZ09793%2520(1).jpg": "d5dba8a2fd9164a11e0a92d874d15163",
"assets/assets/event_images/ai_hackathon_2025/REZ08772%2520(1).jpg": "e94576ab9009d2c90b15bad814cfca74",
"assets/assets/event_images/ai_hackathon_2025/REZ09110%2520(1).jpg": "160fbef70fad9e89617822aa8fec39aa",
"assets/assets/event_images/ai_hackathon_2025/REZ09115%2520(1).jpg": "c56a1c3594435103b6d92aa24a86dae6",
"assets/assets/event_images/ai_hackathon_2025/REZ08720%2520(1).jpg": "b0644360d7931d1cffd4e21831575bec",
"assets/assets/event_images/chuti_resort_2024/2.jpeg": "14e2a061cf79035013c2089303ed7e9d",
"assets/assets/event_images/chuti_resort_2024/1.jpeg": "ea8e5ea3d843d2d243165cea1c68e88e",
"assets/assets/event_images/chuti_resort_2024/3.jpeg": "63f335659076d8297739ec6a885af559",
"assets/assets/event_images/chuti_resort_2024/4.jpeg": "29dc6ecf3e52f4853c5ca8ae8a422c3e",
"assets/assets/event_images/buet_iupc_2022/1658760697763862047-1263693215454992715-dac90ac99add0325417995a4737636f8.jpg": "8ba09c290291783373264757f118eb42",
"assets/assets/event_images/saint_martin_tour_2023/WhatsApp%2520Image%25202025-05-28%2520at%252017.16.14.jpeg": "b988cb5c2f83f8f83f6599f6a6890875",
"assets/assets/event_images/saint_martin_tour_2023/WhatsApp%2520Image%25202025-05-28%2520at%252017.15.37.jpeg": "3eb8f1ae068af281a0cee86735d864f6",
"assets/assets/event_images/saint_martin_tour_2023/WhatsApp%2520Image%25202025-05-28%2520at%252017.15.36.jpeg": "b8855839abf50bdefb2e36795924aa74",
"assets/assets/event_images/saint_martin_tour_2023/WhatsApp%2520Image%25202025-05-28%2520at%252017.16.17.jpeg": "d98ab6effbe294ad956b96227de93bd2",
"assets/assets/event_images/saint_martin_tour_2023/WhatsApp%2520Image%25202025-05-28%2520at%252017.15.42.jpeg": "59fe8058f0213bfb89c2a0532b4f2c13",
"assets/assets/project_images/viraltok.png": "0012414013245e7767ded7cfcae91e7a",
"assets/assets/project_images/ecommerce_app.png": "43a6dbb96675c6c724d5e29498d2d468",
"assets/assets/project_images/appza_app.png": "3549f0a9976111a8603b7281a416e4ff",
"assets/assets/project_images/simple_staffing.png": "13c5c48c112e81a0396b87528d58bdb1",
"assets/assets/project_images/terminal_bd.png": "77910b06d3a4a4c4959be57ca21cc0fa",
"assets/assets/project_images/nourish_app.png": "d2fbe7f676237207de2f960b04b44be3",
"assets/assets/project_images/qrf_app.png": "5352ac150f764747cb7857dccc2cf0d6",
"assets/assets/project_images/fair_price_shop.png": "fdce586a4f7b48f5dcf0f69f160cc6f8",
"assets/assets/icons/launcher_icon.png": "43a6dbb96675c6c724d5e29498d2d468",
"assets/assets/pdf/saiful_hossain_resume.pdf": "32e5142c1e67c7de20c61a6fbbe80055",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "6410a9cee6e4224422b5b5b0ada200f5",
"assets/NOTICES": "132e244b376e5980fb772798edfad202",
"main.dart.js": "0c03e7bda9f4bd1f896bdac2ffc1b912",
"manifest.json": "70e3468d4a62fbd1f54c46d6086e1dff",
"version.json": "9b818ca9511483c901bed1545384376c",
"404.html": "e421cee64c3bb9c483ede7592446d0cd",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"flutter_bootstrap.js": "72e6aaa11ae3047b5bac75c0917e8750",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "9ba23a826e465b6b976bc67dfa10e306",
"/": "9ba23a826e465b6b976bc67dfa10e306",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
