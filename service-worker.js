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

var precacheConfig = [["2020/1905944.html","058dbc83ef5337b327466f73419c8862"],["2020/1946C60.html","4449ba51af2f0670c95f009dfadf3be1"],["2020/1B5R51M.html","d807013e9cb6c0dc42e7b6e410241711"],["2020/1DYJH86.html","e1e94f263ac6a0849563bdf4483b67ee"],["2020/1FFNQNE.html","fccf91f1fe6cb780cc7fe43b7337fbb7"],["2020/1FRBXF8.html","cdca69043974f581cbcc9cd78dc7203b"],["2020/1X1JYEX.html","f7c9500493e7192e6f6bd84014910177"],["2020/224PAWM.html","d1775005d811747131177b510e01f1e0"],["2020/22X88J.html","90bde6bad479aaf2a748b94530e3ea45"],["2020/28VBK0S.html","63de1a2be050064f244bcf3b3e2261af"],["2020/2AATQ45.html","c6cc7714d0c546aed35102edc4d5967b"],["2020/2B45ZZT.html","d2031ab99bcf655b0432a19d75bc4ad0"],["2020/2CJ51QS.html","b8b7d9e9d1225c8abada9c7178644f37"],["2020/2EQXTDP.html","4e54c2baa7c5a15188cacd9fb0f861b6"],["2020/2QV9ZH2.html","a1307cfcbdf4a0c7d6f08e836041ed0e"],["2020/2ZN7WDK.html","c2175887f6a98a6963874f283e84e999"],["2020/3C7YZGC.html","239664854289a599e6df8d5644ef4faa"],["2020/3EG8DED.html","f2bc1700fa9054ef9c215031fe638b8a"],["2020/3F6APKH.html","22ae043dd6176b3ed76c61649a48ac79"],["2020/3HG63WA.html","70ca6a144cc17f3a6cd1098aa49a3d07"],["2020/3KDWDKB.html","03c42a6c8fbacd58948f6b3a2a98e19f"],["2020/3N2EAPR.html","034c80f470d82be6d3254fe0e7832dbb"],["2020/3VJHNG4.html","82c75883e9561b25ca8f710fab8f0354"],["2020/73XEZ7.html","4e8886c2d45d45a16fd8e07f9140fc62"],["2020/FC7S68.html","6feb912796cf196b8a0d10d844983b12"],["2020/FEJ92A.html","4a1f5b977aa49ce674d087e22f2faa4d"],["2020/TKXNFM.html","482a8b7a442b33ec9eb0f64ec8b4bc1c"],["2020/YE6KFM.html","34ff97f6717d21d5d6d7fa5fe799d90d"],["2020/ZP5TVN.html","9784ca0f5f4259e76e5ed84a91e259b7"],["archives/2020/02/index.html","7b7cbe77c8f6fce4728871db92f0899c"],["archives/2020/02/page/2/index.html","48c2e82927a2338b59b8e58db0f6efb3"],["archives/2020/02/page/3/index.html","d36003e733e928418b42420945daccf8"],["archives/2020/03/index.html","e83bd2f794888b8ba2bbf64bae014262"],["archives/2020/04/index.html","ffb7431531f67540d10311b41d348f9e"],["archives/2020/index.html","2315164dbe097dfa42d2df31003c7aa3"],["archives/2020/page/2/index.html","2cf0a66a3325979eca93cb8ee9adb210"],["archives/2020/page/3/index.html","c37a58fb4e29abec0242f98b917413a0"],["archives/index.html","576506fba151f18678aae3fa49595e8c"],["archives/page/2/index.html","4b3400ebf6a7c787c1b3cfbc3b78251c"],["archives/page/3/index.html","afdc2798cfb5f3bf7d6c00de9a11676f"],["categories/Git/index.html","eba530e07657bebdefe5b4129f2d0d0d"],["categories/Go语言/index.html","f40e6154aa8eb3307db0282a377a4a8f"],["categories/Go语言/page/2/index.html","e7679f158a1cedbc7264774263ef2a21"],["categories/Java/index.html","ec013cc1a857bc040b0c09c572b370fb"],["categories/index.html","f8d795a3804296f27789291ddeec057b"],["categories/安卓/index.html","89cef466792ebd91b03115aedb22f7e3"],["categories/数据库/index.html","abe0840973ed33eca2f1ca58665ad8d7"],["categories/杂文/index.html","430a0b0c720efe74be1eed707ce1e0c1"],["categories/系统架构/index.html","d5c88683149c468ca1b7698e7ca74ec7"],["categories/项目/index.html","ec395c61051464036b8f974b2aea35ff"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","202b344f11d91a285d79420bbf71f416"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","c2bd4df3e3b0b9e648b91c8e9f96c0fe"],["page/2/index.html","4bedb62e4bd6359aea76c0110a9cb160"],["page/3/index.html","1dfe09a64f2e2acf58d3ded67ceac757"],["tags/Android/index.html","22c729f6cc1e1e19129676b1500df154"],["tags/Centos/index.html","cd05add6bed039f79a059625f156026b"],["tags/Docker/index.html","f39b98450e863a1d3f21306bf3567ab2"],["tags/Golang/index.html","65fb21887e43a7a724f8590e306e5cc6"],["tags/Go语言/index.html","bd95d36c748bd2da0f497b0aefcf0b00"],["tags/Java/index.html","7551ee26104830e94883c2d8768958c0"],["tags/Kafka/index.html","3ac922ce78cda230730f99babd1cee9a"],["tags/Kotlin/index.html","1843b22c42159ff8e4baeb6a7996226f"],["tags/Mysql/index.html","6ea83b63c6fb5f6e5d7696278ec88cd8"],["tags/Redis/index.html","6e628a5e16ba01fea0b369b3223f156f"],["tags/Ubuntu/index.html","932f1b5afe519afbd36d0b1328e51291"],["tags/index.html","1d4266e47e09e9f193772a85705dd493"],["tags/安卓/index.html","d0e9aed7e9819a24e1e6e3d7664c6f6d"],["tags/数据库/index.html","cc3f0fc2937d09f27b939c4b4c3f9ae5"]];
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







