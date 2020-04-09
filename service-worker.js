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

var precacheConfig = [["2020/1905944.html","9d1a2d56e4abde3a319cc48129137adf"],["2020/1946C60.html","c3b12f5f9e24da6425d1a4043c54cbdc"],["2020/1B5R51M.html","b4cd953c3c8b14e161027975cc7a984f"],["2020/1DYJH86.html","c66aa3deb1cab9ecf73557755129d080"],["2020/1FFNQNE.html","71831e1879b6b064113973aadb8f03e7"],["2020/1X1JYEX.html","6ddc382895043116901c498555ae6987"],["2020/224PAWM.html","57a393a1b627e97b4fe738c1af2f642d"],["2020/22X88J.html","a73316878049e42b0a63be269f671c16"],["2020/28VBK0S.html","f503d9c6d2aadf9b96007be43feda052"],["2020/2AATQ45.html","246e81e66e30ac0c565d26abed78e280"],["2020/2B45ZZT.html","e4968dd9b9adfbc133e11f25911370c1"],["2020/2CJ51QS.html","926c38352707c085a9d90d342ec57629"],["2020/2EQXTDP.html","5dab1c259d84fc764cb06dbf924eecae"],["2020/2QV9ZH2.html","fa2c7d2060a061e1711b16f6c523e3e0"],["2020/3C7YZGC.html","cc0872a3be1a3a6e97f808fe1cc53ed8"],["2020/3EG8DED.html","5179b156ace37ad6ac81f2d2a1170fa1"],["2020/3F6APKH.html","748e9ba5befbe91e8faa6e2f484bab2b"],["2020/3HG63WA.html","0a48f29614b20c05a3b309de5c87c8e8"],["2020/3KDWDKB.html","2e7b8d746110949b3eabc2a61fa6a36f"],["2020/3N2EAPR.html","257eb9f1795fe9fcb9ecb6cce5f81e4d"],["2020/3R57ZBM.html","a4a2e4bf3ce80d2c6ae46f552e742422"],["2020/3TRNKGR.html","87084b48f0915189eff8a64ef09539b1"],["2020/3VJHNG4.html","faef802db193a68860491ee99a9baea2"],["2020/73XEZ7.html","4d5a3bffbaa7d253d4e630427fe96da0"],["2020/CEEV6W.html","39065687bdbc61a443ff6626032b55cd"],["2020/DCQQ72.html","d0b10b1155656b1f628fb0f69d9e42be"],["2020/FC7S68.html","b3d7743c5b0e0927f47e542efb5e9967"],["2020/FEJ92A.html","277ffdad066eddaf8b30ffa62baa1b39"],["2020/YE6KFM.html","9b4ab79f076facf3cc513cc25ea30c2f"],["2020/ZP5TVN.html","1fce9c44ded3e5d4f89d3e0266b102db"],["archives/2020/02/index.html","6c93724233c455c6c8eb97fcec66528e"],["archives/2020/02/page/2/index.html","6e07937c6413e194eeb989fa29ec7e47"],["archives/2020/03/index.html","6a79da6e5a18715d3eac7f6d2ecaffc7"],["archives/2020/04/index.html","8d360177d239955e42d707fa6f277d23"],["archives/2020/index.html","52c2a11332410518c89a30044702bfdc"],["archives/2020/page/2/index.html","f03c67dbf97c5eb1dd6ff8f7e3a5ebcf"],["archives/2020/page/3/index.html","95543e92eb50f2a312e704b0697de4b3"],["archives/index.html","553101c3bbb2095ab5b0dd9cf653fe24"],["archives/page/2/index.html","2b21fc8f299fa0a0260c3cd25ab15ce3"],["archives/page/3/index.html","d52f34727254f48f77aec40f898b4768"],["categories/Git/index.html","b27d2c7d0e33d48edeb7ccdb1604fea2"],["categories/Go语言/index.html","45d1434f28fee3e132eade30b5e832d0"],["categories/Go语言/page/2/index.html","340c235cb6713b50fc1a2ff9c412eca3"],["categories/Java/index.html","3fb69773429f303a60f697bb9c1b5914"],["categories/index.html","2122d0cfc3b5b2d1ddf9e89e3d84aee1"],["categories/安卓/index.html","46337d5fa9c28305b561c973c241317d"],["categories/数据库/index.html","bbe56cd3b0e4d8644596a3ccd8d30122"],["categories/杂文/index.html","0258938f73db31b58cdb22158fb36090"],["categories/系统架构/index.html","0fe7dc1a603cfd3df373e80551b1479b"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","1d3539dfd35718ce6878e2ca9be6e35a"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","e1e9784bd598bc9138c8df2797de43db"],["page/2/index.html","984de60dfecd6beed099496296a1e10e"],["page/3/index.html","c51c69cbed29c8f57f6916deff8aeaca"],["tags/Android/index.html","5f859de1e2e20d2c4972e9d1b57ce4eb"],["tags/Centos/index.html","d14876c7fdad1983bdda9589f506d08c"],["tags/Docker/index.html","76c64bebd0bc62adc28b0db66fb1b2b9"],["tags/Gin/index.html","7a180f80b422f90691ebf9a8ceff9282"],["tags/Golang/index.html","cbf0f6f6e0b29ce48887874e5d3e499d"],["tags/Go语言/index.html","e093ca249e739791cce3020fd33b6a31"],["tags/Java/index.html","57af671f8579ee78304faeb526f503bf"],["tags/Kafka/index.html","e4566799ab725a99f324798410fdfbcf"],["tags/Kotlin/index.html","d4a58b1ea525e20c322ad574de180d65"],["tags/Mysql/index.html","a6e8a88fb862144725af0f3d955bc4d8"],["tags/Redis/index.html","e6a877253ffab2682546c5777885e016"],["tags/Ubuntu/index.html","5669d61a685216e901ddf48b190073a8"],["tags/index.html","f0d8996071ce84fa5db509832a1db8af"],["tags/安卓/index.html","6d223a84423597f37b8dd7d15818bb68"],["tags/数据库/index.html","c6f1af72062e212345d2fee95a9cb23c"]];
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







