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

var precacheConfig = [["2020/1905944.html","eaa60f97d4a866feea74a36a1dacebd4"],["2020/1946C60.html","011618f5d4093ef5c4167ba84c7fe5a0"],["2020/1B5R51M.html","8e66b3ada4d7f1a9266006d8ebeba390"],["2020/1DYJH86.html","418f9cd22b0983a819d8752fd5d11f87"],["2020/1FFNQNE.html","27be152530e61a66a6ab7fd6acea224e"],["2020/1M052X8.html","15ebe776b96574fb6eeecc2afb866526"],["2020/1X1JYEX.html","ed821f1d330e662bdc3b8dfd341ea92d"],["2020/224PAWM.html","b70e107ee61ce16f35fa168af9ebc538"],["2020/22X88J.html","60ca1192c25c54a8fd1d484522c1d4e2"],["2020/28VBK0S.html","c8248cfdd9668e7a708407d89947b046"],["2020/2AATQ45.html","fd4fd7521bb71def0fb3b6cb15aae03d"],["2020/2B45ZZT.html","5744dedca7a1933a4daea59c760be5ac"],["2020/2EQXTDP.html","41ee281b9cb420bdc0576899cc5bbd57"],["2020/2QV9ZH2.html","b7aa37f3dca67e53bcafade10ae80d62"],["2020/33KJF3Z.html","00d8942f58a174b14f9bb6d5ba5d6e76"],["2020/3EG8DED.html","f97db82b138524f24621635cf8bd47fe"],["2020/3F6APKH.html","5df7328c1a94e41921f23a2164ebc6db"],["2020/3FRKW3J.html","f4948b13dc2506452d2ad78297ea8868"],["2020/3HG63WA.html","ed54a74ca39a968aa2802fc74a33c0cd"],["2020/3KDWDKB.html","2130da8dc1021b13301de022a924b4d8"],["2020/3N2EAPR.html","8a3dadb3ca019b38c0ee666d534b3281"],["2020/3R57ZBM.html","27190ebe370492a8527e537c84040ca0"],["2020/3TRNKGR.html","954077c02122943a6a82845e903910a0"],["2020/3VJHNG4.html","1961eeda20450ed09662742042e2d6a3"],["2020/65SJMT.html","10c664e08ca747fde9315ef1e1920130"],["2020/73XEZ7.html","287a32eb05d2677da83beff124a1bc09"],["2020/CEEV6W.html","98949aa0627075637aaa40be98acd5b8"],["2020/DCQQ72.html","4b31925b700053383d0cafb9aade93d9"],["2020/FC7S68.html","965259cc6af8a666ef0f7b4a81f9a7c1"],["2020/YE6KFM.html","2d7d080b5b527760779ed7ab8b73b3e6"],["2020/ZP5TVN.html","0d999b97432181a4376e06e6b4280032"],["archives/2020/02/index.html","518c1aabd218aa91f8105c5ad0cdbdfb"],["archives/2020/02/page/2/index.html","db05083585ca2b0ffe9de894dc99547a"],["archives/2020/03/index.html","fb7968f142b33a42a47126bddc475705"],["archives/2020/04/index.html","2d03c8757ae9efa734d26a1ab2ae7bdf"],["archives/2020/05/index.html","6c07f4001dbf8023fecca650110fa4af"],["archives/2020/index.html","1d77f3e047de09a75b76ef5ba2cb7ee4"],["archives/2020/page/2/index.html","00d26b0b1c7a8ca955f5e646fb91cd5d"],["archives/2020/page/3/index.html","4d0f509e27f7b76e783c63ee8ba08436"],["archives/2020/page/4/index.html","dd162d668ba784fd555e80495cbf639c"],["archives/index.html","2942dbc350129d5f961273bb005ee8ad"],["archives/page/2/index.html","b0663d9f37f4c278bb09769373ef10a7"],["archives/page/3/index.html","e80c3a63c398c0e3dab220d74e0d3f55"],["archives/page/4/index.html","fa0ad0459b03bbba4232b1944a7a5763"],["categories/Git/index.html","95d371bace461329aa8f0e737eeb34f4"],["categories/Go语言/index.html","3f2c35120ef16a8d4c8d1ed796aab466"],["categories/Go语言/page/2/index.html","7d35f7287393aea8ac2468ab304b9e13"],["categories/Java/index.html","780866be42c5a910991e65de6ac9751b"],["categories/index.html","2cdbb0f30ea809b7044bae94a467ab13"],["categories/安卓/index.html","53fe9851f8c0c29f0a5ed7c677963fe9"],["categories/数据库/index.html","a36a77c5a3216d59c4fed53981dee579"],["categories/杂文/index.html","17290ecce90eb4722cd52e13cc1f71a6"],["categories/系统架构/index.html","5cd04bfd9544ebab3cd08c7cc226682d"],["categories/运维/index.html","66124930fffca66125148c06bee09015"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","7cf2a4d0d1eecfab66dac8b18d6aae25"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","d44856ab4c4a31d7e08b0d106deb65b3"],["page/2/index.html","29442b3b51d0d4354f4b7d7e358a1124"],["page/3/index.html","ea556290eb294b1a2c9dc2f0faec01a8"],["page/4/index.html","2d01b7b198c09ae76043d59937036cd6"],["tags/Android/index.html","bf1f38e3de59109f3b61b8480624859e"],["tags/Centos/index.html","422c6e9bdb7c0d3d0949f4fdef500b03"],["tags/Docker/index.html","9c6d717c180b2e5024fe057a1472cd20"],["tags/Gin/index.html","7ca4360ba4cd4fceeaef9f3713362caf"],["tags/Golang/index.html","3939e6c708b5e8f1fb8571c6b342da8c"],["tags/Go语言/index.html","0c1f6583776baf16e9e7df57706006c2"],["tags/Java/index.html","960b43e2cacf239ed2c000e718570eaa"],["tags/Kafka/index.html","af53efbbbb86e311fe51df3a0c1130e9"],["tags/Kotlin/index.html","fce7c35500ae2c5bc9e691cae70ba059"],["tags/Mysql/index.html","765abfd56db04d3b77a89a1a59f8e531"],["tags/Redis/index.html","73cdc669e67cf1aeee9f2564adc5602a"],["tags/Ubuntu/index.html","1a1053310c6bf84f28df2ff460cb11bb"],["tags/index.html","11870a082330cda34bc5f9039aba5f3e"],["tags/安卓/index.html","6443b08467de432f984ea54ca11183c6"],["tags/数据库/index.html","bb0571e22a1fba172cf2daf8dc050840"]];
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







