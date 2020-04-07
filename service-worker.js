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

var precacheConfig = [["2020/1905944.html","64db8004612a1a76b96cd25218041997"],["2020/1946C60.html","a759016e3e65b525c5e5e72adbd3ec7a"],["2020/1B5R51M.html","fd64e1b06df4e1c38050d97b6938a049"],["2020/1DYJH86.html","5edcdacb9e482f53dcafe2405d03d901"],["2020/1FFNQNE.html","ea763e22aa7934de132e5041539b0b80"],["2020/1FRBXF8.html","47309bc8a105505e2086172346bf31a9"],["2020/1X1JYEX.html","666f570deb7e8bf062682e4ebe218225"],["2020/224PAWM.html","3cfe2a8de9081e0ea666af1f69af6169"],["2020/22X88J.html","c77192d6be78d733520c85dc9cae5618"],["2020/28VBK0S.html","caeac5cf458179e3b8921012dc9d0a98"],["2020/2AATQ45.html","43be2032555c23aa15a2de163c0d0e22"],["2020/2B45ZZT.html","48ffbdc1b303290bad764a823da3d65e"],["2020/2CJ51QS.html","3a41967184397a56f6fc6a03a319f54f"],["2020/2EQXTDP.html","d33b74e10219d8558d88d35b10e6476c"],["2020/2QV9ZH2.html","2433dc8ca19f5b7e61369ba0c726e689"],["2020/2ZN7WDK.html","9c4dd85774c756b781eaef7f8e2b6407"],["2020/3C7YZGC.html","1358e25cbe5d63603a996d1dde5ba0a4"],["2020/3EG8DED.html","3c851fb404467bf4a282f806e8fb6faf"],["2020/3F6APKH.html","22bb5a69daa8fb877cd56549242f98a1"],["2020/3HG63WA.html","4472ae642bd0171ec3e9aaf16477bb86"],["2020/3KDWDKB.html","527f170dd4eefee03946da381cfca10a"],["2020/3N2EAPR.html","039882d6340368730ed1338d198b2db0"],["2020/3VJHNG4.html","6d27ad65c3e164a5856ae762a6eb7855"],["2020/73XEZ7.html","0e7eb59f58db2deb8134866151acf75c"],["2020/FC7S68.html","b5f5a428543b9e6027bc66579c2bc4f2"],["2020/FEJ92A.html","4e484ec78b44ccf700a169ffbef99f67"],["2020/T9NBDC.html","97cf30fe56e4b6b89f9e6a5ae23ff522"],["2020/TKXNFM.html","f15db20002143e653d6b07af76dfef7e"],["2020/YE6KFM.html","33efb8ed0829e4749b9266c44cc0ca4f"],["2020/ZP5TVN.html","05079ba83ebfd518ededc2b4f2247864"],["archives/2020/02/index.html","8c74168126292faf4c943b86a8648ebb"],["archives/2020/02/page/2/index.html","68fe86e09c44273ed8741d2e8ed44a26"],["archives/2020/02/page/3/index.html","f486a663ea14acfa700a4ce6a8a854c5"],["archives/2020/03/index.html","aaed534b031d45359ed9e9831d2ad6f3"],["archives/2020/04/index.html","86210cf1ae0a03032fe8480d193a88dc"],["archives/2020/index.html","976a4f44f95d0bbc988ffb5b3af4c653"],["archives/2020/page/2/index.html","4017e99db4e7ece6c0c7248c5e62d946"],["archives/2020/page/3/index.html","e95c9971923a598e55915e1afccf2270"],["archives/index.html","4029449fe84689433125927b371a3938"],["archives/page/2/index.html","571652aacdfc10e27b60355384cbb9d9"],["archives/page/3/index.html","b4f531f603cd9248bd2eab83d863ce4d"],["categories/Git/index.html","54673b9700436257eda59a72b370db14"],["categories/Go语言/index.html","5911fbca8b4c0d4607dabb40b87f778c"],["categories/Go语言/page/2/index.html","50d679b697908805eca76693d87c271b"],["categories/Java/index.html","0864b9193d00e3cc52c118dafc495da0"],["categories/index.html","3394dbc744378dabb9d1e2ce95f3b35a"],["categories/安卓/index.html","7fdc39bce16cdbc1c7594d9f0b6749d3"],["categories/数据库/index.html","0b0ba19f182ff8a73816e826f4f3d83e"],["categories/杂文/index.html","35e5fdc9521a0cd0cabddc4e1968471d"],["categories/系统架构/index.html","a8edc01e7bca2023a85a90ea7ed1dafd"],["categories/项目/index.html","46bc4bd510135b86a320980c337d6dbe"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","bd80bf9ed5797a19c9b07bbe65c3a57a"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","15855c7b34618d333d0814ca3536bb90"],["page/2/index.html","461706134fdf306ad807c557f817a483"],["page/3/index.html","ca628a14d8e482d8d5810290f2c71503"],["tags/Android/index.html","3b41b47187da9d5fe121b8240f2b7b3d"],["tags/Centos/index.html","bbf529650d9bdfaa202446716c4c2bf7"],["tags/Docker/index.html","79af6aa2b735fe6c72ce2f1376ee654e"],["tags/Golang/index.html","eddf55893ace416cd10f18e1c35fdbb6"],["tags/Go语言/index.html","0249314c03be5f56b5e2cdfe1d8fc14f"],["tags/Java/index.html","ca7d94bf2951fc4db4fe89dd74237f1c"],["tags/Kafka/index.html","07bce792cf152ddb198c38e57544aa01"],["tags/Kotlin/index.html","bcf01a57044906ae4629b5bc63b4cd3d"],["tags/Mysql/index.html","62c6db35de76d31c0e57d918f8e2a6e7"],["tags/Redis/index.html","248e08fcdd1bc2b2548235ddcab8b798"],["tags/Ubuntu/index.html","8cf5e721dd34dcbf4d715102aa35700d"],["tags/index.html","9fe06678bdcff09b2168a8e4d28da76a"],["tags/安卓/index.html","f53948c67212141fe58097b26c39e9e4"],["tags/数据库/index.html","957ae6f77807baec5f8afc458df58e70"]];
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







