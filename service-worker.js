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

var precacheConfig = [["2020/1905944.html","2adcd3f9aa63b4402e9c2c5e85de55b5"],["2020/1946C60.html","c1edb1a7ac12129b28f90f7a437c5e17"],["2020/1B5R51M.html","47cdad0319af67b9259aca968c4e01c0"],["2020/1DYJH86.html","f104d269ae2a5c27357aa1b8d0076a35"],["2020/1FFNQNE.html","96d2682e62b7284fe52ab6614303b5cb"],["2020/1FRBXF8.html","5de0cb9c6c9059578c28fa3f886384f4"],["2020/1X1JYEX.html","f6130988e963cb96ad22584c1574991e"],["2020/224PAWM.html","b4bc71348b50d7be95378610e959ce52"],["2020/22X88J.html","2e89d36b8db53f2570fe44fa3cc5fb0e"],["2020/28VBK0S.html","ad617960742fd348d7b22624540527af"],["2020/2AATQ45.html","b3a6defaf37e7844aeae719e5af7fc28"],["2020/2B45ZZT.html","47b102ea6ecc486aa4d473422828bc81"],["2020/2CJ51QS.html","e97152054cc57e100c8935e505943004"],["2020/2EQXTDP.html","a22a8906466985566381d8f23332359d"],["2020/2QV9ZH2.html","725984b2c59de9f3023e13dec81b420c"],["2020/3C7YZGC.html","5ba084f259330017683a17073594bd1c"],["2020/3EG8DED.html","bc3f8f7ab2bc4a5ad69edcfc80b4d62a"],["2020/3F6APKH.html","5411eca0808ad9c2feaf0adac21b511f"],["2020/3HG63WA.html","f71cefa423b6aec63e17c011c0b14993"],["2020/3N2EAPR.html","4abaab3dc4ad215cbeb2d5aa441b53a5"],["2020/3VJHNG4.html","aa1d6143a74b57eaaa1deb464c2527c0"],["2020/73XEZ7.html","45ed11478a3a80e116753c979c8f7740"],["2020/FC7S68.html","2e57c19f174599e50e84696edde391d1"],["2020/FEJ92A.html","d26ad0ed473c2db9deaa05f23fd0e3f1"],["2020/TKXNFM.html","338f6052f568b2b685b24ff875222e90"],["2020/YE6KFM.html","34177068b6a3ea77cbda0400e1496a53"],["2020/ZP5TVN.html","4209032841a1f1ca98454cdd8f85ae63"],["archives/2020/02/index.html","bee048a526be7da865374afc928e5fea"],["archives/2020/02/page/2/index.html","0f09810b0558773a09bd4811a014ec0c"],["archives/2020/02/page/3/index.html","6e744f54ac3dfb59119bfcefb7fcd303"],["archives/2020/03/index.html","7f09b0e0ab19822794ca1005dde1e9e0"],["archives/2020/04/index.html","75df027d7591f288d66ffe40273f6186"],["archives/2020/index.html","ac50efe4653159d62f612c75477d3c68"],["archives/2020/page/2/index.html","96386ad1a2c29f46bb158e0ef65a272a"],["archives/2020/page/3/index.html","4c0fc6e2e120fd78a32822316cd80b20"],["archives/index.html","87115bd3fe91d839b07bc4105672e42e"],["archives/page/2/index.html","96131503fefdee8bf51f02ecc86230d0"],["archives/page/3/index.html","50582f7d0b5bad31294a2076a2145fd4"],["categories/Git/index.html","5718de98a1548856739fbf0536406f78"],["categories/Go语言/index.html","dfbd369c0506de38aeae6e3bff3b9567"],["categories/Go语言/page/2/index.html","86251d4b544ba41b6822d59fec224bfd"],["categories/Java/index.html","7fa4184d9248e487d4ee4d86c965e549"],["categories/index.html","7026e58134cf49b9d8fb38eeea4166a0"],["categories/安卓/index.html","e9d0f7979093ee036e19cdeb5c25d0ad"],["categories/数据库/index.html","38d00716192be6642fb482136c869c80"],["categories/杂文/index.html","085a536f48f03a39177fe086a866516a"],["categories/系统架构/index.html","7f45446c628987cdda57637e1371c7d4"],["categories/项目/index.html","e7faea83017c2abd8a4d5b51e003c541"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","4a6b339e5087959535d39c5f8c83e35a"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","71b4f3665a81465b7894b7361bf5f91e"],["page/2/index.html","6dd83b4f53ff9e30601d9ddd06f97da0"],["page/3/index.html","c230907d98e54c28c9bc032ec0f0cd11"],["tags/Android/index.html","b1aef8682cb8d53220a5daeba4b8e792"],["tags/Centos/index.html","ff55e804e78811e910518959026e9b6b"],["tags/Docker/index.html","855279a66a9e58c3503bf665d3c38637"],["tags/Golang/index.html","cada7ebfef153df98a6af80e51252676"],["tags/Java/index.html","0071182a695c4f4a793396ccfa86732c"],["tags/Kafka/index.html","6e4776c63d9e2e1716ea12b477cf9116"],["tags/Kotlin/index.html","73bdc3df14d4609d3664fd627968195a"],["tags/Mysql/index.html","af40539705d5aacc28e50b9bea6564b8"],["tags/Redis/index.html","551db59631fe5c8d9d26f01a15decc66"],["tags/Ubuntu/index.html","89d36ace30680ca8e025123b89bf22bb"],["tags/index.html","e2c5a1e46782a1edc3ca68445b428dcc"],["tags/安卓/index.html","78e2ee54114e5307d284c0076c482d69"],["tags/数据库/index.html","63d01f957584597d93be13af6adff222"]];
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







