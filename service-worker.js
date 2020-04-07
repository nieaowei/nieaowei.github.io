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

var precacheConfig = [["2020/1905944.html","f1c96d027c690feac403250e077305b3"],["2020/1946C60.html","490e8b1d90c9dd38c37c0b50595f8d76"],["2020/1B5R51M.html","17d10fee68c1bd31870946e3b71013bc"],["2020/1DYJH86.html","0daafeb7e742917941e2fbb43f62ad5e"],["2020/1FFNQNE.html","14ab3b46917b1f1bfc236f1b1c248101"],["2020/1FRBXF8.html","17570bd497ec1157ba4ab51b465697dc"],["2020/1X1JYEX.html","cc45d2ca37d8837cfae10e1090caad7f"],["2020/224PAWM.html","d1366359f22e9ccc5daefb5b84bc4d3e"],["2020/22X88J.html","7c926aa052c747c1f9c9da17c97b83ad"],["2020/28VBK0S.html","043f1886865de61eb1fc9917814a0306"],["2020/2AATQ45.html","b34fb6d397716f82ad943dc53542367a"],["2020/2B45ZZT.html","cf46b4cd8d5f10bad4aaed1f97d1bae0"],["2020/2CJ51QS.html","d57812c208ba9d7374671cd24125fc22"],["2020/2EQXTDP.html","47f4b3a0b6cd02da629cf7295de6e02b"],["2020/2QV9ZH2.html","f286e4c29546620c4eb9ce44dc790947"],["2020/2ZN7WDK.html","36e812a3d102717fea715cdab728d62d"],["2020/3C7YZGC.html","553a80c4ec6a9b12d532ae0e612db3fc"],["2020/3EG8DED.html","e990610c4d9d5614806fd49fb6e08562"],["2020/3F6APKH.html","6f9b3f306b6fc7f7e9ea78a64d790621"],["2020/3HG63WA.html","cca9ca858860c7ec1a1e0c6c18b001e3"],["2020/3KDWDKB.html","1657953f1f3792ff12946947c83331e1"],["2020/3N2EAPR.html","da670dcc356ebeebc181e2d16d6ae44c"],["2020/3R57ZBM.html","85a74eecde4b878b9adc0e89db2bf0df"],["2020/3VJHNG4.html","e9f339e950ddd2a9640e432156f8c2cd"],["2020/73XEZ7.html","31eea17192ffe5ef3f6d81d33e6cf3af"],["2020/CEEV6W.html","a9a596b029706993002fb0707c7e5379"],["2020/FC7S68.html","e2270b5f962c7658bdc2706384e4a546"],["2020/FEJ92A.html","7e9c22138c2ec19b729479f00cf4f291"],["2020/JD6M9P.html","12023222e062122fa845ddfc8c2fa84c"],["2020/TKXNFM.html","7b06cfaa575929a9c9110cd25d2a18c3"],["2020/YE6KFM.html","fb884ecb44cc12d06e983b41fff0fedf"],["2020/ZP5TVN.html","87cdec177c63447714c3bdfe9f4892f6"],["archives/2020/02/index.html","a0ea6e10aa5df9807e152c0c3ef510b3"],["archives/2020/02/page/2/index.html","4f81151a6708d3e6c1e1a76699d51dd5"],["archives/2020/02/page/3/index.html","de783fe16b28e3fcbbd87e958c4b1a32"],["archives/2020/03/index.html","41ba121de7f7fa4629eb1adfca09a824"],["archives/2020/04/index.html","80befb88259be4cb5b3fb4d7005f3c63"],["archives/2020/index.html","de874b4e4a3561d7a6617110094a7c9f"],["archives/2020/page/2/index.html","332182e7be111b7665d56d5d673094b9"],["archives/2020/page/3/index.html","9d1ec6f93960e87d0454aabdd221937c"],["archives/2020/page/4/index.html","dc63210b5c4b6f0cc24fe396097c78a9"],["archives/index.html","e21948777948963c02f21f39353ed9c4"],["archives/page/2/index.html","27abf12ba73fe64e98a6edb5ee91c64c"],["archives/page/3/index.html","dd4f8f675aad419f24b0aab39e568909"],["archives/page/4/index.html","d76f5ed792e12f7269790e22a8b99f1f"],["categories/Git/index.html","6b011b19a979dcf640a719810c7f564f"],["categories/Go语言/index.html","e6b0c1c05bb56b24831040073a5b6f11"],["categories/Go语言/page/2/index.html","c280dd89b7be642b6273622520e95bf7"],["categories/Java/index.html","170bc7f03ff7769bf2502442eea1eac0"],["categories/index.html","c396c3f97abd70e50c4cb86f78e6b64c"],["categories/安卓/index.html","fcd22bdc66a3133ea5a0b17dd52045e1"],["categories/数据库/index.html","10fd73aa3d716059db7e7917d9874a91"],["categories/杂文/index.html","b6eca775e3dc0629fe70039590c9382f"],["categories/系统架构/index.html","22bd24efdbee7fd13d1d2c8647374832"],["categories/项目/index.html","656dfeaed36d55ae3f2083ace3758a0d"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","99223e3a8547afae9778e7d0b38e54d5"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","4e9a7fd954318b6df157ea494f9054f6"],["page/2/index.html","7a4095ecb072a983760a21278ed9f98a"],["page/3/index.html","240a2f19161757458ec9f6637721bb69"],["page/4/index.html","23ce84546bf849471f6f77503284b369"],["tags/Android/index.html","eb0765bc6009d0d4a2b2cda237f99a4a"],["tags/Centos/index.html","371904213e4422c46cd0a74c76cd28d5"],["tags/Docker/index.html","f2c18a4625ca09dbcf3b0fbbb7fb32f1"],["tags/Golang/index.html","c96cfd8bb0b8af6cd4a9878a789dbaa3"],["tags/Go语言/index.html","4c3480c9f5ef344dce402f89d0dd10f8"],["tags/Java/index.html","35b689f8e651a1654d8dda9889fcfb97"],["tags/Kafka/index.html","4892695a900a580d04d53a0a639811c0"],["tags/Kotlin/index.html","d5f331098cad1072459361cb84538c9d"],["tags/Mysql/index.html","a812380c5c9752f183da600706b07165"],["tags/Redis/index.html","2293fdd88bf3b4042da56ac1c5f2fa85"],["tags/Ubuntu/index.html","a541d0bf85071927408eca4c881aff02"],["tags/index.html","35e7cfa75c2f7b863772633f4dc3a7b0"],["tags/安卓/index.html","8d6db9b74f75075cddf5c19df085f0f9"],["tags/数据库/index.html","476d5b5486328abf7b8ce7d1568f60b3"]];
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







