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

var precacheConfig = [["2020/1905944.html","110efa85161456fc8f891b68f113fabf"],["2020/1946C60.html","eafd9cd12b99465acf2888ae067f6637"],["2020/1B5R51M.html","67d36bfdf000c2a11672da8fac03639f"],["2020/1DYJH86.html","cf98de5923b25eb7fe1d98b00bd25342"],["2020/1FFNQNE.html","dd88d2c260a69ca8f99d77c7765bf860"],["2020/1FRBXF8.html","7a31b5635f77a7f1232410e02fb5a42a"],["2020/1X1JYEX.html","fd1c16747501f5e0d312c568b55c6989"],["2020/224PAWM.html","e942c55c23a7d47b7f35e4d50926485b"],["2020/22X88J.html","65d4090473046ae87094bcd0a5e3577c"],["2020/28VBK0S.html","4867d958fc7dd089e9b7a1eab5f85c5b"],["2020/2AATQ45.html","a35540faa593ca77670567df5282a332"],["2020/2B45ZZT.html","096a53596d26c0ff3997d7e767d50b29"],["2020/2CJ51QS.html","3dfcf47e159bcdf10b7a26b67d26da0d"],["2020/2EQXTDP.html","d444ecf9f124eeb6d491ff7932572a60"],["2020/2QV9ZH2.html","f15384c14e3e98447f7e630d107b355b"],["2020/3C7YZGC.html","7759e862b66be283a54f66bcc721bbde"],["2020/3EG8DED.html","0ffb9205c5bdb8a000ac3a23a17ff875"],["2020/3F6APKH.html","7b9ac8186f3fed13546f2102f37d1b07"],["2020/3HG63WA.html","70ea047b58b2f5e3b553da169c387722"],["2020/3KDWDKB.html","d89176f26eb69631b97d2164afc2e8c1"],["2020/3N2EAPR.html","0446ee832097928cd911c5551aa3cfe4"],["2020/3R57ZBM.html","622dbe28bfd775259cf9768b4d694b19"],["2020/3VJHNG4.html","6d83115dfecea213fdebcf7f48a47e3e"],["2020/73XEZ7.html","c437b26490665683f75152649bc59bd3"],["2020/CEEV6W.html","d3d592c13a9750ebc22b5a6d857132c2"],["2020/FC7S68.html","bc641f9e30212b9b19e3a6c2ac0be270"],["2020/FEJ92A.html","e5e84e63d167ed8ab189bcd72471028f"],["2020/JD6M9P.html","3dec886fbdf29939ea83f700441a6e4b"],["2020/TKXNFM.html","196fe2d142e0d8889a0fd370c07ebfe0"],["2020/YE6KFM.html","4e41036e50f7933ae477a4f749743399"],["2020/ZP5TVN.html","845012cfb7a1de5d20effba9b9fa5471"],["archives/2020/02/index.html","633efcf03f32d186271ac0267a62e690"],["archives/2020/02/page/2/index.html","efcc578cc93fbfa31d3111a591f14ad1"],["archives/2020/02/page/3/index.html","c86cae72d56b479fc4821accae433b53"],["archives/2020/03/index.html","237670a8b0e3cf0b2f694896aa182c8a"],["archives/2020/04/index.html","7cd81f028b909440829ac712e67a50a4"],["archives/2020/index.html","49e87d4b9d7d35e25e84b42fa559828f"],["archives/2020/page/2/index.html","ffd20fac7db847f9ed33a518eea02e7d"],["archives/2020/page/3/index.html","6b245437a08c1655f64b2ce9fcdf58e4"],["archives/2020/page/4/index.html","cec38912df67b72d07b7e40421b7d54a"],["archives/index.html","c24e44e822ee23640b3c2e575abd52b0"],["archives/page/2/index.html","3d3b2602d5f8185477733361706e2ec2"],["archives/page/3/index.html","0474aba3d336835d798c3ddf2d57653f"],["archives/page/4/index.html","075bdb6e9776cb4ee78d81208f5cd5c5"],["categories/Git/index.html","772468aa1fe3442d77d1c6eb47acc35d"],["categories/Go语言/index.html","2962c4d8bb6a5c102c38a4c144350a8b"],["categories/Go语言/page/2/index.html","f6dc8a61a3a0e2f3745bc0bd8d9d4478"],["categories/Java/index.html","66e929dad0dc8bccd0073b875b539b10"],["categories/index.html","143d58eb7d988dde175b195d565a87db"],["categories/安卓/index.html","9066985e993f4fe51e19f65c46fa00a7"],["categories/数据库/index.html","853a5ffb8d83f726de00bbc0cbb5824c"],["categories/杂文/index.html","d0530c987e67589ab32ea3658f630a02"],["categories/系统架构/index.html","37c52ab02883b24e0f7ac32ee73dd2a0"],["categories/项目/index.html","b14675cf3cd1bb47847f26f0a288220d"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","2d6b0e2d06fc96724e7dc64af5dc584b"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","345219c24ab3d2de3fa8006a60d8795d"],["page/2/index.html","16cea2c451e0e81ceb19826b6a4db56e"],["page/3/index.html","b3bac695cb5790a4c32f4378dbce9a87"],["page/4/index.html","3e2420f672b212b3f57466b5f8aefa10"],["tags/Android/index.html","76353a77182cf38fa6efb33604c1f0d4"],["tags/Centos/index.html","c5ee1ee704207003fe98638b69740981"],["tags/Docker/index.html","c943f1255bd044ff77f4547ae0f2deec"],["tags/Golang/index.html","774a12f3533fd70ce6766c3ff27ed00a"],["tags/Go语言/index.html","ffd7a372f6029bbbc23e2500e0d2be29"],["tags/Java/index.html","943d83070051cba7dff737e783321f4c"],["tags/Kafka/index.html","0b09305a770891d0f064048a2bf990fc"],["tags/Kotlin/index.html","f2aad9a192aba855f913fb592bd54095"],["tags/Mysql/index.html","db197c7710bbebc7c775a47ee8b5fef5"],["tags/Redis/index.html","961158642e918a452b58b5269e3b4653"],["tags/Ubuntu/index.html","a72a531266cb7dc368bec61d17ef04c6"],["tags/index.html","dbb46138331359c2d0bbcd3501dce793"],["tags/安卓/index.html","2200e45d0e758120c288e9a1adb1b2a8"],["tags/数据库/index.html","d4383f9fbf3ef4c89a37c36f1f3dabed"]];
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







