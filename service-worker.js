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

var precacheConfig = [["2020/1905944.html","ee0ab8e402841d28491d4550cbab2ed6"],["2020/1946C60.html","8340ba7cc1b334b99f30e8c8e3305606"],["2020/1B5R51M.html","aed89a319a188a87110f19fd2c900355"],["2020/1DYJH86.html","25c366732807643d88e63f5c5b61ef70"],["2020/1FFNQNE.html","55e3cae6eebaf07a807a3368823500cb"],["2020/1X1JYEX.html","a1c81044cc5026e6246025ee52ff0d1b"],["2020/224PAWM.html","92b7ca3dc8b8fcc6d137b854aad71a1a"],["2020/22X88J.html","c3b20bf0f32cda09983232fa69ce4e84"],["2020/28VBK0S.html","cd5e2ad9539138c0fa1a38a503b33471"],["2020/2AATQ45.html","91967892313bd87aa63ccbd95b8953da"],["2020/2B45ZZT.html","6976604486774def7a01c29a7a0fdf1f"],["2020/2CJ51QS.html","8d171b6f2b4855236cbf766ea926f432"],["2020/2EQXTDP.html","99678e3a4adb0fa47f22d18d4860b416"],["2020/2QV9ZH2.html","db5d2d4c18b703261e8779565d7deda9"],["2020/3C7YZGC.html","5827ca10b8dac5745a5da847bf65ad57"],["2020/3EG8DED.html","a05ce308d0ae46e341b89e4dbaf898af"],["2020/3F6APKH.html","b8f8edb56ac97ab4a9f06b90a1dc61da"],["2020/3HG63WA.html","356304e09e2408174ad30731c42e2795"],["2020/3KDWDKB.html","65150cfc84d8db72427a09765c5590d5"],["2020/3N2EAPR.html","50d2eacce4b92fc8619e35ad1928928c"],["2020/3R57ZBM.html","21ba92750789990e972ec514ecd1a805"],["2020/3TRNKGR.html","a6d4f4a88fb0169aa185b41b27d0fb80"],["2020/3VJHNG4.html","b86e47f0be8d5dc0c59ecbc6d3fa4299"],["2020/73XEZ7.html","7e05735829b0b5caf67ec3f947622736"],["2020/CEEV6W.html","435b6bf2258cfcdc79eb0a1c5aa2831d"],["2020/DCQQ72.html","a1ea36a5f73ec0a2696546b8e0e181f9"],["2020/FC7S68.html","9e70c2a4c3ab6f4e1743f1543f89fc39"],["2020/FEJ92A.html","f78f69c0ecec35a1e20c8951c4f8362a"],["2020/YE6KFM.html","f1af1c98e8fba89beb58d49c55bf22b9"],["2020/ZP5TVN.html","acf65015fe803b7b83e1efeca3258c9d"],["archives/2020/02/index.html","9e2a454a8a406e6db9c03dda14a7e57a"],["archives/2020/02/page/2/index.html","1c0a83465ae4a25c59e5d97b287df8b5"],["archives/2020/03/index.html","d6e0e8a32a85387d502175a6bb9d6b6e"],["archives/2020/04/index.html","335707e697ee15f42fec57ae231a3ad0"],["archives/2020/index.html","05cf7d40fa6ebddbe7a589493372c2f0"],["archives/2020/page/2/index.html","231e006ba9a481a15a3b96e6587ce4d0"],["archives/2020/page/3/index.html","931374bed82011f448697a291885c3f4"],["archives/index.html","a81347eba91e388271eae3fe9e110744"],["archives/page/2/index.html","f80da739c2dffeacf868a3908b911cd8"],["archives/page/3/index.html","92cb4478c065bf523df1875dc028cded"],["categories/Git/index.html","d934238cae33d0af1d3337371a374fd6"],["categories/Go语言/index.html","9e976e86b114abc0bcd0396ca0da0e9e"],["categories/Go语言/page/2/index.html","56c14d154b4837800d26d4dd6a3d8bf7"],["categories/Java/index.html","a825e612f8e4537326f281850f1331c3"],["categories/index.html","6122e4cbe44ba6a1749b5cc6932297db"],["categories/安卓/index.html","8f6b644b0c64e2e678b2d45b1550cc51"],["categories/数据库/index.html","f0826e9ccbae9ea583e1ddb983e53e27"],["categories/杂文/index.html","6f828811f928b8b084ff4c87e7130f2b"],["categories/系统架构/index.html","ea8565a71e37ab7e70055fb4a299a3d7"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","3a16b42a2c565420a02cd9f20ccda399"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","58d2594fee3fd01df1ddbada0e9c5192"],["page/2/index.html","1568e376afca5e8648c7c3816e300648"],["page/3/index.html","c6590546615609072be216ff4a7a6e00"],["tags/Android/index.html","0635d895be63820d7abf56b57ae1306a"],["tags/Centos/index.html","0f45c317fed0d76ff8abe8de2094c37d"],["tags/Docker/index.html","c8af4a332add97dc31520f2ca9162e24"],["tags/Gin/index.html","70b77cbfce2f6b7fb93dad21e1762243"],["tags/Golang/index.html","9ee1fd0e1753bb790db515afab98a031"],["tags/Go语言/index.html","310bf0d614b958a86096042f534a5d92"],["tags/Java/index.html","9815983b374cbcd3f8de8429c933b305"],["tags/Kafka/index.html","d86a1b08bb11a15e00bbfa5ea9ee8dcf"],["tags/Kotlin/index.html","054428d2c46c7f8a894ea69d130b28dc"],["tags/Mysql/index.html","a3a6571c8af0bed1fa5c7f36c8a0a5c6"],["tags/Redis/index.html","e7e939ef93450dd07ce02ebda7406b18"],["tags/Ubuntu/index.html","c09f1e25745439da60325d65837df148"],["tags/index.html","e28f9e4dfb3afc03d5e5546e0bd0773c"],["tags/安卓/index.html","9dbb4c046d08752f89152184167d992b"],["tags/数据库/index.html","170cdad9ab573dd110d7f58df24efbb7"]];
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







