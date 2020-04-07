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

var precacheConfig = [["2020/1905944.html","1af2dd447cb096322b0cf4bfc06f2564"],["2020/1946C60.html","011618f5d4093ef5c4167ba84c7fe5a0"],["2020/1B5R51M.html","c7d0235bfb24c2b6d921d7a45fc8f8af"],["2020/1DYJH86.html","93e5f03403f8043c5cc212d4359e333f"],["2020/1FFNQNE.html","2222b01e6a803259654f7ff043a1c71a"],["2020/1FRBXF8.html","b518787c2d6d8695641e0fb3a73e408c"],["2020/1X1JYEX.html","0f0301cb3e42a3a7a9f21865c093ac4a"],["2020/224PAWM.html","b70e107ee61ce16f35fa168af9ebc538"],["2020/22X88J.html","297b578896548e35fdc2ef85727b9e0a"],["2020/28VBK0S.html","c8248cfdd9668e7a708407d89947b046"],["2020/2AATQ45.html","085344e127aefe9b28f2cf9bb360b028"],["2020/2B45ZZT.html","5744dedca7a1933a4daea59c760be5ac"],["2020/2CJ51QS.html","f098fd1d6380344b2acfc3fd67a66c6f"],["2020/2EQXTDP.html","41ee281b9cb420bdc0576899cc5bbd57"],["2020/2QV9ZH2.html","5a21e431474cbb55273a776fbbf1001e"],["2020/3C7YZGC.html","d5df53c29d896293e72328b38e545a14"],["2020/3EG8DED.html","23990c176eaeb2446cf7fd4a1347c495"],["2020/3F6APKH.html","fe2b70eaab37e0980dad6713e2c43e83"],["2020/3HG63WA.html","b8a24631ae43ec97a1ab65f630007688"],["2020/3KDWDKB.html","77bd462cbab6b735b0d25aadf423aa1f"],["2020/3N2EAPR.html","8a3dadb3ca019b38c0ee666d534b3281"],["2020/3R57ZBM.html","ca00329564407b6a052f94cf4ac2eced"],["2020/3TRNKGR.html","7565696867b91942508ef22f4e4ce158"],["2020/3VJHNG4.html","31f66362ec0dca713bd0cfe101d076b6"],["2020/73XEZ7.html","287a32eb05d2677da83beff124a1bc09"],["2020/CEEV6W.html","12b43bf58984477244dccb012c2cf329"],["2020/FC7S68.html","2ecfad4c3b5c2a8367c9ab2178078279"],["2020/FEJ92A.html","c4742bd44dae994d60087887f3a54eb7"],["2020/TKXNFM.html","18588b37b6ea5268037576a6c43b2f48"],["2020/YE6KFM.html","fa0322dbecbe9375bafcbab7ff9459ed"],["2020/ZP5TVN.html","0d999b97432181a4376e06e6b4280032"],["archives/2020/02/index.html","acf19e3a9c78b4ec9efc52168a1fdd9c"],["archives/2020/02/page/2/index.html","613d1708d369973128670389f65ed16f"],["archives/2020/02/page/3/index.html","ebb6132027ef70ce7295ad6d0425e82f"],["archives/2020/03/index.html","26b337225e0ab49d026a41d7106a5ff4"],["archives/2020/04/index.html","765e06841177cbd972cb7f9ac0bda8d1"],["archives/2020/index.html","4646d4a2d37b9033aa6d596b872bf276"],["archives/2020/page/2/index.html","8a93eb67e4e73bb75479f522da89a008"],["archives/2020/page/3/index.html","36e276c7d75fbc407281055c9e2d291f"],["archives/2020/page/4/index.html","e49c0db947f5b82cd8fc2048fc2cafe2"],["archives/index.html","546f86da039a6731f20f21f6214116ba"],["archives/page/2/index.html","8203e8ca0b19fdeb6aae9707361b6bee"],["archives/page/3/index.html","d3f5ba792f6b9d63a3698352ae8d4d50"],["archives/page/4/index.html","e7a655b571a92a3ddc8abf1b59ec602b"],["categories/Git/index.html","d6dbacbbcdadf059f017231736e1766d"],["categories/Go语言/index.html","a27c997b52e857d3b343798be5e79210"],["categories/Go语言/page/2/index.html","0915bb19c677294bda20635861097113"],["categories/Java/index.html","676f09e110a8506f6b4d4a64979652b1"],["categories/index.html","9f3de015427056de02741a7fef738491"],["categories/安卓/index.html","2645d6c84bbfaaeabd2a61e59662492b"],["categories/数据库/index.html","e453d7bea0ae9bc9f0b766dcaa4b2b86"],["categories/杂文/index.html","6e462cde177a5b1c771524cc9b9dabf7"],["categories/系统架构/index.html","c2b6ed769940f4bf03870b2ed6c3abc4"],["categories/项目/index.html","b730b08c45b6cb895f12f4c36efc1a2d"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","681b7c5aa8521493e13d354550c762ba"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","8dbcf204f35a7db06f0ee6bd348c8287"],["page/2/index.html","6f48e744ac3df5a0d216540b303f8c19"],["page/3/index.html","6123f8dd319dc14e864464c81f3d5837"],["page/4/index.html","f693b7179650cd70f09f87ea2c9010ef"],["tags/Android/index.html","4ab8b0a667cf3f5b89a1e320a3f2e96c"],["tags/Centos/index.html","08c6dcf5180fbef6a9f245588bc6fc6e"],["tags/Docker/index.html","2b793a64d1a2859c1d27512ab414f2e4"],["tags/Gin/index.html","a540f7fd18b782006f01718595bb5186"],["tags/Golang/index.html","22c232dd91ac872f1d0be1ca27ba90cd"],["tags/Go语言/index.html","86a5aaef44c5727abfac540da3d7c0a0"],["tags/Java/index.html","1bc638026e89f5b9d4be0cca0fcc88e1"],["tags/Kafka/index.html","539fa97394b5c3080ce5c0abb5a8b9eb"],["tags/Kotlin/index.html","2aa93752ec425644492a6f5691205c44"],["tags/Mysql/index.html","86279f712399d085f2135e26767014b4"],["tags/Redis/index.html","9156ec3b7eb3ad2a2758c30126fb3f9d"],["tags/Ubuntu/index.html","bcc1e8abf30974ce159363200a1ebc5c"],["tags/index.html","a69a9ab92af5b7df14c7caca6d1b2f54"],["tags/安卓/index.html","82267f4c7bd1c866eed5279a67eb6fe0"],["tags/数据库/index.html","504e5b80e6711be41fc95bec28c00510"]];
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







