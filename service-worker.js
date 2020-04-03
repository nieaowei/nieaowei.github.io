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

var precacheConfig = [["2020/1905944.html","b2cdb89b9e61a51248e981aa5f420981"],["2020/1946C60.html","c2e05a6faa7e2017c0bef4cdb26d7f75"],["2020/1B5R51M.html","d26b1e8af54fca27b7313a77e7b56644"],["2020/1DYJH86.html","778c8194023047db74f8b80ea48bed49"],["2020/1FFNQNE.html","0da1ff022c34798a2ce05996f579f331"],["2020/1FRBXF8.html","c4bf1964f7f564a64da1ec27c33b9505"],["2020/1X1JYEX.html","c6190708b4a4f0617ad8a1ad47d1294c"],["2020/224PAWM.html","ad657a36f1c5d0a5e9a91a1677372437"],["2020/22X88J.html","8327d84c37315d118ef0a35fcf14aef8"],["2020/2AATQ45.html","6ae7d0537eca2154348cfad72c59158f"],["2020/2B45ZZT.html","e2596adf6280bb5eb30f42ca24e3324f"],["2020/2CJ51QS.html","864f5f5b8aeebbdbc7aa04ffd1c1f061"],["2020/2EQXTDP.html","a0bb16a1f897ce5ea582f692af08e69e"],["2020/2QV9ZH2.html","75cf14a2c10caf3403952e8f0ddc834b"],["2020/3C7YZGC.html","3678b4cf4438e1b5a0c0ecf668babc8e"],["2020/3EG8DED.html","4c7aa5e54e2f9c875bc886be10415f84"],["2020/3F6APKH.html","dc86ec197dd1506b9018f88c145ef5c5"],["2020/3HG63WA.html","d2d3bbb4907842d35d6efe098610ca27"],["2020/3N2EAPR.html","7773030e0a651a909d2165c90d0d040a"],["2020/3VJHNG4.html","2caf5634a7068899c91d6eb03c3607a1"],["2020/73XEZ7.html","ec773d001a602f822245dbfed6d90241"],["2020/FC7S68.html","611e436648e1b7a0bb629067951f3802"],["2020/FEJ92A.html","f387dc39f38f7f8fefa5bcc493105a9a"],["2020/TKXNFM.html","b7a7da26a41e2a6070c56a8a88c71bc6"],["2020/YE6KFM.html","3442d40e0a4912620fe3bb84ca8347c7"],["2020/ZP5TVN.html","42d24520ef190c23b4077ecd86a85c17"],["archives/2020/02/index.html","ad2da5b76e7dbb238f0ebc3b72c7d860"],["archives/2020/02/page/2/index.html","8aaefa5b90e91964e3ca7bb071b98d14"],["archives/2020/02/page/3/index.html","7012dc94a421eddfb3dd00545f23ecd4"],["archives/2020/03/index.html","556dfc461fdd2bcf71b2e5392e0a7095"],["archives/2020/index.html","c3a9fe5e797732b088a665464feaeb1b"],["archives/2020/page/2/index.html","284b86df63f0a9e52240ce8acdc88724"],["archives/2020/page/3/index.html","fef828418805c8a7323799906e4edca4"],["archives/index.html","d7e69c8e0c0326dd4fdb2d816532468e"],["archives/page/2/index.html","00dc97d92648722331193c795d4772fd"],["archives/page/3/index.html","188423d310b037998bd47be7434e2bd8"],["categories/Git/index.html","d6e3142ee6cc93d2cd24fcd3431c8b75"],["categories/Go语言/index.html","f7e92545661a2b633bbcc5edce87ce47"],["categories/Go语言/page/2/index.html","95d5f5fd3301fccd67f8190095e101a6"],["categories/Java/index.html","b9906a90cb017c2ca6dd5b6b3a67fb50"],["categories/index.html","449cfed3e9fd6468d12dfb69150cd994"],["categories/安卓/index.html","ec573d1d66458d1999549cc37131a03f"],["categories/数据库/index.html","3fece2ec6cf1d68db98aa68cab9fe26e"],["categories/杂文/index.html","82975cebaca572625c01232e1e3433a3"],["categories/系统架构/index.html","d71a404b6df5b4102155b0209b3d94f4"],["categories/项目/index.html","a3b8765ed1fe1535b8b5ab364ebbfcbb"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","648296c19d1732d2304a0354c3f63e2a"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","7b06cb87445679bf27831618072726f2"],["page/2/index.html","1a01f9aa5a12a400f1611e11ea1c0824"],["page/3/index.html","a7426b90f6f9cc597d54e454295a5cb9"],["tags/Android/index.html","f8b85cfa3afd3c4b3c388173dc9a3f3d"],["tags/Golang/index.html","3d1edcca4c81e841c3d5985a840f2549"],["tags/Java/index.html","4429172e31eacf4ad5bb8982c96849f5"],["tags/Kafka/index.html","7fbd8f4f35bb6799d6451203d911410e"],["tags/Kotlin/index.html","8723796deaf28c84572516f977cb4825"],["tags/Mysql/index.html","e63edff537d2ef21f6c46f98bd621ffb"],["tags/Redis/index.html","7e8df1d93754dc24b7be1d1139620cef"],["tags/index.html","287bf1db18ac53aed8539f428776989b"],["tags/安卓/index.html","9b6014caba318c79f927ee78b30fce72"],["tags/数据库/index.html","122773fda37c0c400b5bc42c229cb4c4"]];
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







