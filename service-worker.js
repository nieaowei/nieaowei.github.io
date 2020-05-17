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

var precacheConfig = [["2020/1905944.html","5b00ecbde8c007fb8e8ba22cf876508a"],["2020/1946C60.html","55a5a6b6c41846e5f814696af1966ee3"],["2020/1B5R51M.html","4ac153b13fb25929f17a6e2263d5822b"],["2020/1DYJH86.html","efadf31c9d7f0d47be71089e60af31ed"],["2020/1FFNQNE.html","545f66f936d5fac34b07e1c27ac72e9a"],["2020/1M052X8.html","d926cc8d96a326687694c0abc82e0d65"],["2020/1P2CYMG.html","dd13670a5a6d9b7f1c38260e495386a3"],["2020/1TTQ6FN.html","6296f93a09866c2a3471818b67d94c4b"],["2020/1X1JYEX.html","02b87e81e7d3e509203f4186d38aa456"],["2020/224PAWM.html","ab17cb2155eb18790029a248bb91c06e"],["2020/22X88J.html","8322aef68a91345089dc4a67b7599be7"],["2020/28VBK0S.html","be0121f7113aca0805e68b493d9e1ce7"],["2020/2AATQ45.html","51889951aceacfbb6a2c5ce9cad931c7"],["2020/2B45ZZT.html","4d4b582b1b499e81ebcd22d4fcf088d2"],["2020/2EQXTDP.html","e5ae44c4c98c28add1864561caf8a323"],["2020/2QV9ZH2.html","4f647d997610bf68df46700dabd389f9"],["2020/33KJF3Z.html","771b4d402b43ae381c5247c710ae1b63"],["2020/3EG8DED.html","0bde3c1d8558a3359c44f56277a78e48"],["2020/3F6APKH.html","45597a3c54fb2f6661a382978bec2e72"],["2020/3FRKW3J.html","1cd69426977033ea4c52072be360b142"],["2020/3HG63WA.html","34cf312a15bcecd014db0312f0192181"],["2020/3KDWDKB.html","79405b67e9ded412ab45e0aed1235a31"],["2020/3N2EAPR.html","0d903b5b91cbffca155295def7ed7e8a"],["2020/3R57ZBM.html","741fdcf787bf8b5fca2bd7f4dc73342c"],["2020/3TRNKGR.html","141b665260680a0ba85c50fef6db6335"],["2020/3VJHNG4.html","4b395a6f526e473147ed5b842b71b4af"],["2020/65SJMT.html","5b8a114fc941efa795b990b8c6ad392e"],["2020/73XEZ7.html","f7d3de7694369ca5060489abd14b6a19"],["2020/94VGB6.html","86e969e0122c79b97818c53e8c61b62d"],["2020/CEEV6W.html","c9e05f007ccefe0513e64d1fe886816f"],["2020/DCQQ72.html","c2131350e132612e99fe2411470c9fb6"],["2020/FC7S68.html","27fe9eec33e8a079966d66aede7efc23"],["2020/YE6KFM.html","badc4884a1efeb43533f29f5631aee9f"],["2020/ZP5TVN.html","a6e9c5a03bea1c340dfc1ef73ebb8070"],["archives/2020/02/index.html","e9cb907657b79ac17890d94f6f393810"],["archives/2020/02/page/2/index.html","bdb4fa46e4c76243553ba7ef4704cc2a"],["archives/2020/03/index.html","61550a1de319249eb4ae57b662c8fb92"],["archives/2020/04/index.html","1e68aa4e8cc5c3de9cc21fbfaccb6ba2"],["archives/2020/05/index.html","82f75c44794fc0582e59bd6506fa9ef7"],["archives/2020/index.html","3da29921eb462220fbeb9a05641be9de"],["archives/2020/page/2/index.html","414fc468c9f2a8c3d1b4741d1dd303b5"],["archives/2020/page/3/index.html","bf0fdcfafd45a5d296bfadf9f0f93a9b"],["archives/2020/page/4/index.html","79efb0a54d5cc52c6c3a2dcf7b7469f5"],["archives/index.html","20bad9544eab3fccd98549178718fac3"],["archives/page/2/index.html","76bce7224edd795374d292101912dc73"],["archives/page/3/index.html","3fee27cff5652d3c8cd737a99c75c07e"],["archives/page/4/index.html","aaf65f5b144a8038ea9b626f30589a5e"],["categories/Git/index.html","513a80a83851d646c6581a693857cc2e"],["categories/Go语言/index.html","2655aa5e586c9b8676a3a04b2d61d487"],["categories/Go语言/page/2/index.html","16513a5e6d4e3f27dbb2538afa801fc9"],["categories/Java/index.html","641e4577651a1963283e9025670b795a"],["categories/index.html","798fe9fcdea0d2f858569a212d44d11e"],["categories/安卓/index.html","0247dde32cf14fc76ccc83b973262143"],["categories/数据库/index.html","a7034510fd15d3f9082ab217b3667f3e"],["categories/杂文/index.html","69c05f03f7be2ffb203749abcbd5dd8d"],["categories/系统架构/index.html","ef229cab35968256472a56c57812d183"],["categories/运维/index.html","142f644c0217181c6705dc544c2a0e0c"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","cdb4ab6c65390ff128c72f99ea59b101"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","5e2e753384d7d744fb0f184e80a389bf"],["page/2/index.html","53b8e56cfb8f21c5b66836cb9776f68f"],["page/3/index.html","fe764d1e94d28dbbb3f29ceef6b3c695"],["page/4/index.html","e90a5bf597adff60977b6ad6eb6f180f"],["tags/Android/index.html","c6d7b6a0af20b2cc502bce6ad85325af"],["tags/Centos/index.html","ea7d37b9a4a657b6289bb360d69f322c"],["tags/Docker/index.html","b7aa5b72893f776f4c2c017896d53b58"],["tags/Gin/index.html","740dd99f65baf516d58408aa0941f2ca"],["tags/Golang/index.html","ba55d67120303d5b2f225a9f2a69127c"],["tags/Go语言/index.html","7a4ed0d03175788dc4b33f50e73aec2f"],["tags/Java/index.html","7abe9b8b49390c05fb692100a4f922e5"],["tags/Kafka/index.html","c2e4db0ff8b78e17df6b954fc15acd3a"],["tags/Kotlin/index.html","2f1163a3efce15a898b8c8e3b62f2438"],["tags/Mysql/index.html","99e0d63508945cc357353e5c0319d3ea"],["tags/Redis/index.html","6d539fc75427036a987789791698f168"],["tags/Ubuntu/index.html","916a0774afcd9357b61e4ecb07fec921"],["tags/index.html","6aea5382156eff9d6593b0135c02d59c"],["tags/安卓/index.html","b04607d1abb434a44f6216312bc5487b"],["tags/数据库/index.html","138586c1be6c60a628c5c5d3be5beba6"]];
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







