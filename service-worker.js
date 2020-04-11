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

var precacheConfig = [["2020/1905944.html","b5eb4919682935a835cd14c115ab3006"],["2020/1946C60.html","44a5cf109b835b66723a51cea8c1b045"],["2020/1B5R51M.html","35f2a80c812e952995eb3f91e1c6c660"],["2020/1DYJH86.html","3e420194078a9535254ac6a8aa0776f1"],["2020/1FFNQNE.html","9ca14e3d9f85a9dca2fc0d566074a918"],["2020/1X1JYEX.html","e94381d30395b182a23dfd8b6fd8c020"],["2020/224PAWM.html","d4586d22042d4aa15776f5986dac8237"],["2020/22X88J.html","20f7944f89b9a6a80e0efa87ce64a9c8"],["2020/28VBK0S.html","281fcd285d4687e15a3cc80d103ade08"],["2020/2AATQ45.html","a1fc59b87f0835a3985afb8c721cb7f6"],["2020/2B45ZZT.html","35f921ddaabba909523c6318669e0b6f"],["2020/2EQXTDP.html","2f94024b3514c0a304e279f72a164626"],["2020/2QV9ZH2.html","3b0bb451a82c0e409c5883b168a98766"],["2020/3EG8DED.html","762313900c2a86271900ef53dd5ad48d"],["2020/3F6APKH.html","d1e658123eab06cca5aea156525c2015"],["2020/3FRKW3J.html","dbea40e98fd53acf2210039571db3a3c"],["2020/3HG63WA.html","b87e1108c4ab50a87a0fd70d8b6e89ce"],["2020/3KDWDKB.html","3b9e35ef904d708261247e355743bd13"],["2020/3N2EAPR.html","df2dc5e98063f2f9dca10a3722914b87"],["2020/3R57ZBM.html","de0ff37815f0991f97a39b244024cb66"],["2020/3TRNKGR.html","f5a00bd141e722b9feba28e978b1f774"],["2020/3VJHNG4.html","406f4fffbb4d1e559c89dea926fda0d1"],["2020/65SJMT.html","807e65b840d04e6e57ab8d6c7470f169"],["2020/73XEZ7.html","b06ca1975eee1ced1569867072f0aa81"],["2020/CEEV6W.html","2ff9073cae479d7453be9064caa46c62"],["2020/DCQQ72.html","832f5d203723d520674cf113b7cfc98e"],["2020/FC7S68.html","42f192230b79fd80d307053d74e18bd4"],["2020/YE6KFM.html","5cd1925e787c01f17904b3280b08c397"],["2020/ZP5TVN.html","5b4ab0cf273d47f92975db1fb68ca1d2"],["archives/2020/02/index.html","1a6b029e46780367377d5cbc168f9030"],["archives/2020/02/page/2/index.html","2c36bec4cea1e0f913f3d994a2d5f257"],["archives/2020/03/index.html","928e2b640fe463c1140396bcbb42b2b9"],["archives/2020/04/index.html","d3d529dac137403a8e8d83b7f5eec6cb"],["archives/2020/index.html","b411bb9a0a1ef0fca1003ee4bfacb1f2"],["archives/2020/page/2/index.html","791e84f3bc1e682b4f9daab1f99bcb58"],["archives/2020/page/3/index.html","aaa3cebfdc5f66462da38873bbf2d9b0"],["archives/index.html","d65c1c30f43ab26616c5a008b157a842"],["archives/page/2/index.html","7bec170e9d90c91c17a0d45beabd221c"],["archives/page/3/index.html","d3a185e9cddb1e43dbc6bb416983a151"],["categories/Git/index.html","7c02f4f03657cccb837660d90e3945a0"],["categories/Go语言/index.html","b5947d1d2e642dd47e1cf6ada429eca7"],["categories/Go语言/page/2/index.html","b6b6c283ff5d9beb89a48ff89727321e"],["categories/Java/index.html","1b635714ecae66f67993e017410af7e6"],["categories/index.html","702aea3edb9a38dd7f4f335bb1235129"],["categories/安卓/index.html","3639f92341eab44fe9540b4f74e736ed"],["categories/数据库/index.html","d31021ded8a19c350a96cad601d7f171"],["categories/杂文/index.html","cac0ece1ad614d0246f0ace5afab1fde"],["categories/系统架构/index.html","ef6052e1284906a1fe1a5d120dce23b8"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","ac1e1d84bd821b6ddf7b9c7feae766fc"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","3ac6fd0e2bc19a72cbf1016a76317f7f"],["page/2/index.html","a0f67c4c163f9ed7f69d19ad205872dd"],["page/3/index.html","7fe9ab012abd9ea488e1c1bcbbc22a95"],["tags/Android/index.html","ec80aeec079e321c6ef80e654740f472"],["tags/Centos/index.html","2bab082ce48e722781c7c297ec00c068"],["tags/Docker/index.html","3045382e74286334fd426699ca3c8d19"],["tags/Gin/index.html","ec5d226b913baa3e7c601ddaf7ea65b2"],["tags/Golang/index.html","793c50dadaace0dcf97dd6cbb428effb"],["tags/Go语言/index.html","8b223f578959d18fb45fc99b54a532d6"],["tags/Java/index.html","46d638c3c64fdf99f77c5579f9291d8b"],["tags/Kafka/index.html","5f32f641aa099e3eaec33a8438e7c783"],["tags/Kotlin/index.html","1e32a7b66f645c5ce5df3b5c72320a79"],["tags/Mysql/index.html","ab9495500fa80728b16a47a9e4f5e10b"],["tags/Redis/index.html","1efd7068fc3a584b5a220b809ae81e53"],["tags/Ubuntu/index.html","c1a3f1ca7e87b980807b0ff3c744bba3"],["tags/index.html","511b8d87f81fa623c9c8a8af94fdb7d4"],["tags/安卓/index.html","7640915b9b2e04fdd60876ab8b265d1f"],["tags/数据库/index.html","7dbf87fab3f2463cd28c6851388e1249"]];
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







