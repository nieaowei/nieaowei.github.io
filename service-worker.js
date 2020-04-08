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

var precacheConfig = [["2020/1905944.html","c840bb5c66bbea65f091d6dae915e99c"],["2020/1946C60.html","82593c1c2e902c771dd15958655593b5"],["2020/1B5R51M.html","b28aa6ad3d47d940be67e5750ffcafb3"],["2020/1DYJH86.html","20236f4caae9242be7cef07ea5c43899"],["2020/1FFNQNE.html","506624529a7d3c9aa505f287d5e4c787"],["2020/1X1JYEX.html","0a0b968fe8fec7f5031438eb4110ce65"],["2020/224PAWM.html","e41edfa097c896a999cc99936dc6f327"],["2020/22X88J.html","016c800bb18ac1485fe435a396c3fc06"],["2020/28VBK0S.html","c06f67d04b3b402b264cdbf81f9382fe"],["2020/2AATQ45.html","9277ae9820f5dfd4ee26c0626b9abac7"],["2020/2B45ZZT.html","7d1721bda06cea14992766e6954e7a87"],["2020/2CJ51QS.html","adfb253b0e69201b719ebf1614f42b3d"],["2020/2EQXTDP.html","8b4fae7804c0934980083885187d9193"],["2020/2QV9ZH2.html","ae9db41db210de2adea48b6072ad45eb"],["2020/3C7YZGC.html","2627e89c01bbfdc835335a7c1f57eb07"],["2020/3EG8DED.html","ba96a3cba4f7b9cd1702e07fefcf9296"],["2020/3F6APKH.html","9791b93d5bc8a5dade5cdb47383fd0d9"],["2020/3HG63WA.html","5c6f038fcfe9832d6d872fbd8a8cf723"],["2020/3KDWDKB.html","2ce5d5f73c3158b3f557fc259c145e84"],["2020/3N2EAPR.html","c20868ddf964083bdc15488538c30faf"],["2020/3R57ZBM.html","42cee09e5ff2b39203f51ecda63dd4d4"],["2020/3TRNKGR.html","2b2a1a00dc8b684212e742a949890e9e"],["2020/3VJHNG4.html","c4080a74e0e44fbb4afc21aeeec478fb"],["2020/73XEZ7.html","78cbe5c16ec47ce061d797aa299b673f"],["2020/CEEV6W.html","c73122538fcd6c2d2b889eb12d05866a"],["2020/FC7S68.html","03a6739b1dfbb4d65f54a082f1ed6cf0"],["2020/FEJ92A.html","9225492ae5458641e47ec1d243b4e109"],["2020/YE6KFM.html","760d8458e826088670d2b74b4bb06bcb"],["2020/ZP5TVN.html","18cf9e9d8224b5d5585d65bb1975ed0b"],["archives/2020/02/index.html","4d0d42d844c327417936d04f15e65847"],["archives/2020/02/page/2/index.html","30485e9d0425e357c1c237b2a8cbe37e"],["archives/2020/03/index.html","94dcd49a09f08da46a2f7bae551706b1"],["archives/2020/04/index.html","762f436419184aa29cadf718bb471f67"],["archives/2020/index.html","62e1f9f3dcd1eedffd59fdf43e210be0"],["archives/2020/page/2/index.html","57004413ebe5b5e1678aa032d7e9ac97"],["archives/2020/page/3/index.html","8d7d0b21c9a2dbe4444a9e6b33111e35"],["archives/index.html","65858ca8c7ab964613664bb9886e4d6a"],["archives/page/2/index.html","ab0c2c54f161298572ae1181becd2982"],["archives/page/3/index.html","908dbb06704339c4748c8b73749beb32"],["categories/Git/index.html","adb03bdb506d3a04f7a378eef82d3ed3"],["categories/Go语言/index.html","53b71c52c487d24d61db87801fa8250d"],["categories/Go语言/page/2/index.html","346f7daec396ae1556166d7ddfb5fd6e"],["categories/Java/index.html","847ce223268d8a1e67366f879ef65819"],["categories/index.html","535595bf6b0e7670bafafcf6588bfead"],["categories/安卓/index.html","0f49084feb2a151689c1fbfa57226978"],["categories/数据库/index.html","1d20b0c743fedd9b9dd836effb981661"],["categories/杂文/index.html","4cf76865ee4eb3862531bf1d8f0706ef"],["categories/系统架构/index.html","047cfc3bcf14e49df1847d4644ac5a43"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","b223ad6ed7d9752f88e7f50b97abcc5d"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","6de77bcf83d3e77ece31e6cef5119c8e"],["page/2/index.html","35ab402d3036c0c01d53156f3f3c5321"],["page/3/index.html","f5e3c3db6743fb4954258f97ec8d4f44"],["tags/Android/index.html","60c971d9c4882ae12a8522d6fb942ef1"],["tags/Centos/index.html","8b0701756b3516c096f82a1e12c59074"],["tags/Docker/index.html","48bf1102c47d62b7621dad8ba57b4862"],["tags/Gin/index.html","35e41fbb21a34570e98605b76489deb5"],["tags/Golang/index.html","68808abc685d5996074db8aea3474eba"],["tags/Go语言/index.html","d90d81d2f19b18ed3a69b558fa450246"],["tags/Java/index.html","cad42dbbabf82538d8e0c39b9f3c7dc2"],["tags/Kafka/index.html","e8ce6af07ccd376037b9bd288c87e860"],["tags/Kotlin/index.html","ab755e41efe28465440b0f450119be03"],["tags/Mysql/index.html","30446a95ed10c4510f33b44d7488ef90"],["tags/Redis/index.html","da258bc9c3002bd6855fe700cb58f71f"],["tags/Ubuntu/index.html","b9b4f97c46dccfb8e0b6b3c137b6edf3"],["tags/index.html","9a977383c5593269b0a75a936e897a4b"],["tags/安卓/index.html","7f67fd9a79253835c7a9191a44adf3b5"],["tags/数据库/index.html","dc59b3521c00df11d6216b0613841fc7"]];
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







