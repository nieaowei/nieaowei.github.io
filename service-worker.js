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

var precacheConfig = [["2020/1905944.html","86da6e00019dc4933a5233a9cd5bf54a"],["2020/1946C60.html","c54876090985c6874c8e720529f32310"],["2020/1B5R51M.html","ed8404ab867ff1c18e074a6591d0a856"],["2020/1DYJH86.html","65df8282c865bbba189662868fca6e93"],["2020/1FFNQNE.html","00c61edbfb834d4cd4db4a7e1c0f0bc4"],["2020/1M052X8.html","b6f2514241dc10b10ac47a4e6b205f00"],["2020/1TTQ6FN.html","95035777d29b2176537d668de1e9880e"],["2020/1X1JYEX.html","9fb8157c7133c0d8c3c559b6778d1d37"],["2020/224PAWM.html","c543faa6793a295908c131e201124ce4"],["2020/22X88J.html","1dde7d193d49db4ef6906460af5ead40"],["2020/28VBK0S.html","5e56ce2e9dfc975a82eb9884a8d7243e"],["2020/2AATQ45.html","a6150076b6f903f0be6a9f88f90c84cb"],["2020/2B45ZZT.html","39301937e90fb8aa8349c6e87c5708d2"],["2020/2EQXTDP.html","c9aa5582356b645e462ae6f4d86034ab"],["2020/2QV9ZH2.html","b47e78ea2042a28e2eadcdaecbcc5b82"],["2020/33KJF3Z.html","7465dff04ed36520c8c8b2ba96665be1"],["2020/3EG8DED.html","434a07b7e7314a091e0aed19be385502"],["2020/3F6APKH.html","3213280191233410bc8f65cbdb8fba5d"],["2020/3FRKW3J.html","8528c38101e59c568034c270017d6c7a"],["2020/3HG63WA.html","ff0c25006db914e49b20c0f64dfaaaac"],["2020/3KDWDKB.html","b52bfa59b0e1c966c95de3641213e878"],["2020/3N2EAPR.html","cfa5b13d84d394f415b7f04440b3324f"],["2020/3R57ZBM.html","08dc65da37a187c480e860f66c407b53"],["2020/3TRNKGR.html","4606e0593f4f71899577870cf07aedbc"],["2020/3VJHNG4.html","fcbaeec69907db5f7dbf70b9a2979517"],["2020/65SJMT.html","2485c7e08da11fac5474077cb33ba57e"],["2020/73XEZ7.html","0728720787119cc39c3d70b1bb1e9054"],["2020/8BV7RJ.html","7ebf1343e2ca8958f7e05587ab1c3f5a"],["2020/94VGB6.html","8dc463bd9aca3d420dade998c86d8d42"],["2020/CEEV6W.html","8bb122eb216ef7992858ec446a35506e"],["2020/DCQQ72.html","9963fcb4b98914de519df1dd78f63948"],["2020/FC7S68.html","0072ddf17a8bf3ea1034fbcef4f33cd0"],["2020/YE6KFM.html","e86baf2d184323840d20324cd50414b8"],["2020/ZP5TVN.html","aea82fdfdc18d638d76df30368e3b94d"],["archives/2020/02/index.html","a998175a35015afac9204bfb5a56f0d9"],["archives/2020/02/page/2/index.html","dbefc7d18c05094c507fe62a8c671f20"],["archives/2020/03/index.html","30eddaba647c7d4e9fa4ca3446e0d58a"],["archives/2020/04/index.html","7b07db626f229460d43c0822c7c727a0"],["archives/2020/05/index.html","67f1079be54ca7fc4f3f6b0f5ebbcd2a"],["archives/2020/index.html","9e64a93f7e75813e7d3562e53e83d1da"],["archives/2020/page/2/index.html","14266c5154fb5ace3666eb9c6ac8a099"],["archives/2020/page/3/index.html","5b578949ec7d0e2c571531c318e97ef6"],["archives/2020/page/4/index.html","fe8737314df987eb8c3009365483fa83"],["archives/index.html","9005936736a1371b086b0e9b29316221"],["archives/page/2/index.html","1662ee8855532220cdf3876b707d6a14"],["archives/page/3/index.html","2c54246a8699e50e9e1b85e705a966a0"],["archives/page/4/index.html","e0c07ed011dd9d024b567e56561fdbcc"],["categories/Git/index.html","d3e3bf0505d978cd76ea24839eb7508c"],["categories/Go语言/index.html","d1c72d111f297e652dcb7785f8e05a0d"],["categories/Go语言/page/2/index.html","5f028dc0d1f7f17e63759fa93d8f1f45"],["categories/Java/index.html","ce46e98706ab2146171941191d77999e"],["categories/index.html","1e63ae4510cc6f84f5e6641f6188ab5b"],["categories/安卓/index.html","7d9e8f282e529d1c38863f05e41c97cf"],["categories/数据库/index.html","87eb25208791d5628aeec4f6279e585a"],["categories/杂文/index.html","8618d529e939306ccd6769600274e0ed"],["categories/系统架构/index.html","b659d50eaa54168b147db9b29ec288a0"],["categories/运维/index.html","71aca0211f98c71e970700e3aabfeed8"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","949ee6d4ff625b171a807073db1ca726"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","6edea9a7c5b7dc6b9d3ccbe7ee0913ae"],["page/2/index.html","29a034cfd86413e9c4ff4a4094ef5db9"],["page/3/index.html","f3ca5242db3f3225cc01c7e7ee8060cd"],["page/4/index.html","7ce75156cfce5841d6cd610a7814d506"],["tags/Android/index.html","b4ebe42f6acd61b0f9b5af48498a2d09"],["tags/Centos/index.html","c5a58e01a67bdc9356650633ad32a35b"],["tags/Docker/index.html","2b619f9376617ce5e85e83b137772aa0"],["tags/Gin/index.html","262ff285269a7d43d8b5cb71a45f0cdd"],["tags/Golang/index.html","4c937220d2bfd0425703e01e0b323f91"],["tags/Go语言/index.html","8f741d063ba10a3797e6ba6f74f23dcb"],["tags/Java/index.html","13d709c0f6e85661c6467ac06466f2bc"],["tags/Kafka/index.html","8ce15b133e769060b25e748a46aeae2c"],["tags/Kotlin/index.html","58c26d425d0d524b6fed43ac1520cb6f"],["tags/Mysql/index.html","fd5a843c3e9ae86fc4f13450a3ecc2bb"],["tags/Redis/index.html","ee0d26e1f4822d96a460caa3b01a53ae"],["tags/Ubuntu/index.html","1af308307e98eb2495bb827c4e6d9461"],["tags/index.html","b06c4f40bdedf8bf64e87b8f7187df9d"],["tags/安卓/index.html","54b35015753737f79b2ed65b39b7d9b0"],["tags/数据库/index.html","8d3872e56e7c40f9bf3248f086757998"]];
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







