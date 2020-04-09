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

var precacheConfig = [["2020/1905944.html","9d1a2d56e4abde3a319cc48129137adf"],["2020/1946C60.html","c3b12f5f9e24da6425d1a4043c54cbdc"],["2020/1B5R51M.html","e7d1a826a520451098315db9a097ea4a"],["2020/1DYJH86.html","c66aa3deb1cab9ecf73557755129d080"],["2020/1FFNQNE.html","71831e1879b6b064113973aadb8f03e7"],["2020/1X1JYEX.html","ce73ffd47ec082625724dd0ebe9dcf9b"],["2020/224PAWM.html","57a393a1b627e97b4fe738c1af2f642d"],["2020/22X88J.html","a73316878049e42b0a63be269f671c16"],["2020/28VBK0S.html","f503d9c6d2aadf9b96007be43feda052"],["2020/2AATQ45.html","246e81e66e30ac0c565d26abed78e280"],["2020/2B45ZZT.html","e4968dd9b9adfbc133e11f25911370c1"],["2020/2CJ51QS.html","926c38352707c085a9d90d342ec57629"],["2020/2EQXTDP.html","5dab1c259d84fc764cb06dbf924eecae"],["2020/2QV9ZH2.html","fa2c7d2060a061e1711b16f6c523e3e0"],["2020/3C7YZGC.html","cc0872a3be1a3a6e97f808fe1cc53ed8"],["2020/3EG8DED.html","5179b156ace37ad6ac81f2d2a1170fa1"],["2020/3F6APKH.html","748e9ba5befbe91e8faa6e2f484bab2b"],["2020/3HG63WA.html","0a48f29614b20c05a3b309de5c87c8e8"],["2020/3KDWDKB.html","2e7b8d746110949b3eabc2a61fa6a36f"],["2020/3N2EAPR.html","257eb9f1795fe9fcb9ecb6cce5f81e4d"],["2020/3R57ZBM.html","a4a2e4bf3ce80d2c6ae46f552e742422"],["2020/3TRNKGR.html","87084b48f0915189eff8a64ef09539b1"],["2020/3VJHNG4.html","faef802db193a68860491ee99a9baea2"],["2020/73XEZ7.html","4d5a3bffbaa7d253d4e630427fe96da0"],["2020/CEEV6W.html","39065687bdbc61a443ff6626032b55cd"],["2020/DCQQ72.html","34354bb0202fbc156b7c27959069461a"],["2020/FC7S68.html","b3d7743c5b0e0927f47e542efb5e9967"],["2020/FEJ92A.html","277ffdad066eddaf8b30ffa62baa1b39"],["2020/YE6KFM.html","9b4ab79f076facf3cc513cc25ea30c2f"],["2020/ZP5TVN.html","1fce9c44ded3e5d4f89d3e0266b102db"],["archives/2020/02/index.html","d2faa3ca4cab1f89843a132e432c09c6"],["archives/2020/02/page/2/index.html","da4f397fc135459e8aa60a926595749d"],["archives/2020/03/index.html","acb088a35323bc21fcb7bca7bd8c98ae"],["archives/2020/04/index.html","db4de72548a15917dd21b18842d3904e"],["archives/2020/index.html","5a0febab73e4d81aa014cdad800c9c52"],["archives/2020/page/2/index.html","13bb54b1257cef2b547257724fb4a5e2"],["archives/2020/page/3/index.html","555ce24fa1f0d9b2ca32fb4cb3af76ae"],["archives/index.html","c8885191bd204269d6f3aecf18f29749"],["archives/page/2/index.html","7c20445f3a7dfa361c584e865be650b3"],["archives/page/3/index.html","4257da27a8ddf76bf23e0a50748867f4"],["categories/Git/index.html","a33cd79bce0eee692f734e311d404b26"],["categories/Go语言/index.html","9b7fa2068bcabd0595a0bb4a8bea14df"],["categories/Go语言/page/2/index.html","20e2eec155faa0e32a281f91dfa2308a"],["categories/Java/index.html","95102d2c5c8a9d4486e66f7c0874062f"],["categories/index.html","6a6311acbe15fd118f9ef2fbfe5f33c3"],["categories/安卓/index.html","6122432cb63cdcc460087041e2dc9ce2"],["categories/数据库/index.html","34189e55e85361a7cbd432ac99303a0c"],["categories/杂文/index.html","5372dde219d30038943d901b4ca76f14"],["categories/系统架构/index.html","087a890c01946ecb9283b31f8f00bcc5"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","bb97981d3603e7a59007cf4587926433"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","6d450ea1abcdfcbf938326937949ac89"],["page/2/index.html","504fc76a6603804bc374ddfba0090253"],["page/3/index.html","720fe5cfb909540f9541c076d6284298"],["tags/Android/index.html","945dd81f5ee71ec3a239eb989ddc2af7"],["tags/Centos/index.html","b2aaa31cdb68c7a540a1f1689bde9d30"],["tags/Docker/index.html","53e244317d911599ed5a023c32923577"],["tags/Gin/index.html","ce19260f2a06244a8a92471573991275"],["tags/Golang/index.html","9055b33175218dbee5a53adcad295232"],["tags/Go语言/index.html","f2b34c50f0e65d855ae441946a920e90"],["tags/Java/index.html","1ee95a2ce197a0871e11878d932f7299"],["tags/Kafka/index.html","24a09f5539463f5456c6abe7093ab0a7"],["tags/Kotlin/index.html","a08cbef9c8421aabfc78480029c42247"],["tags/Mysql/index.html","a952b56d247dc730663d140472d1be2c"],["tags/Redis/index.html","b89bebb0bada304db12dc3a57db00084"],["tags/Ubuntu/index.html","906e6836acc24cef62b63bf991a9f16e"],["tags/index.html","a19e5b87b69d1ca78177a590b4a67917"],["tags/安卓/index.html","9e5a02f49f2d3e8cae9db0e33d3af679"],["tags/数据库/index.html","18f5146be2e686c9ce6dcb603f613ba9"]];
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







