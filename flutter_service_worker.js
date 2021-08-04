'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/15/fc37522db1086f9ddd479368c54dd200c6e5fb": "0b85aafc4d81421f7abeaf21f72dacf9",
".git/objects/d3/fcf32a4e6940a2b20033fcb093a67a7510322d": "9847e5031a70491c5e3cef69ca27cfc1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/fe/c025d02e612a9de51052eae27862a1dd89363d": "8c84acb9d484a122ba41d553be268aa4",
".git/objects/2b/c8ef126c2cb53f98152135363ce37ff1d6c462": "de58d110b8596591af6e180683a586db",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/59/e6c8134bf4e0911bd086823600137441dfbf71": "43f01330c7cb9a35305c8d0a74c5520c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d9/1d67cde101ff4acb8bfe1ba8d76176488fc5d7": "6449ea72ef39a39f3dbc67585f69df3c",
".git/objects/b1/6465e46bb37398d4a6f9e82554f8f75013ee5a": "0d7155e866544d92a19e6bd383cdf1b8",
".git/objects/71/06a3d58eb274eb1a6195d73806e5690bdff080": "5446f023e7592effde19bc7b34898245",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/6d/3c5672add8fb898e0cadef3135b4e8d1f69125": "88f5213d94f0ebf703d5acc07ffa975d",
".git/objects/a3/92bd68dbdacca7eb7b4ee260904131d089aa98": "69850e4581a669d402a6f4539e4c579c",
".git/objects/ef/a5239647c13138c3f782f3e052060801fee995": "8e5ff9fd502b8c92ee8ed04745f3a6db",
".git/objects/c5/b9f8f3045ece50e60aa20501d7478482f2f41e": "1b0f4b2e919bdbdd6c296b17e84c1f42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8d/878d17050ebb8d07296f327f1dc10fc9bbc3ef": "7da678282dfb9e5599dd2131aa478c71",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/fb/948b2eed04988666d4abcf4ff06ab6e22a218e": "beed96105396b03ea72361d097d00604",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/31/e00f2df4a02ea1d19f39f475434621e8cb4cc6": "e6aa50fef820fd945f67d027f8ee8f48",
".git/objects/e1/1b36573cb3f5eb115c26a98aeb7f6d9bd8aa33": "38b7a52735e6164734a154514cec0760",
".git/objects/7c/aa8519f55f1c6172fdc6dcdb0056cf96cadc0d": "cc2afea1afad917b74ebe45fd2b81edf",
".git/objects/aa/b8ced40bb37f1f90d48c12d44789f609fa2f31": "85c37dc44e0adc953ed03cefaa2578b8",
".git/objects/e7/0a4a2ebdb29e46559feb0c0be23381d07536ed": "ab44e33d8e97f3ac4359bdc18cef2f1d",
".git/objects/9f/4dc111d5acff080249b592d29800c352bfe80a": "41ac6f9a0ee8af18cbb28bd2654eb3ad",
".git/objects/ed/23ff5556d8b2f6bbabd2144e1a89928cc4307f": "9423c5a10f184ff3f3a8e85a44e07bf2",
".git/objects/4b/fcdb35b7f48bca3429d69879bb287a4e7e30a2": "cee0505fb6ae3164a107c367ca001d10",
".git/objects/87/68bd5e2028dd3dc64e86c41b403eb315fe6bc6": "7a3f438a834bff80dd0477d30ba544d3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/ba/e483214643f94051b80697b19b2b3ab24451fd": "d20dd999ea7e1cf8d6fcf039687c239a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1c/956928aa125b18f36f15a1fb7dcb283ad1ad0c": "52eee1cf925755fd235a03e089a023f5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/logs/refs/remotes/origin/master": "a33498bc13890425433d02247b4f413d",
".git/logs/refs/heads/master": "9626d78c7cdd47415953bf5727deeee1",
".git/logs/HEAD": "9626d78c7cdd47415953bf5727deeee1",
".git/config": "0d7f598f3846fa8816421deb5aa48635",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "a7eb61b663f39e1805b2b2f4c3978d7d",
".git/COMMIT_EDITMSG": "a4a6cb8b60695d718a902afaba4c2765",
".git/refs/remotes/origin/master": "6673b296e9f5aed9052c4dcde175a32e",
".git/refs/heads/master": "6673b296e9f5aed9052c4dcde175a32e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "be8ebd9bcc2ecf7e9c6dde6e2422c710",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "b5b8d39d8a87a344bd3be3894da36e78",
"/": "b5b8d39d8a87a344bd3be3894da36e78",
"main.dart.js": "69cf66e09b3a12faa157e84dfd98190d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "a14a5ac7749edded584370cf15664666",
"version.json": "7b03bc7373e65c0ede9635f4590d1367",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
