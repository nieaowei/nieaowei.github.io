/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/1905944.html","9918ba03787b0cc5ad1ea4433f826116"],["2020/1946C60.html","9c2b3e1ff83d6e56dbfc6ae04d5a263c"],["2020/1B5R51M.html","b3051cec018e910ef4112fdfee494b12"],["2020/1DYJH86.html","3c6a63020529fa5aa112c1122047309f"],["2020/1FFNQNE.html","3115141cf9af003b429def6ee2967d5f"],["2020/1FRBXF8.html","4a0cd9fee5515608d3a3d6c290f19720"],["2020/1X1JYEX.html","9b2e7d68c1bdc7277f8a04e62424781b"],["2020/224PAWM.html","a9ae64616d36cf6ac2cd1fa2d440bbe5"],["2020/22X88J.html","523bbc41eb6375fcba6415cef0a5d679"],["2020/2AATQ45.html","c7b90350bf778f072f1f1d2cb5cafcd4"],["2020/2B45ZZT.html","a2c3b93e25f096df564bd0e939bfd4f2"],["2020/2CJ51QS.html","b55566f3ff8613b93c3a612d4d138d3e"],["2020/2EQXTDP.html","2ce53a2fa4d5579ab6752d269c9bf130"],["2020/2QV9ZH2.html","3b51a63a3d867e82fb0613540a60447e"],["2020/3C7YZGC.html","180cdb5dc9ecdb67586c3e9a94620ade"],["2020/3EG8DED.html","d67a83fb162833ae1067e861192e28ca"],["2020/3F6APKH.html","f9b598f3c65db75474cdb0b2e175ff0e"],["2020/3HG63WA.html","cecc41dc346a804f1b43b62ca5d27b56"],["2020/3N2EAPR.html","9e1c40499e2a1fa8ff534e5c576d7123"],["2020/3VJHNG4.html","82c9b82873ed1b12ef1dc9fb7b3e074d"],["2020/73XEZ7.html","8e22dea1908bb94d7331e4cd3eab5489"],["2020/FC7S68.html","4be161bc9c385a498ee27a784c18c1d1"],["2020/FEJ92A.html","12cc9a28e01433eecffe7e7fb607f289"],["2020/TKXNFM.html","e55835b1663c15615653b4c1f52b12da"],["2020/YE6KFM.html","8add0923b8221997dc0bc171a7231714"],["2020/ZP5TVN.html","8cd3b6b8b46bb9ce03558c55460edb92"],["archives/2020/02/index.html","8634b2a6f37737c8b73bdfeb0299da2a"],["archives/2020/02/page/2/index.html","6598ee26b746800d9fc1cd8b649a00d3"],["archives/2020/02/page/3/index.html","a5187dbaab65ec91e9b9f556cbb48aa4"],["archives/2020/03/index.html","22c8c88693b0402e007866070962ef11"],["archives/2020/index.html","d873bf8a82bbfc9616bc1d3a10b27e37"],["archives/2020/page/2/index.html","99fe0f20320845c69cfc8a8adb43dd59"],["archives/2020/page/3/index.html","0ec0da2704abc592a6693d467f918dd9"],["archives/index.html","f01755a9d69e62ac8b8de6da63286fca"],["archives/page/2/index.html","baa831f079871aabb2523cb5b74b7f88"],["archives/page/3/index.html","cbc0717810d26ee4ad794d368e1834f9"],["categories/Git/index.html","a03f1990cbc167246e17a2acbcf94912"],["categories/Go语言/index.html","367f0c76a1e61ecb5bd0e67cbef7076b"],["categories/Go语言/page/2/index.html","7c3e4b0c04e905cba6b7f0b279355789"],["categories/Java/index.html","9603f20fdba42f84545e2dbda3f9d6b7"],["categories/index.html","d8f2bd48b1f42e90c04fdd2eb4dc2084"],["categories/安卓/index.html","6b2e3c32631ba7412018b08549575ef8"],["categories/数据库/index.html","beb566e33c36f994e35040f0d3161e08"],["categories/杂文/index.html","b822948f734f381310b4fc874773a0db"],["categories/系统架构/index.html","eb015cf9a79e054c316f63f28a22483c"],["categories/项目/index.html","9bd6c5553054a285ca7abd1565dcccf9"],["css/index.css","e8c8048bfb4c8494eca0cf24a996bb94"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","ae957372e827fc832d0dad993092d389"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","76c916e91ea33183a483e6840e6b9d36"],["page/2/index.html","06729e296703db13998a6ec5f65c07d0"],["page/3/index.html","9eb40ee21ec79abbe62c2c5bad1e8051"],["tags/Android/index.html","da01489d86c6935ed68139767366566d"],["tags/Golang/index.html","c03586b90552bec8803b396315ae9c34"],["tags/Java/index.html","3ef03df983563649b5eedda5fca896cd"],["tags/Kafka/index.html","2fbbce395c8fe48969f43695fd754748"],["tags/Kotlin/index.html","5797a1ccfec23a036c163c8b98e88a32"],["tags/Mysql/index.html","9b2a18d85fd4ad0752d4202792c4c8ae"],["tags/Redis/index.html","f0364f64d41c9393230b0f424617c27c"],["tags/index.html","b6f152a36784b6509fd36c3cc47b329e"],["tags/安卓/index.html","61ad9d1152ea84d20100b4c24de46d23"],["tags/数据库/index.html","ff0417bde7ab69aad25f25fbadf1c0ba"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







