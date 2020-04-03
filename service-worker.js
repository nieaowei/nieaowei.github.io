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

var precacheConfig = [["2020/1905944.html","d398105c8905b30693400b12f4a640aa"],["2020/1946C60.html","1340861c5862db2507a4df4c232d73e7"],["2020/1B5R51M.html","8ccc8fdc80ff6f2c34cf5626bd9f950a"],["2020/1DYJH86.html","cfe931e685fbc8ccadddd5db4fc2c69c"],["2020/1FFNQNE.html","6b40c4bdb99033c35c0137ffcac77694"],["2020/1FRBXF8.html","8b04a7243b961de0fcdda8147ce306ad"],["2020/1X1JYEX.html","d29d454224b74a160ee69508a56eab4d"],["2020/224PAWM.html","52e42c368aedbf9519a4c107adfb3d19"],["2020/22X88J.html","902f2fc2f4f449c0eaa06fb68dc517ef"],["2020/2AATQ45.html","c01f4a9cecbf9f12d3affbe248c41b71"],["2020/2B45ZZT.html","9ce564dda1b2a7dc3f4deb34cdda5985"],["2020/2CJ51QS.html","f90c63904f41f8c4fae05554beae4ef6"],["2020/2EQXTDP.html","7f19a37966aea7ebabdadcb240ac0515"],["2020/2QV9ZH2.html","f1c2ede0fb13b2d663664f8c8251a16c"],["2020/3C7YZGC.html","43bc76f4494b9b9acf38fb52b38d20bf"],["2020/3EG8DED.html","d227be07caa5f2bb891a64bbe74d048e"],["2020/3F6APKH.html","00a5f4f77c49d85fc206710837d2bf0f"],["2020/3HG63WA.html","37a90b00fdb6c9c2416c2fd9f5a84069"],["2020/3N2EAPR.html","e55e4c36510e3ea9c29a1f09f4aed93c"],["2020/3VJHNG4.html","c7036d93d1ab790300bd9259c6f5cf8b"],["2020/73XEZ7.html","cb197ec9fd1136ea1713109cc6752534"],["2020/FC7S68.html","5efc080e55d437be45f65f01dce37433"],["2020/FEJ92A.html","1838b8415ee5b072d1b660ffccc3c880"],["2020/TKXNFM.html","5773cae4dec1fd6c3ca39c390482f51f"],["2020/XN0KP9.html","a19337e217b8d34fefce955891ef0362"],["2020/YE6KFM.html","182edd7148324f655700284ae677ca1d"],["2020/ZP5TVN.html","1d87d22ae3e1c3ae5e4c0dffc481f6b5"],["archives/2020/02/index.html","c3dd8ad2ed24320dc16fa5118f8264b3"],["archives/2020/02/page/2/index.html","ebfc965565db4878090c120e4dd91086"],["archives/2020/02/page/3/index.html","9d5af044ed8a45987dc9ccca0c7b8854"],["archives/2020/03/index.html","7a14ed0e8fa6c09801fecdf5b649d5f2"],["archives/2020/04/index.html","292b39767ece8a745540aad834a4625f"],["archives/2020/index.html","cd4f6c05b8f4467c7c9d0c75134b16a6"],["archives/2020/page/2/index.html","089a64b9d92aaf1190fe5970270b9a9d"],["archives/2020/page/3/index.html","b03288be1cd4f148d56780b1b1077ec0"],["archives/index.html","d289cf79fdd10c4f6cffcc226d319ac7"],["archives/page/2/index.html","4c4f9ffdc860acf019e85828fa4a8c99"],["archives/page/3/index.html","271183e0f563f600672363a0d60e05a8"],["categories/Git/index.html","c8777a4076b421d30e376c62482cc810"],["categories/Go语言/index.html","31eaffb8ca9e9d15f8c60cecf2f2002c"],["categories/Go语言/page/2/index.html","a6f64ddafbaf9a0dedab4dcdd4b9e58a"],["categories/Java/index.html","9f9abc2f73bae907270072266145d212"],["categories/index.html","9543304807e680b439edcbbe324d80eb"],["categories/安卓/index.html","c78d40b9387d32dc9d230806874018c1"],["categories/数据库/index.html","af531864acbe2f8e4caa1f433007cb28"],["categories/杂文/index.html","097cceecabf6f08142576b39b3674bee"],["categories/系统架构/index.html","249128035ccf133f9df4cef20a9f6db0"],["categories/项目/index.html","cf05303f4678d19e3f9ca0f9f05346e4"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","b0ec6ddee15ae3c6a97dfaa4f436949f"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","8ff1399d20463a5ee7bd65be644ac6f5"],["page/2/index.html","b294da0497d70fda8d8243e0ca220976"],["page/3/index.html","7a4810369840a43c0b12377c15accf5a"],["tags/Android/index.html","f2a71e3e59f10814985d2f5f0c501a48"],["tags/Golang/index.html","f6a36448b6095fbfc46e7f5d29b79f2a"],["tags/Java/index.html","0c94bfe2d99f4fbeedf1c6dfd40198df"],["tags/Kafka/index.html","dfac7dea00cb33705549c15a04bca2d8"],["tags/Kotlin/index.html","c8b1aa71428b25eac09c3676cac9a4b8"],["tags/Mysql/index.html","7cd64349d4bc20b882e65496f3050b3d"],["tags/Redis/index.html","137bab19647ee0eba606b31e62aae59b"],["tags/index.html","bcc7fd5206a53d28bc5d31a3a675f47d"],["tags/安卓/index.html","83b8e24f2967987e36d83b8ed781133c"],["tags/数据库/index.html","54869ca0b2302c279ff2c04c7bbde6bf"]];
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







