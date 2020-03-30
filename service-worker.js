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

var precacheConfig = [["2020/1905944.html","09ab6f50a52528b9950f2304005fc8bd"],["2020/1946C60.html","e283c38402dcd07025ae1b04c6e8f952"],["2020/1B5R51M.html","e169521a4a52391bd8838313384e81f9"],["2020/1DYJH86.html","2a5fe12d5f35646c206a2efc915a2bc7"],["2020/1FFNQNE.html","9e9427c167e3ec44694986b91704958d"],["2020/1FRBXF8.html","18ccb23b419cc5c7a2a4adc0d67c744f"],["2020/1X1JYEX.html","dc90c4b8308eff75817118b6149c6eab"],["2020/224PAWM.html","51348dea921a531ae3828b6c468bfa54"],["2020/22X88J.html","83dd60266977c6322641a1ca64957943"],["2020/2AATQ45.html","9ee49a2a01059d224bc93bc3de569faf"],["2020/2B45ZZT.html","09ac79bdc2d5af84e8069575d740922d"],["2020/2CJ51QS.html","290477e5f35b02519f86be676f1140b5"],["2020/2EQXTDP.html","851a262aff03ce1758c875f7aa207b9a"],["2020/2QV9ZH2.html","227676b344790994ea5e585983f524a0"],["2020/3C7YZGC.html","9cbab1694feeacda03a9a03ebd09126e"],["2020/3EG8DED.html","446cbd6f3e54b64db228e6dca7245dff"],["2020/3F6APKH.html","b34f5e24b47b7701384076dfcd48184e"],["2020/3HG63WA.html","b63a8f3bca3b684765e456c98ace191b"],["2020/3N2EAPR.html","6d267e7f30315d90adce0b8ffe0ee691"],["2020/73XEZ7.html","a62e7b42c4cbe238ccfc43ae526d3a23"],["2020/888MMT.html","34633ec4acace1509810c45629e33eb1"],["2020/FC7S68.html","81c3227d0e10967cd9689cd34dd98586"],["2020/FEJ92A.html","ae9b036e5ab11027c2d16e7ef8dc5930"],["2020/TKXNFM.html","8346688446b3cac8f54b4aade84989ac"],["2020/YE6KFM.html","d5bba149093f3d3742bf6eb4375d3b2d"],["2020/ZP5TVN.html","64ec6b3c204d3ecd999d5d59859958ac"],["archives/2020/02/index.html","c16839baa9b3d345158db01817b3b0cd"],["archives/2020/02/page/2/index.html","83e33441fe60c5651ed11b25499741c1"],["archives/2020/02/page/3/index.html","0aa56544a6f7801bc1ea10fd8322a8d9"],["archives/2020/03/index.html","70ecfabaaf76d3cf45d3bac2403c3d15"],["archives/2020/index.html","825f3a31b90e138c3a6df403823ee408"],["archives/2020/page/2/index.html","cd38a4ae0d227d33feb90dfbde0f4bc3"],["archives/2020/page/3/index.html","8120518882a417052d77cf501a9298d2"],["archives/index.html","fd96c588a7464deeb4ad9455107ac814"],["archives/page/2/index.html","f817b317096dacae271406f893f34825"],["archives/page/3/index.html","cbfcd5059710519c68047a6e5a83b68c"],["categories/Git/index.html","861077d77385b5d7bf34bdcc924fa080"],["categories/Go语言/index.html","f93eb77904a6b70e05717295a25c7124"],["categories/Go语言/page/2/index.html","3f29870fa66fc61ca1eb68fa6bcf84b4"],["categories/Java/index.html","6c2f2bd188adeb50998ad04fabd41f9d"],["categories/index.html","fac6475eb660c0a8728a4a9fd53323af"],["categories/安卓/index.html","2149345533b760e0c1452f8d0c09aa3f"],["categories/数据库/index.html","61cb3b32471ca7fd05873b7f3d722e88"],["categories/杂文/index.html","3e70bfd72387b18b29f2d65f63090b00"],["categories/系统架构/index.html","5aa1dee6cc43ad828ebdba809515fe5c"],["categories/项目/index.html","eac2ddd5ec5f7a03484611fbe91c74a5"],["css/index.css","8c2dff56608bb9d307d9cea7270a353b"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-144x144.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-152x152.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-192x192.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-384x384.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-512x512.png","e38a4810ec87c280381bff6d3071783a"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","e38a4810ec87c280381bff6d3071783a"],["index.html","7835696b84d59cc512926c3aff62027c"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","ce1a4a37db8f72e7eecef92801e49b7a"],["page/2/index.html","cc1a14c8f1bb58b93282ee65c7f24307"],["page/3/index.html","f2aec65b18f5c1eaec3140593e20acb2"],["tags/Android/index.html","51990ea30ea1ed7889b8a8b44bb42c45"],["tags/Golang/index.html","b97d816cfbe236d6e6680851d20edc5f"],["tags/Java/index.html","85301b10ae8df33ede079e54300a0188"],["tags/Kafka/index.html","94ab162f8457e1e1c74581694a976c63"],["tags/Kotlin/index.html","15149f88b770f663ffc7cf41ebd8f9f2"],["tags/Mysql/index.html","dcae2f321f6afe9cdd1e0d2460745afa"],["tags/Redis/index.html","f2b91c98db8a290d36dc06a597e48113"],["tags/index.html","4ca32527ef79812d2dca1dd96c2b9286"],["tags/安卓/index.html","150ad4b164bf5474906c56c479a7eae3"],["tags/数据库/index.html","6b98d095b92b866dae649cf6b74ea3ee"]];
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







