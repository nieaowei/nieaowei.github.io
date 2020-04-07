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

var precacheConfig = [["2020/1905944.html","8bd1f4609399e71a87a7554a57942dac"],["2020/1946C60.html","44610f58b745af0ba8bdaaf94430756f"],["2020/1B5R51M.html","440c655b8e10c69d950b1dec87e77946"],["2020/1DYJH86.html","65d201b8cd0271da06d830d8edff6b2e"],["2020/1FFNQNE.html","e505f229e6a0b28b0d8df2b507490410"],["2020/1FRBXF8.html","d76cb72bb9fe99030d9be78a1b8b32a3"],["2020/1X1JYEX.html","fd8987daf4242a34a6e6de2e553628b2"],["2020/224PAWM.html","1197df1f7f6f3f48609f421834ba273f"],["2020/22X88J.html","433027dea0c970924c666c66e406018f"],["2020/28VBK0S.html","231395bd151255f8bf757d5680e9a409"],["2020/2AATQ45.html","f5b25be234461317bb7d831082b8db0d"],["2020/2B45ZZT.html","be60f29db6b5f5ef2aabb4b62e406408"],["2020/2CJ51QS.html","33b5df7fb5422848d3bee32a25d74fdb"],["2020/2EQXTDP.html","c40feb029ea990a51e463f8a9d466c39"],["2020/2QV9ZH2.html","f1582c80b4cd1d30fcab3e2ffa85d078"],["2020/3C7YZGC.html","9fc48541a54c03c884f010ca274c5dca"],["2020/3EG8DED.html","42923bcf200fb41b5dd99463c29802ee"],["2020/3F6APKH.html","8acf2b7e26c9cf55a473047e92e04ce3"],["2020/3HG63WA.html","f8aeb8ef0f7fbdb8b35f96451cd56209"],["2020/3KDWDKB.html","05dfd546f53be0d58d28fc6a74e3b145"],["2020/3N2EAPR.html","3aacd827e7d3844aa39dc87dd06b37b1"],["2020/3R57ZBM.html","0b1bb8989a38a6115ae2afb27648154b"],["2020/3VJHNG4.html","7d09e745ef775e27a2eab500173aaf85"],["2020/73XEZ7.html","17f8384d2d273ea5d0d504a696980730"],["2020/CEEV6W.html","eff4f3763d1f56236ca244f9e25256f9"],["2020/FC7S68.html","ab700c19cd1a33e7197bef5ed37c7f3a"],["2020/FEJ92A.html","37794c52ff51fbb4f333b92a8ed6d182"],["2020/JD6M9P.html","7f5dd02e87d1d0d5500625fdf19b02e2"],["2020/TKXNFM.html","d94029a40ff6132bb885ce722268e85f"],["2020/YE6KFM.html","d9db5061883cdba98f9db0a5520b6734"],["2020/ZP5TVN.html","9ec70a308b66663133cdc2c894e4d0cd"],["archives/2020/02/index.html","d77acfe9804b21b9021584f99cf0a4a8"],["archives/2020/02/page/2/index.html","07b3e303dd58d051a732060feac29a4b"],["archives/2020/02/page/3/index.html","e77732d80f3aa1d981149d06751e1c84"],["archives/2020/03/index.html","214cb260c04afb492094dfc441d30f31"],["archives/2020/04/index.html","1a9f6c3ea20d533fa119dbbf0c4fae3f"],["archives/2020/index.html","78e4fb1cb00e839b144995bc5c8e2922"],["archives/2020/page/2/index.html","4bbfbd9a45b7109af8f92379c286d220"],["archives/2020/page/3/index.html","4c3a53557e1415b5c77e86fae9859655"],["archives/2020/page/4/index.html","e23fe761a912a0d8cbbd9fc478ed094c"],["archives/index.html","d11a75b305cf09a8c4cdcabd86fa1a6f"],["archives/page/2/index.html","b652b82e044e217d74b3657ee7c46706"],["archives/page/3/index.html","71cc05eb571155d4b64fd0b5f71ec6cd"],["archives/page/4/index.html","689db7ba649a0ba410f7e42eb1f4661f"],["categories/Git/index.html","0b6de230a4b52026fbc608f61e7fcada"],["categories/Go语言/index.html","9fb2e0b9bdfac3bdf047314ddcdad0a5"],["categories/Go语言/page/2/index.html","cddf18335a17681ace6a3905b00eee38"],["categories/Java/index.html","652a20ec624ff66e5b808c59aef1b880"],["categories/index.html","e1952ce60f8808a1cc3efb731788797c"],["categories/安卓/index.html","4f18b4960c88e711f644334b92dc4608"],["categories/数据库/index.html","f4b27ce5cf2a706e6809f5b759173562"],["categories/杂文/index.html","da03d768523692b13eb9938334789b24"],["categories/系统架构/index.html","c924931f95e9ad602af3ae8d58f0f1ca"],["categories/项目/index.html","f5c8864fcfcd5076524ccc57f119b173"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","87dac61d791c5d1d98ab1eb0de822754"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","c104996830f9f3847836f882558c14c3"],["page/2/index.html","16dff127346afb45dc8bd55a88455acf"],["page/3/index.html","c156314583fd6ab5aa8242ea7e366fbe"],["page/4/index.html","d6ebe2de3f7cce9524c7992221bfc93e"],["tags/Android/index.html","52494f1d9b1c034731dead697603afb8"],["tags/Centos/index.html","38b54612cea75037e5250ba0f51379ae"],["tags/Docker/index.html","ef0dacd81e8fbb232df2872a04e95a63"],["tags/Golang/index.html","1041492ff8b9274f707f2e0157409a92"],["tags/Go语言/index.html","adc4faa9104ecc8970ea26429d1cc636"],["tags/Java/index.html","1afe6731a662fcab417a1204ec222270"],["tags/Kafka/index.html","92d6299b925a2abcb51db8ae4c4d9f98"],["tags/Kotlin/index.html","d99089b83415bf78966a625082307ce0"],["tags/Mysql/index.html","4a56b1e39c0f1af8a6c364ab296db79f"],["tags/Redis/index.html","ddfcc0bd9ae1766c8dec45f6278653ab"],["tags/Ubuntu/index.html","b676abf967a48d9c821224469ae12e6d"],["tags/index.html","6a0ad94b5405001d2bc07112b3a202c2"],["tags/安卓/index.html","cdacbd7821f675f56661f4e730fb2148"],["tags/数据库/index.html","20a00f9f5fa8b8c57aacd001ab73da83"]];
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







