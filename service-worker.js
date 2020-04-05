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

var precacheConfig = [["2020/1905944.html","55402a69eae0c9b3b2e9052bc1996aca"],["2020/1946C60.html","5f6c0aa9d775da12ab364a5538053c35"],["2020/1B5R51M.html","4a3b9b854b0075c4e218139c7387fd9e"],["2020/1DYJH86.html","263a756f7bc385435bb6af12659bb92d"],["2020/1FFNQNE.html","11409aebececb844ab0e7a8c810ea3f3"],["2020/1FRBXF8.html","4ff170c2004b0c2d24e135dd008fb253"],["2020/1X1JYEX.html","88b80055049d1eafa7b95ca848840b34"],["2020/224PAWM.html","e532d5a798f86c2c48eca980196fe325"],["2020/22X88J.html","308e9a6aae423eb415ddcdf66058a905"],["2020/28VBK0S.html","6f6b374f15c53bdfe028c09bda61eee9"],["2020/2AATQ45.html","879f19365508b2c77923bd78f930e010"],["2020/2B45ZZT.html","dbd7444970d3f072939b4ab67536d51d"],["2020/2CJ51QS.html","4896329b77da64687eae59a0151f115e"],["2020/2EQXTDP.html","cbece618cca68998226387a353be1146"],["2020/2QV9ZH2.html","6cf34260614cfbdb78790e513bf8139f"],["2020/3C7YZGC.html","ca9a4fdadb37400d5b0cc6544ef4d45c"],["2020/3EG8DED.html","18b317069440ead8a56f5cd24f3df96a"],["2020/3F6APKH.html","aa2dbee0c41e461785014a974f864218"],["2020/3HG63WA.html","ce4351f6bcd751517bb48a83b2d220e2"],["2020/3N2EAPR.html","d275d8e14d9051e09e39e033fa3a905f"],["2020/3VJHNG4.html","248ff16dd23bafbd09c3915e754a2dd6"],["2020/73XEZ7.html","f37f723ad2acfbd51577f34c9593729c"],["2020/FC7S68.html","7641ded50b460be8c846ce6bab8b9ead"],["2020/FEJ92A.html","19d931a8141a86330182a2e9223a35bf"],["2020/TKXNFM.html","c0395f1330b84b18bd6e0bfae54b9811"],["2020/YE6KFM.html","c179b43dda88d44c830293bc8d0c1a23"],["2020/ZP5TVN.html","199dea600bda6a3d58bfc069b13ba6e2"],["archives/2020/02/index.html","b2331be87feea3cb77c427e12d350caa"],["archives/2020/02/page/2/index.html","cdefa8ccecb9294b3797fe1904eee312"],["archives/2020/02/page/3/index.html","908fbd4e7adc1accd03ce585f1c422c1"],["archives/2020/03/index.html","804143a08ccc3f7177e6c132a9039c13"],["archives/2020/04/index.html","42c0ecca1493e890bcba174cf5a2a73a"],["archives/2020/index.html","42b7f91bf964d756d9e2bc16e1394511"],["archives/2020/page/2/index.html","6add3d75d8f431dcab095a6871c01785"],["archives/2020/page/3/index.html","a5ac9ba3ea15bf5fb9543b1fabf7cee9"],["archives/index.html","d06ed5023fa0ac31181597e01d2ea33c"],["archives/page/2/index.html","914fd2ca46374f7c1fbd4d290ba6a72e"],["archives/page/3/index.html","a17a44d307ca5feab2a01ccdc5d680e6"],["categories/Git/index.html","2c6248f25967646e961275f98eef1111"],["categories/Go语言/index.html","63f91c85d225b9d085c01ac9f3631a3c"],["categories/Go语言/page/2/index.html","b6197bc68007ee26c746f9255d4d1c07"],["categories/Java/index.html","555e24ff7e6d311607c36921e2077260"],["categories/index.html","a88389b0a3472d6f33515606fa96df42"],["categories/安卓/index.html","667d77b2370fd81fd8c6373c555b3051"],["categories/数据库/index.html","17116dea5ebeaf2befd146b484f7a2ff"],["categories/杂文/index.html","6bfcb76a7f608bec423f4cd9317e1806"],["categories/系统架构/index.html","d458cdc907d90ad20add11540091026f"],["categories/项目/index.html","abf2a937250fa48b28e6f6185a8f620d"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","4176813a2aa1f2af9f153bd9fda76fb5"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","83170da4ad0a3d2785a78a6f65555949"],["page/2/index.html","6de2bb4985f9daf6cb13d859aeaa8ed7"],["page/3/index.html","bc39feaefd59b7f4b7fd3a79c36a858c"],["tags/Android/index.html","c769804a9f6f04f8e477bcf363b3359d"],["tags/Golang/index.html","b000dbd74decca53c536d25fd1f4b0e4"],["tags/Java/index.html","7e19d2844056990c6e2751a1b50396e9"],["tags/Kafka/index.html","69594f827221239d7d0fe2b8ab0d3b9e"],["tags/Kotlin/index.html","389029e4b704d82495ac43001c1a8d3d"],["tags/Mysql/index.html","f9826f0c04e7200cad4bea805f97e73e"],["tags/Redis/index.html","d6bce172dcaa5c763d3794c54a175ca4"],["tags/index.html","eb603e31d69a30a48f2171972cd09a8a"],["tags/安卓/index.html","62182d929d35a2b022151bf89939c85f"],["tags/数据库/index.html","bdcda5207b3396f3baf406ba15ff16ba"]];
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







