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

var precacheConfig = [["2020/1905944.html","7085266c37205a5a3a5292b0808ff8bc"],["2020/1946C60.html","2c6dc953dbdfa6caeba3dc6c87b7c121"],["2020/1B5R51M.html","ac60237fd909f1463cffed0b23e9f7ba"],["2020/1DYJH86.html","fd4aea995aa9f3d9ec9ceafeebf6e413"],["2020/1FFNQNE.html","3caf28ce53530566267e965db3cec4fb"],["2020/1M052X8.html","cab25da456ab943409e93f1917953c20"],["2020/1X1JYEX.html","4ad1cf5309fb4c79243337a237ee3a12"],["2020/224PAWM.html","12c8447b3c6a77c7f73459c7de2d236c"],["2020/22X88J.html","8837fea3130d9f3695cb8cb24b3ebe2d"],["2020/28H96K3.html","fc3d315032190e878d5c36ac49c50f7e"],["2020/28VBK0S.html","d0895a66579766b789d031c11e90b53a"],["2020/2AATQ45.html","e8f777773871585c90ea92c9760a29e2"],["2020/2B45ZZT.html","d9d2f85cb8ae383dcee2273b2e0bb283"],["2020/2EQXTDP.html","f37f90608aa88e3cfe736e3ea2bccbe1"],["2020/2HQK026.html","903e0db2fc652141f0149594513eb4e0"],["2020/2QV9ZH2.html","9a243465abb17673488d4b4341dec790"],["2020/33KJF3Z.html","4f5940b7cc50fd6bfca5ef28ac889518"],["2020/3EG8DED.html","c71d2c705257c4281b6b29cafc5c9f75"],["2020/3F6APKH.html","1b83998e26dd33b7159ff2df736c5dd1"],["2020/3FRKW3J.html","c16550833be0f1eb86d8256239d25384"],["2020/3HG63WA.html","d747b48416d2f4665d4aff77844a2206"],["2020/3KDWDKB.html","a472c260fcd2074d1140745171c563cc"],["2020/3N2EAPR.html","a3882686488cf189312d6e5c81c5d984"],["2020/3R57ZBM.html","30958d63d81ebd5f22c07a9536289a68"],["2020/3TRNKGR.html","5151bf08b25475e77873f8c4061da702"],["2020/3VJHNG4.html","6babf31d0ff58231b7abe0e5ee27d082"],["2020/65SJMT.html","079bfdaefd12bb59fc2a5edb75b3573b"],["2020/73XEZ7.html","fadad78871a18946f685768aaf0b8f7b"],["2020/CEEV6W.html","864b91d63971b3bbd194d0638895efe6"],["2020/DCQQ72.html","11f38813687ff3680bf9ac5f7edf245c"],["2020/FC7S68.html","4192ccc0fccd860b17d618a0d57e0777"],["2020/YE6KFM.html","fb43c4eb79229b2657019388ed19f25e"],["2020/ZP5TVN.html","7ba89accf724f04a26e4d230b006f095"],["archives/2020/02/index.html","1a546ea726172c43f3847dd57bba7933"],["archives/2020/02/page/2/index.html","ae91ba484a15871e667fcc9aaab4b3ff"],["archives/2020/03/index.html","70880406ceb9ddbfd887b104d3f4f6d8"],["archives/2020/04/index.html","d30cbf66c6d24f6dd3fac2ff6a65e96b"],["archives/2020/05/index.html","7e273855307bedefe9aa96e34f1c509e"],["archives/2020/index.html","1b04cbebef97ad88d823ff46375bd7d3"],["archives/2020/page/2/index.html","ce306ddb95461effba584b36f3f82056"],["archives/2020/page/3/index.html","e302a75fdc099e1a93664b01aa8a72ad"],["archives/2020/page/4/index.html","b35da814e23993b4bdc168c6fba86e32"],["archives/index.html","1334a3eb3b49ae905f166c3674c546f4"],["archives/page/2/index.html","c188fe0e31585f6e762f74e984cd56b0"],["archives/page/3/index.html","2870fa8ff1c51cdb99024e049a0bb3b5"],["archives/page/4/index.html","633d0f723a9111ed188910aba42056be"],["categories/Git/index.html","bd26515bf6236fa0eac3da91626ad8c3"],["categories/Go语言/index.html","cb9fc6aa3533609962dbe50b9bf0f019"],["categories/Go语言/page/2/index.html","14317f0459c23e6012145c8175af4137"],["categories/Java/index.html","e68a5acdc41df99ae7442b10173e2f62"],["categories/index.html","99c06e6569b1a95244b6907db3ab7824"],["categories/安卓/index.html","508ca0c3b8666ecdb39846433fcacd2d"],["categories/数据库/index.html","b4b301c667491e7bb1803d79f3001e0f"],["categories/杂文/index.html","5de56b7a7b0e5570bb7294104cbb2270"],["categories/系统架构/index.html","05ebc65190c37ae399a406d1021618a1"],["categories/运维/index.html","7dc55d7e89df637703247d8745ab4e4f"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","f6a80c932be7477bb8f5e5152032b644"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","051c2ba7883eda38abfd6bfd6108718e"],["page/2/index.html","e53d51b51657d88ede5053b02625671d"],["page/3/index.html","fef918493709fa17643e124d699476a0"],["page/4/index.html","9d294fb6528bb85a4dda28767d965535"],["tags/Android/index.html","73b8b4f529a81391d06a32b9f9dfa9cb"],["tags/Centos/index.html","d07f47cc42a56a5b6f229c419d8ad8ed"],["tags/Docker/index.html","068d9117a0111df45894b398670908ed"],["tags/Gin/index.html","cc80c40b291ff6f6afe1f12de35592c7"],["tags/Golang/index.html","3b040d1ed8a27e96f119a987217ce20e"],["tags/Go语言/index.html","6879b4499546f15ba9d1c0f03ddd3e5a"],["tags/Java/index.html","b098b1617d240ec30f0ca8cb38dad731"],["tags/Kafka/index.html","2f3c6404a42702f76e0f818b0feec630"],["tags/Kotlin/index.html","ead154716637bbb8fe591cbe671dacb6"],["tags/Mysql/index.html","f37110ae2b26fdef9348e2f88da773cc"],["tags/Redis/index.html","9609f8ae0165d1fe966928a058894165"],["tags/Ubuntu/index.html","419b16df03189fcba2314e25191b9355"],["tags/index.html","cbf183fffd6d8de68279b64703201bae"],["tags/安卓/index.html","d4569c08dbb1d0d0a9905a40d941c88c"],["tags/数据库/index.html","21b91c25e4c71679f5009961005818bb"]];
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







