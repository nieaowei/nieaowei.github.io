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

var precacheConfig = [["2020/1905944.html","f668d878526b9cd6954c17bc39b0ff70"],["2020/1946C60.html","a4226b0a25ab9736afb13eb9d3f89926"],["2020/1B5R51M.html","5b194a3fbff50abebaaef95fc37ade15"],["2020/1DYJH86.html","2044db24e3794dcea91326338ac610c7"],["2020/1FFNQNE.html","12131edbe94757eb2298f0f5f0f97576"],["2020/1M052X8.html","6254b2dd9098b192b1c78912726af9a4"],["2020/1X1JYEX.html","f8ac28ced70584b1076563bf33bbf196"],["2020/224PAWM.html","17f5ab34094bb2ee2d1d9e9d0e1ff60d"],["2020/22X88J.html","022ec0b1393781c7ea790daae0a3e846"],["2020/28VBK0S.html","4a369912b69b73eb09658946db61d6b5"],["2020/2AATQ45.html","33845808b7cee348539569dae288ac42"],["2020/2B45ZZT.html","480166237c83254ca29b6fec605a31f6"],["2020/2EQXTDP.html","c41248b7566a5c1c1b22d40ee40f63a7"],["2020/2QV9ZH2.html","0d7c349c0bfefd6064f3f4f296028908"],["2020/3EG8DED.html","dbc939da4783d28fba2efd185724665c"],["2020/3F6APKH.html","58f263e7673c6dd920670dd2900fefad"],["2020/3FRKW3J.html","f6c2a2f1bc1a6d907ef51410b2913fbf"],["2020/3HG63WA.html","a2104859c98f154b5da9209426f94e2f"],["2020/3KDWDKB.html","bea074bf30d780af4e0aa6fe288895a4"],["2020/3N2EAPR.html","cd0e9d33f9153b03097bbb79cffdbb54"],["2020/3R57ZBM.html","4a8de5b5ca7727c87a3bd4cde24777f0"],["2020/3TRNKGR.html","a75b21e96e02d32f4fd3b289511f91df"],["2020/3VJHNG4.html","3071c51fbac8e339bec2fcd44c6d8af3"],["2020/65SJMT.html","ae1906a2757aeedd8ca4943692b945fd"],["2020/73XEZ7.html","3ab08e5eacf602a09b2500d944280203"],["2020/CEEV6W.html","1e5477d8cc33813197c49069e7e78e89"],["2020/DCQQ72.html","8fc517cf6d1f668f27a4431f2df1e9de"],["2020/FC7S68.html","86f8c1bed5a184376745c4cd9815a2d7"],["2020/YE6KFM.html","3efaa0ee386b970ecb60249c538864cd"],["2020/ZP5TVN.html","d0bed7f9ae479383ab13ee7d14f047cd"],["archives/2020/02/index.html","e7c9252e640c26d4d45545863700d930"],["archives/2020/02/page/2/index.html","040dae1b43b6b9f4142651401accb6d1"],["archives/2020/03/index.html","ba1df7100a7b552af86f2416530b6b20"],["archives/2020/04/index.html","7ea5cf0062a24fecf1fd280562be8fe9"],["archives/2020/index.html","77361bf60378f731adca18f47694ed71"],["archives/2020/page/2/index.html","8b5b0203ef5b4a7d0c9ccefff2c7f2b0"],["archives/2020/page/3/index.html","117716cda77522d1ff38c5f10955de4f"],["archives/index.html","48a236bbae76607b1c161e009a0a1efa"],["archives/page/2/index.html","7ecd24ae6ed0c1eb83600d57768263c2"],["archives/page/3/index.html","fd7913d0a0ebeb043cb642781b38c5f3"],["categories/Git/index.html","c56b3462af1f16a8fdd001b5142f72cf"],["categories/Go语言/index.html","b7b00753ade84043de19bc4bd0559b33"],["categories/Go语言/page/2/index.html","c2ea31f9f2524955e4c5f50c930aeaba"],["categories/Java/index.html","bd78336b330bcbdf2fc42b7e247af618"],["categories/index.html","c0c4e103db8257a83ddcc093000be6e7"],["categories/安卓/index.html","6116fb18078f8f1ea2d7c763973c01e3"],["categories/数据库/index.html","d34a166c8b3d59096a0c6dead0991118"],["categories/杂文/index.html","7dbcbb8f2157c6efd9af09bf7c30b51c"],["categories/系统架构/index.html","36ec91842e25abbbc05030bdba7ed5e7"],["categories/运维/index.html","e054d791e546ea6405b24606d5b82a4f"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","2938fc20896a0eaef8b88d4bde673353"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","42da28b5afa62e31f236407e929f59a9"],["page/2/index.html","51cb30f226567f4c7d7b44710c3bf6b5"],["page/3/index.html","2158a027128c9f02159a639176b1fc3d"],["tags/Android/index.html","7c6b95199079bc0c64fa796d45aa0cd7"],["tags/Centos/index.html","dc583b80dad0b1dd43eadc0475fd2f0e"],["tags/Docker/index.html","515ae6c65bf9e6e8ccbad3dfd3689d67"],["tags/Gin/index.html","d36e016bf401c0a20a65d1af878f2b88"],["tags/Golang/index.html","b0dab8e576a5bb83e70e59f17f8ee639"],["tags/Go语言/index.html","df7e2e63d16b4e9f3bf77e66573201fc"],["tags/Java/index.html","a49f8bf875cd972be1fde674705e991b"],["tags/Kafka/index.html","458e88b4488b4232b45897a808580d62"],["tags/Kotlin/index.html","9825e5e8b81c6c4e7b8854001e06d8ea"],["tags/Mysql/index.html","b1ec4fc3dd237843119a2d94f85f3b2c"],["tags/Redis/index.html","a72e4ab08e7bab1052a99cb3c7e3d3fc"],["tags/Ubuntu/index.html","09a38bfffc774640b554cff61fb89944"],["tags/index.html","3cfe0c4341339519512b120dafe45880"],["tags/安卓/index.html","c686968d50ae92f30616bd5fdc2ea1ab"],["tags/数据库/index.html","4975609bfd6accacef55807bb56c737f"]];
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







