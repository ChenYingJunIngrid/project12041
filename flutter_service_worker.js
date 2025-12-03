'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e8e8742c8ec1f628070e9a14c158c6be",
"assets/AssetManifest.bin.json": "a4ad4470672c1214702fca636b7e3303",
"assets/assets/abandon.jpg": "11fa589e2ba8344300b9afd8b2066653",
"assets/assets/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/assets/ability.jpg": "f1fd8c1afb2123dda05765f4a23c99a5",
"assets/assets/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/assets/ability.png": "ad667359907e220a45c9f83aed88634e",
"assets/assets/able.jpg": "a8a8c533ea1ffed1370726141b823339",
"assets/assets/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/assets/aboard.jpg": "80246750094a96c7efe19f8a35e06d13",
"assets/assets/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/assets/abounding.jpg": "01be9b6178fc5875a7f6547edbc8a6d2",
"assets/assets/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/assets/about.jpg": "4f0176d59ff64069abb97e6a0a85f090",
"assets/assets/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/assets/above.jpg": "5a3b0540dcab2f92f4cf01db478944b9",
"assets/assets/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/assets/abroad.jpg": "6323441e3e1fd5431ec290376ee30242",
"assets/assets/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/assets/absent.jpg": "0e3eba46f861c2bb92ed13f46d95e119",
"assets/assets/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/assets/absorb.jpg": "15a5909ef0f600d486cc72864e4a6922",
"assets/assets/absorb.mp3": "ea822877c0efa62884d71cdd816edf0d",
"assets/assets/accent.jpg": "a7c3536cc7cf044b0cb068be1f41b74f",
"assets/assets/accent.mp3": "c9f41bd776145a3f34e7079e4139328a",
"assets/assets/accept.jpg": "0b8831ac3c32217f26136f9922db79fd",
"assets/assets/acceptant.jpg": "286d9762fc35ea3985083a5cbd07ca92",
"assets/assets/accident.jpg": "dddd85de8d2bd37787805004a2802cb3",
"assets/assets/accord.jpg": "86e0372d02284f9d0479021552709707",
"assets/assets/account.jpg": "f3f2bea8f233c2e713a76ef201fd2b74",
"assets/assets/accountant.jpg": "34b49ac55e03e5b31a3d74909e8b3534",
"assets/assets/accurate.jpg": "7f73318da478bd5652c40df197328bbd",
"assets/assets/accuse.jpg": "a41042c759843afe95e7fa37558b64ff",
"assets/assets/ache.jpg": "73f2d841c3f91dae259bfca50d6216c4",
"assets/assets/achieve.jpg": "dde8bcba7a00ae1693207d84db45dca3",
"assets/assets/achievement.jpg": "f999c79d4f7e3aca3b403a48e2567da7",
"assets/assets/across.jpg": "68601287fc1ebe489775af7a3c41916b",
"assets/assets/act.jpg": "4499b6721399b719df0a6b4b9b76e2b8",
"assets/assets/action.jpg": "c3fae240b458a0704a0115bb79cd703a",
"assets/assets/active.jpg": "baa6c4518176527589c71a574d9e48aa",
"assets/assets/activity.jpg": "5501656f999bc0ca8df35a665caafcc8",
"assets/assets/actor.jpg": "3d807b2fd9128234b6761479b9138b33",
"assets/assets/actress.jpg": "60c3dce9edd6750e24524645877744c4",
"assets/assets/actual.jpg": "5786fa227cd6892ec226af793f723417",
"assets/assets/actually.jpg": "87109838468d3cdccf1ecb4c35032b59",
"assets/assets/adapt.jpg": "0c72e6c91d8bd4603562db592e8d8ad9",
"assets/assets/add.jpg": "d40ebbe1923216e0714f0739f90a6607",
"assets/assets/address.jpg": "bd97807f8334f223bd74379324edf9ac",
"assets/assets/admire.jpg": "7fc6d221ab00062aac30c952daac01a2",
"assets/assets/admit.jpg": "5038b4a4c3506c7fc6581bd3e2df9ebf",
"assets/assets/adopt.jpg": "977436ef5e30f6cf73599ad2014b3c34",
"assets/assets/advance.jpg": "eeaab464e9caf68c459e06c0dbdba2af",
"assets/assets/advantage.jpg": "5a1d008c4cbdec470f089effca4dd9e1",
"assets/assets/advertise.jpg": "0464900c7fbbae6029b6b60171ac6f84",
"assets/assets/advertisement.jpg": "db0efa48148173f3b1636757d915b5bc",
"assets/assets/advice.jpg": "df97f3d1bbb7665679f71d423ed957e7",
"assets/assets/advise.jpg": "14928820d77d4368338e1c66f4bb7a3e",
"assets/assets/affair.jpg": "ba748606fa0608a4d9c6df1519a507f9",
"assets/assets/affect.jpg": "b94b284a7ec991e5c023c6490c92aa39",
"assets/assets/after.jpg": "cb56ac9416897235a6196f5a70f20e11",
"assets/assets/again.jpg": "bb05b1b67ac495fbdd21d3239df14272",
"assets/assets/against.jpg": "e67601899f0fb29b30fc7fbd9e5b4fce",
"assets/assets/age.jpg": "3032e51ef348911338d0d6ddd0240d14",
"assets/assets/ago.jpg": "fcdfa3ecf5f183ef9b47a451421f3092",
"assets/assets/ago.mp3": "55ba13d087b4b98a2312f65c61412c91",
"assets/assets/octopus.png": "c8eacb9d37a47ef5d2fc92a67212df2b",
"assets/assets/person%2520holding%2520an%2520orange%2520book.png": "fe60d378ea549be3202c400b9eee87f8",
"assets/assets/personalresult.jpg": "e8d6fcb46b987888bc3539e5171c1d61",
"assets/assets/personalresult.png": "da3afe10cde5924c8e155394458b5998",
"assets/assets/wizard.jpg": "d9fd340a3b3a83472bf28c2ec7f840ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "55f3b1749e732a4093450e705ae2c4a8",
"assets/NOTICES": "3334cce99b8b639e763a1e16d85757ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d8fc1028928438d6a0368b0b51d9c54a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8fc6e6c49130a2602925eefd9e3a1096",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2a9da4570e74ec7241464a550e848be",
"/": "c2a9da4570e74ec7241464a550e848be",
"main.dart.js": "cfb3046a5c2ce95a72f8b465883779da",
"manifest.json": "f81443f23157d0bc8cb251cbba341dd2",
"version.json": "a07adc18a04206628be18ccef5475683"};
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
