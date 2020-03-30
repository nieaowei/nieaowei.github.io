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

var precacheConfig = [["2020/1905944.html","771453c9f13157858f4a67d80b797880"],["2020/1946C60.html","2a540ba5829bc857f6a4a26c03585742"],["2020/1B5R51M.html","208ef0c57b7c42b26eedcc19b07b040c"],["2020/1DYJH86.html","0fcad3750e2a6a04529b9a03dddca3a0"],["2020/1FFNQNE.html","bc95055a56654ce50456ffa29e0d7b19"],["2020/1FRBXF8.html","5b18509ca54475f5a1f69890983a172c"],["2020/1X1JYEX.html","753e40e303edcd4b07a01ce987dd4ae9"],["2020/224PAWM.html","a1131f5d3ca41068098acdf0a0176ae7"],["2020/22X88J.html","98372c3cb0ed2b14b32aa4a8c828627f"],["2020/2AATQ45.html","a44f5a43a548cb6ae78d7d8fc1aa8112"],["2020/2B45ZZT.html","8684cbf7786317ebe8fb1bf2c9e72339"],["2020/2CJ51QS.html","23d39f4449e947cbb727c83415e3a5dc"],["2020/2EQXTDP.html","2b255056ee60a383e4f7799d422ce4d5"],["2020/2QV9ZH2.html","acaef81c305615194154a390bc47b5f5"],["2020/3C7YZGC.html","142c0998bea01123bd657f5454ed698a"],["2020/3EG8DED.html","31a50f939dc5dc2f2e496c7d85d090dc"],["2020/3F6APKH.html","8ce9981600c5badd4dc605bbc17a83e8"],["2020/3HG63WA.html","8ad30425ae49090374de8ced3d369c89"],["2020/3N2EAPR.html","220f32593f2949e93590c0ad573a2ba3"],["2020/73XEZ7.html","703d5f5764b53875c5d94bfacd85b912"],["2020/888MMT.html","7120b89217521117fce52d229d965408"],["2020/FC7S68.html","a0702688a5f4a94d341687a48c0267de"],["2020/FEJ92A.html","c71742d1b464513fa21aad9a04a6db5c"],["2020/TKXNFM.html","6fd5600e38be08e1402f06b04298bdc3"],["2020/YE6KFM.html","52bee771a0143c9bdf761d1ed19a2ea8"],["2020/ZP5TVN.html","bd00444acc6e3941bd29fc1643bfcbec"],["archives/2020/02/index.html","61f069aa0b22dd17e2481260f8f15cd2"],["archives/2020/02/page/2/index.html","9ce1e4258c11e4ea45c09a3bd3c7a837"],["archives/2020/02/page/3/index.html","82dc3a8d16df0e5f94d2637f815faa2e"],["archives/2020/03/index.html","f973f04d179e3275eb9947079ac75bcf"],["archives/2020/index.html","f29bac86d9bc1549e1ab1cfe7456cdb6"],["archives/2020/page/2/index.html","eb5a308a739d20bfd4a8efd9510a01a3"],["archives/2020/page/3/index.html","5135bf9c456f1a25c75ec5de5525b40a"],["archives/index.html","4a47c07637e5f03524e7d4ad1103d8d8"],["archives/page/2/index.html","27ac78097f27e85221a54d3a38cbe992"],["archives/page/3/index.html","0df7ad394f521354ad28b4a6e3f0183d"],["categories/Git/index.html","3a51028be8aa8ed703c2d12ab902f4cf"],["categories/Go语言/index.html","ea96f060f9ed55812475f683406d763d"],["categories/Go语言/page/2/index.html","9827f5f832fdbb47b3c3ca0638661524"],["categories/Java/index.html","8dc73e22943bc86414677e3d61e8a28e"],["categories/index.html","4c0a34bcb6f496e5ef6d28300e58ec22"],["categories/安卓/index.html","919972b6aefbe683174dd351308d2826"],["categories/数据库/index.html","cca37addd207d364b9570646003e1363"],["categories/杂文/index.html","8a36662fffb6f1188821d848224d0c5c"],["categories/系统架构/index.html","62672000f78c4fb9ee3a327964476659"],["categories/项目/index.html","fccd3313c55fa2beba1fb98f9a498589"],["css/index.css","8c2dff56608bb9d307d9cea7270a353b"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","79d3e0bacb79f0ec5d0545a239012fff"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","7686faac522d8cbc58c93a205e5dfe9b"],["page/2/index.html","6060d8bbed913bc07f0b9a16ffea12cb"],["page/3/index.html","5f87024e9745c96a0d374af95696a9f8"],["tags/Android/index.html","807e6f1fb7f3444a668cf6c4853936d5"],["tags/Golang/index.html","668a9224871cde6393dfd4fc7c8ee704"],["tags/Java/index.html","9ee2388afd98e4d1c6896e4186001bd3"],["tags/Kafka/index.html","ddde5b3bc962654f40d42c18ba3111c6"],["tags/Kotlin/index.html","7de650f1e85c28d7197410427803d682"],["tags/Mysql/index.html","c7b91622f3ff99b103afd1c5dca590a7"],["tags/Redis/index.html","790b1841c9a499f5af52a30bd1162390"],["tags/index.html","73ebc373abcfa1a94ec05afb53faee25"],["tags/安卓/index.html","7cb4b00e5a7e1b49fa5a7d92020fb7d2"],["tags/数据库/index.html","308dc3d983cb21531c67b1e5657a9792"]];
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







