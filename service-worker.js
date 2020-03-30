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

var precacheConfig = [["2020/1905944.html","fc01ec36446e2d402e7543701e6d7e33"],["2020/1946C60.html","3a66f9f6bc936bb50f059e1d49b88846"],["2020/1B5R51M.html","0ad7c5a5523277bf8a8f397842f7365d"],["2020/1DYJH86.html","5650092a6399e25904cfbdb48d3a0e9b"],["2020/1FFNQNE.html","1814a41701fcc4a1efc5941196cc935d"],["2020/1FRBXF8.html","63e525356c78157d79a35d22d9db4e73"],["2020/1X1JYEX.html","4601c65162eec57f87b332003d8ba2e6"],["2020/224PAWM.html","e6962ea10d8e6659f56a363de90384a8"],["2020/22X88J.html","8b70f88f4dfa16452d864447a4c976d6"],["2020/2AATQ45.html","3c2fa3ef45febb2d53c604c742d0adfc"],["2020/2B45ZZT.html","a564fc9ef1c2e175a8b8d1ba6afbef40"],["2020/2CJ51QS.html","9515e3f863f8143682dbf5daf0183e8c"],["2020/2EQXTDP.html","41a1cdce0924397b00f4dce053805df1"],["2020/2QV9ZH2.html","075c58949de32902d870c4d36fb0bb44"],["2020/3C7YZGC.html","9ab1a3902032e444714481c7f40c4e5d"],["2020/3EG8DED.html","b31ab22f34f6e84b9206a52b275374a0"],["2020/3F6APKH.html","150db315f7475e4d836392a3c1d7fc2d"],["2020/3HG63WA.html","bad900251c7a5b32ead09e3c5c365048"],["2020/3N2EAPR.html","f80f5819d8ca2455e8590dbf410e4ce0"],["2020/73XEZ7.html","57f0ca4a3cb84106ac7d3bf012ccbc21"],["2020/888MMT.html","45dde07fa8064ded5de4d533d4dd6c77"],["2020/FC7S68.html","95877836ad196b8f8ef3b719fc5a9b61"],["2020/FEJ92A.html","28c43fb6ee836529e256b136f537b277"],["2020/TKXNFM.html","a09cb045acfac2184d11a4d21d8f8f5f"],["2020/YE6KFM.html","bd58d953964cf8e619061f44bf3c8dc3"],["2020/ZP5TVN.html","e5b27e413d5ac705b93342ed230f88be"],["archives/2020/02/index.html","7c1f15099eb0e91247a5dadbb1786e66"],["archives/2020/02/page/2/index.html","729bf12a9db58fee051c02c0fb47c5c3"],["archives/2020/02/page/3/index.html","5e164ec31f86ca966195dd6247a1fb33"],["archives/2020/03/index.html","b568f9f5155a5564b34ee3958ef25800"],["archives/2020/index.html","2110a3ba557e66902c40e134059772a8"],["archives/2020/page/2/index.html","d3843b0c80e4a1593e10312afe7b1f51"],["archives/2020/page/3/index.html","1db7dac06c5cf19ae4cd335463d54654"],["archives/index.html","47e04dcea3edb636516b5124f390ba59"],["archives/page/2/index.html","030b22146b481ca880bdbc045be7115e"],["archives/page/3/index.html","c3f146de3bfb78832158a26647b8d30f"],["categories/Git/index.html","955d1dca5e56002e52f30e7d7ca4fe51"],["categories/Go语言/index.html","9b2ccba4e14307a5d8b807f1e99bba05"],["categories/Go语言/page/2/index.html","369de6586efa269a0b8d57674e26add8"],["categories/Java/index.html","842b1b96e507b6cb4d091353f26a2a51"],["categories/index.html","35b049b43470bfa152309d212a4fc2b8"],["categories/安卓/index.html","99f05ab3b85ecc2391e89d80c1c9eb96"],["categories/数据库/index.html","18496d1c52a10efa2216008f15508fc9"],["categories/杂文/index.html","c6880b934ebc3372447e3702a872fc7b"],["categories/系统架构/index.html","aa6cc2bea720956453e1506059e02e99"],["categories/项目/index.html","cfaf8e0e0201cd33825b3e3120c9104f"],["css/index.css","8c2dff56608bb9d307d9cea7270a353b"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","03e1dcba76e12721ffd39542544dd55e"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","e8fb6269b34c85cb64f946ee73f99f8d"],["page/2/index.html","9670683122edbf7cacebf21809056096"],["page/3/index.html","ecc48ec39b13d98e97cddad4acd033c4"],["tags/Android/index.html","b58e78f27e3c3a66d781bda637a06ad5"],["tags/Golang/index.html","dc55d5aa53c26b398c37712f728a9a5d"],["tags/Java/index.html","4ded04c15d1ca431547fd94977287cad"],["tags/Kafka/index.html","f58d307b30ce53fba532c5127521786d"],["tags/Kotlin/index.html","48db1635c15ddef0303a7255c30c1fa8"],["tags/Mysql/index.html","d17c1d25e178d0c3a6eda43c939013fa"],["tags/Redis/index.html","eced282fb909dbf963c1a9227777e2f7"],["tags/index.html","d1b066076b4b3390159f4778dfff7784"],["tags/安卓/index.html","a1ef93b7af6f61ced783d017a5857007"],["tags/数据库/index.html","1759ce8c2bfcd924eea943d15f985934"]];
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







