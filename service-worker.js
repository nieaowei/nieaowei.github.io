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

var precacheConfig = [["2020/1905944.html","83f1a8041208bc5d2e14c12eb982e1ce"],["2020/1946C60.html","617bd0627c95678219c7a49ce6431d06"],["2020/1B5R51M.html","4903d9764888e5c15a5c56ac61b393fa"],["2020/1DYJH86.html","3499504258e74bfb4077f1f690c2fc4d"],["2020/1FFNQNE.html","c2224d2d84373e57eb5fae597afb0f3d"],["2020/1M052X8.html","34d153612cf22737031d996891b208e4"],["2020/1X1JYEX.html","2d3845598bcc9c417cc4be2d7e3544f7"],["2020/224PAWM.html","e54dbeb46c5d80aafa5bec8a5ef2278d"],["2020/22X88J.html","4199c2c7f58329478d9b594e9496e25a"],["2020/28VBK0S.html","404f877a3205ebf20539293e3ca2375f"],["2020/2AATQ45.html","9d72abf01477b9b52e431b311be72ca1"],["2020/2B45ZZT.html","30a4d99221519c15c39f01aeb5764749"],["2020/2EQXTDP.html","f85afb322d371010ce322c3f245022c9"],["2020/2QV9ZH2.html","4effaabb797d343a62d2a274a5daa6c1"],["2020/3EG8DED.html","d4d824379249e4fb6a31d7bf0d55af87"],["2020/3F6APKH.html","fe9cde2741fe4fbae822b3bc5335ab30"],["2020/3FRKW3J.html","03a9b67862a9197a817fc44a0962cdd4"],["2020/3HG63WA.html","63a8ba13dc278004ab48601654a34674"],["2020/3KDWDKB.html","8182631a40675d1e04bd9d6375a64a12"],["2020/3N2EAPR.html","f4ec9b02f815ab6f9a4765bbe20172be"],["2020/3R57ZBM.html","8ce7128007e2ece26bfaa56b2ff37b99"],["2020/3TRNKGR.html","0c1dee08fcddeb6f87261237a41c8b7d"],["2020/3VJHNG4.html","cd05d42357cea7715ee8b1388496bf32"],["2020/65SJMT.html","1916e580ad437ff00ef37306a438e967"],["2020/73XEZ7.html","8923d82f4bee9e86e0f7de5fec3c933a"],["2020/CEEV6W.html","28c178ad8b19e9b7be0d84caa44a6f40"],["2020/DCQQ72.html","78b54d4cf6492f8c4791a68e2940447b"],["2020/FC7S68.html","f8ecf2dbb8bbbe56dfdb2245475e4fae"],["2020/YE6KFM.html","2c6ce7ac5b2ea02eeadcda4abeaa305c"],["2020/ZP5TVN.html","fd4d42b4780807e295cafd6777aefe64"],["archives/2020/02/index.html","27d7eff33865d5621a0aa4770ee32221"],["archives/2020/02/page/2/index.html","3e8bbc206fd6837927825358a85470df"],["archives/2020/03/index.html","afce2f42a5f7e07a91209be987ecfa2c"],["archives/2020/04/index.html","2af33eab376e96ee8260676f2db4fa47"],["archives/2020/index.html","a12be46c2686d21f192c81dbe14d228c"],["archives/2020/page/2/index.html","7fe90020af04bd4ad365fd6aa080fd91"],["archives/2020/page/3/index.html","ee0f8417254ae9a5e2c8cd045f79cb9e"],["archives/index.html","7fbb2eb60fa39c560454577a4723ac35"],["archives/page/2/index.html","a50b917a08e315294ffb422216122e1d"],["archives/page/3/index.html","a4e6241915674dc339e0d2a6ca05a6b8"],["categories/Git/index.html","db8b02ec0828731dcd69ebf34f70aa8d"],["categories/Go语言/index.html","951b071aa160bac376074f4b499d2790"],["categories/Go语言/page/2/index.html","dbbc6bb86d0eece35b95a7aa8b980b07"],["categories/Java/index.html","ec5e8fb86e41bfbfdbc7ee515291d8f4"],["categories/index.html","0eb9183855d9f3704b124b5065c425ee"],["categories/安卓/index.html","775d778dff292820764eb378b567377d"],["categories/数据库/index.html","e3433bb746ef9c399c55652503b50246"],["categories/杂文/index.html","4dbdeb32afc2740bafd1ff673e015146"],["categories/系统架构/index.html","a7f716b91ee7e924fa2102473f7cf6ab"],["categories/运维/index.html","5a34645760da5fa593d4f268bbe23196"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","6d8e61705eca17589c35f969e83ab4d5"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","fdcb853363e8e65503fae1012420cbe9"],["page/2/index.html","4bb6fed5b21fe958f652edb120aa9482"],["page/3/index.html","a18b136baf7442ce3194fc4db6edd7b0"],["tags/Android/index.html","645b26744906caf8e8edd6d9058d9efc"],["tags/Centos/index.html","5b8b6bc6aeaf669e47da03a42e93508d"],["tags/Docker/index.html","44793b29985aa0b5ef5fc7661c2eff5d"],["tags/Gin/index.html","a5847a61992bf63c76ce8b8f5be84483"],["tags/Golang/index.html","77f4b2666ddf2103a603c82d76d39f7c"],["tags/Go语言/index.html","34e2ae617f462090b09d454918ff0811"],["tags/Java/index.html","07e89435707b49aebcc30b3a7935911f"],["tags/Kafka/index.html","a7cb292e3affdd63527ceac23e9df701"],["tags/Kotlin/index.html","e3b41516701c9ce28459c9342d366c6f"],["tags/Mysql/index.html","6bfab630495f75ddbc082a0847035bbb"],["tags/Redis/index.html","658aad064d1553a31a2a3e9e543b8405"],["tags/Ubuntu/index.html","6def3c0c7871c173f3f93cdbb5fa3529"],["tags/index.html","af6e7e46809b7acd21d95e5bc22fdda1"],["tags/安卓/index.html","74b367485c745ee722f97da40ff0a1b3"],["tags/数据库/index.html","f742bd81c539cf5b9dab3e79ee9c4550"]];
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







