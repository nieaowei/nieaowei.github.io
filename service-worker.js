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

var precacheConfig = [["2020/1905944.html","64db8004612a1a76b96cd25218041997"],["2020/1946C60.html","a759016e3e65b525c5e5e72adbd3ec7a"],["2020/1B5R51M.html","fd64e1b06df4e1c38050d97b6938a049"],["2020/1DYJH86.html","5edcdacb9e482f53dcafe2405d03d901"],["2020/1FFNQNE.html","ea763e22aa7934de132e5041539b0b80"],["2020/1FRBXF8.html","47309bc8a105505e2086172346bf31a9"],["2020/1X1JYEX.html","666f570deb7e8bf062682e4ebe218225"],["2020/224PAWM.html","3cfe2a8de9081e0ea666af1f69af6169"],["2020/22X88J.html","c77192d6be78d733520c85dc9cae5618"],["2020/28VBK0S.html","caeac5cf458179e3b8921012dc9d0a98"],["2020/2AATQ45.html","43be2032555c23aa15a2de163c0d0e22"],["2020/2B45ZZT.html","48ffbdc1b303290bad764a823da3d65e"],["2020/2CJ51QS.html","3a41967184397a56f6fc6a03a319f54f"],["2020/2EQXTDP.html","d33b74e10219d8558d88d35b10e6476c"],["2020/2QV9ZH2.html","2433dc8ca19f5b7e61369ba0c726e689"],["2020/2ZN7WDK.html","9c4dd85774c756b781eaef7f8e2b6407"],["2020/3C7YZGC.html","1358e25cbe5d63603a996d1dde5ba0a4"],["2020/3EG8DED.html","3c851fb404467bf4a282f806e8fb6faf"],["2020/3F6APKH.html","22bb5a69daa8fb877cd56549242f98a1"],["2020/3HG63WA.html","4472ae642bd0171ec3e9aaf16477bb86"],["2020/3KDWDKB.html","8fa3a4cba46b8cd32e8aaec5d71ed25d"],["2020/3N2EAPR.html","039882d6340368730ed1338d198b2db0"],["2020/3VJHNG4.html","6d27ad65c3e164a5856ae762a6eb7855"],["2020/73XEZ7.html","0e7eb59f58db2deb8134866151acf75c"],["2020/FC7S68.html","b5f5a428543b9e6027bc66579c2bc4f2"],["2020/FEJ92A.html","4e484ec78b44ccf700a169ffbef99f67"],["2020/T9NBDC.html","f82c0f4d2da4181f9e3006ae81e65c5b"],["2020/TKXNFM.html","f15db20002143e653d6b07af76dfef7e"],["2020/YE6KFM.html","33efb8ed0829e4749b9266c44cc0ca4f"],["2020/ZP5TVN.html","05079ba83ebfd518ededc2b4f2247864"],["archives/2020/02/index.html","93b381f912b351c37ad4ac6d1b0a2b48"],["archives/2020/02/page/2/index.html","7a1e08c4d735693ed1602e99196935e9"],["archives/2020/02/page/3/index.html","dc69a707674e30b2658be80a46216dcb"],["archives/2020/03/index.html","ddf647b3f008d113e0dd75a83c5bce23"],["archives/2020/04/index.html","d998e2b574047486294ef616a10d714d"],["archives/2020/index.html","20f03dc20195fd5c586356740c9e3339"],["archives/2020/page/2/index.html","843157faeb968ffbe92531451e2e3e4f"],["archives/2020/page/3/index.html","68388cae2cc243d16a696b49a283396c"],["archives/index.html","1e985b8c7eb55ed2c880f6d1cd9b448e"],["archives/page/2/index.html","6417a9b5307df232dcc5b21ddeb32e86"],["archives/page/3/index.html","d64d4c304ebebcd6177e4a99fe41672a"],["categories/Git/index.html","02fd9fccb5f49112cd4927c4d7459c58"],["categories/Go语言/index.html","4d52becfc9efde0e7c7f761acb3f9907"],["categories/Go语言/page/2/index.html","0e1e511579ae5f34a31252087c011a94"],["categories/Java/index.html","f5c2b0d193d8b6db59450949064b1e27"],["categories/index.html","2252d4810a7aa77c75a6fafbe26bae8c"],["categories/安卓/index.html","b8906f259570d417040530e4cad8a100"],["categories/数据库/index.html","3eb81dd6f900961ce181df852a9bdfed"],["categories/杂文/index.html","2752cc2927bb0ead3de43eac0b5473d9"],["categories/系统架构/index.html","02a4cfe86687d25ea25fac3886dd872a"],["categories/项目/index.html","ca004517d241d2a447f1f0027eb77863"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","67c2939e9caa403373d2be1a97f50acf"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","a27a9e7b00da6af90a5e5a5afdd2298d"],["page/2/index.html","eb26e4d60945b646a3e385804d918643"],["page/3/index.html","1837c3b1cdfb6f0b6a39c9f96ae2411b"],["tags/Android/index.html","5bd515087523d244c4152ac3e3fd5eaa"],["tags/Centos/index.html","8561caa80a66a38f746fe079598cb2bb"],["tags/Docker/index.html","cc8ef3baa7330a790a18620c6e5e19e4"],["tags/Golang/index.html","5fa4bb0483120219767b75ce3ed235df"],["tags/Go语言/index.html","82c2e6890a39274c0967f01fa6b1de0e"],["tags/Java/index.html","503aa35da04f7d4b1df6e7c397761a94"],["tags/Kafka/index.html","377e9a6bd9bf2c1b02aaa45415523e2f"],["tags/Kotlin/index.html","4e299dd52afd82616464f00bdc8d1911"],["tags/Mysql/index.html","f000d410b0b9d40df75f1902d52f4e75"],["tags/Redis/index.html","0f3305b2e2d06ed637abf3c1cbc229d0"],["tags/Ubuntu/index.html","2957ab7878b657e5a64a9b3cfe4f1e5f"],["tags/index.html","1928594470ccbceb223aafbdd477bcdf"],["tags/安卓/index.html","9acc51b19d39d51ad4aecd9375cd469e"],["tags/数据库/index.html","bb7379828d4cc1a0ba8a79f2fd5dcfae"]];
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







