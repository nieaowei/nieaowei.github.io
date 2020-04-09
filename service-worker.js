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

var precacheConfig = [["2020/1905944.html","794f2074b9158c73ed16ac712d9504c0"],["2020/1946C60.html","64c59054a1fccb04a8f1e0f82fafcc51"],["2020/1B5R51M.html","2a977645121c018e630957b3d829e91d"],["2020/1DYJH86.html","7183bf1e8aafe6b652b50ca24a0cd166"],["2020/1FFNQNE.html","cb69c64f10ddf8cfcde063f5d0fce75c"],["2020/1X1JYEX.html","b90dec97f4246bc024c136ec9055cd40"],["2020/224PAWM.html","24ec1bc83c09a207189c687d1c94ed59"],["2020/22X88J.html","b9198987f7cc537a21f6f83748792091"],["2020/28VBK0S.html","23b58e0bc3f75cfae29fba78c7012858"],["2020/2AATQ45.html","20706e7e2614c56aa7043248277b4c67"],["2020/2B45ZZT.html","8fc53ba1cf71f6df9a074a0cd2d551a4"],["2020/2EQXTDP.html","c074c49d20f8ee2e3dba83aa5b1c3257"],["2020/2QV9ZH2.html","36800dbdc859d37aed838da1a3fed44b"],["2020/3EG8DED.html","fb4105841c4c696cf77f0b164ed3e0a3"],["2020/3F6APKH.html","fcbbbd04a0eceab3b84b96e3ac8fb60f"],["2020/3HG63WA.html","e30b28013060f13e21e2fe2db1637cbb"],["2020/3KDWDKB.html","42d9f2f77b2ebcd8d6f3e56418572513"],["2020/3N2EAPR.html","c41bcabebad7b6361eab284b1818729a"],["2020/3R57ZBM.html","b2e5c4a402467d482da383b4169b2ec0"],["2020/3TRNKGR.html","0908f3a9c9cfcd3b2369e2b9d13abdfc"],["2020/3VJHNG4.html","aa50c9a71663c67188c6162f14e9028e"],["2020/73XEZ7.html","4c0652061f1df4f677cded4261db057c"],["2020/CEEV6W.html","12119150b52584bfaecb6550da1c5bb0"],["2020/DCQQ72.html","a7306316abbb3702da215bfa9ac2fa74"],["2020/FC7S68.html","bc324b18f3755fd002b85608bed4a8a7"],["2020/YE6KFM.html","a2b97d0f689520f8b609cd075a2488f6"],["2020/ZP5TVN.html","f1ff019083e7437f784b9d8068353939"],["archives/2020/02/index.html","18e19db0a3ae4629ba69bf414f655fab"],["archives/2020/02/page/2/index.html","e04c2fa42d2435838529bffcd6f9c695"],["archives/2020/03/index.html","49f7a6e97820ab6559bb2e42ba2980fd"],["archives/2020/04/index.html","0a7bae0efac0918396401da65d2a84dc"],["archives/2020/index.html","d5a95d36403841db7b68e904d714be64"],["archives/2020/page/2/index.html","f999dc604fb0048c3fa65456690ca397"],["archives/2020/page/3/index.html","c7d8b518b6641125ed60791f8a6f79b5"],["archives/index.html","4111a864e4d8a249706b25750c939aab"],["archives/page/2/index.html","ab8e86c4718028bbc7246f6e0329797d"],["archives/page/3/index.html","908a2e6252ea7a9a587d0791097e2a27"],["categories/Git/index.html","b62347fa126dff6020764aad2cb90d1f"],["categories/Go语言/index.html","60c174d62dff750f1a9aeb751fcb9b17"],["categories/Go语言/page/2/index.html","5344a266fbaa2f98f5afcd864fe5a0f0"],["categories/Java/index.html","b7345a1ec412be84995bb617d568a420"],["categories/index.html","b167b674d854b795ffa8c43423577b8a"],["categories/安卓/index.html","85ed4042598912f45a8e80d3e8bd3554"],["categories/数据库/index.html","820f11975c7527227a2f22da8a821e86"],["categories/杂文/index.html","ab4eef8379b68b71da6acc0dc6215342"],["categories/系统架构/index.html","94bddb12044bb23f39fae7ea2ede38f6"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","4ea8540416c6a45cb3925a65de480cfd"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","60c7c9b67bc8090cc5bb83dcb337cc32"],["page/2/index.html","4b38143fcdebdd149581965039605182"],["page/3/index.html","29f5679e09875efa887825835090e1c8"],["tags/Android/index.html","43760da964124a65d3b10259495fa214"],["tags/Centos/index.html","938e5fdbab84890353c176ee6f76e51e"],["tags/Docker/index.html","039165c204f2d01098d578e2c10ba0a1"],["tags/Gin/index.html","dfae62cdb5b91e237dabb1cd8bdb042c"],["tags/Golang/index.html","c4cf35875f62be9cb801436db3634d74"],["tags/Go语言/index.html","03f94c6d381614af5d034b635670e0ed"],["tags/Java/index.html","416ad2fa055b3beeec013df37a76f7ef"],["tags/Kafka/index.html","81392e2f23a38805cd80da0b0782dd69"],["tags/Kotlin/index.html","ffc892435418c78e8a3525c0806503d2"],["tags/Mysql/index.html","7e6eb457719fa24568e7af611496adc3"],["tags/Redis/index.html","a39cd2931c72f51d3ef0b8e5a55497f3"],["tags/Ubuntu/index.html","97037aa3e8cf9a6d1f141ce255d231c7"],["tags/index.html","158abd47f6dd445d20b848071de4f81a"],["tags/安卓/index.html","63fd76fb8cf072cefebb550b5b845a7a"],["tags/数据库/index.html","d505ac86af4992ac043b51ba18372006"]];
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







