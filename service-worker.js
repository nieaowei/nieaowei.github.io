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

var precacheConfig = [["2020/1905944.html","67056473e535a4738e881dc371632549"],["2020/1946C60.html","35d101b64dd8e43106c3e88ede09d093"],["2020/1B5R51M.html","91a64cbb15fbe76f10fa36a4d9382b0f"],["2020/1DYJH86.html","acb5023bc51f6bd3384cd16101d760d1"],["2020/1FFNQNE.html","fab05b2e6ea67f44ee4c8377a4ead3b8"],["2020/1M052X8.html","43a7cb4f8f0592c6e2484a5f4f7421dc"],["2020/1X1JYEX.html","06c1e4505a3debca8262ecf2a7a6a060"],["2020/224PAWM.html","1e5f15f653103087ce1b0fc08e985eb8"],["2020/22X88J.html","fce6877fce15300a28562e9d2037077c"],["2020/28H96K3.html","d584c2799721e09cf2df22eff164cd62"],["2020/28VBK0S.html","9950d47cf2f287f6d821e99a7eb227d4"],["2020/2AATQ45.html","c06b8e2b3baf935613a4b91cf090620d"],["2020/2B45ZZT.html","9ca63baaff7533aa2c0ab12054175004"],["2020/2EQXTDP.html","176e6fbf500d17b050e674532957d221"],["2020/2HQK026.html","0d94715a41966d3dbe9ca34f2f41bce4"],["2020/2QV9ZH2.html","f48c73c91ab1fa4340aba4945a34a31a"],["2020/33KJF3Z.html","3a62cb4cd84bfbbeac4b4b7119b57162"],["2020/3EG8DED.html","1eb4c7526edec52af82fe3904774f928"],["2020/3F6APKH.html","562172e071ba614a81fa1b28983750b8"],["2020/3FRKW3J.html","82f8b39b24f0d99d3e4f71f2428e28e5"],["2020/3HG63WA.html","e915e0133958b3de8667633806b29df7"],["2020/3KDWDKB.html","be39379c0ed2bffe3325bc489dc6e836"],["2020/3N2EAPR.html","9f2f809b073036860355f5001ddecc6c"],["2020/3R57ZBM.html","81672e9a63487345fc24017e314d843f"],["2020/3TRNKGR.html","cbc9e2c5742135532e0cbd66341a0281"],["2020/3VJHNG4.html","32d6fa28125d33ff09a7884559448a6d"],["2020/65SJMT.html","4fb4ecb8660d3d4fb367147218189a5d"],["2020/73XEZ7.html","406dd679a20dec1600463cf69bf66883"],["2020/CEEV6W.html","c941c3e2924b9bca011be62d8b40afd5"],["2020/DCQQ72.html","c7adb408b1d7615f1d16e5148a7cc1d0"],["2020/FC7S68.html","e118276b281132c862e9f412b6e8d25d"],["2020/YE6KFM.html","dc5d35b1cd9ef6041a68708bdb1b962b"],["2020/ZP5TVN.html","31e2fc960e71639ecb60526c33245106"],["archives/2020/02/index.html","2b3ce5172376179837082ee7c6a9a651"],["archives/2020/02/page/2/index.html","01d72d0c76c3a927127d16303010cfb6"],["archives/2020/03/index.html","b2c3df55e1409fdaa29c6a4cbef62b78"],["archives/2020/04/index.html","a1d70417f28913f3a0c3f9fa5bd3619c"],["archives/2020/05/index.html","9d7584364d8f066f93d961091ea41166"],["archives/2020/index.html","b6697c5844bc82ef300a6b3c152230b1"],["archives/2020/page/2/index.html","aa6af74ee1191f27a6fdac434f7d2ea2"],["archives/2020/page/3/index.html","54a8f15538d03a9255cca59dac9e4719"],["archives/2020/page/4/index.html","57fae83465812945dd10a6c7dad9edad"],["archives/index.html","8a3083ecccc293220b1f4fd38e5078d7"],["archives/page/2/index.html","12affb7c61c836d96bc755b4b9ad4248"],["archives/page/3/index.html","90a67ad8d5396d98a2d6c042948f3ab2"],["archives/page/4/index.html","c1ff92a9fd6bbee7c5dafc6d95bee2ff"],["categories/Git/index.html","257434436b9f665b7167408ac4b529e0"],["categories/Go语言/index.html","78f5847281d95e2736b373cb093885ba"],["categories/Go语言/page/2/index.html","08b1601283a9e54f07244598cefa73aa"],["categories/Java/index.html","f1e6d4cf24a439d39cdb6138cd8a6a66"],["categories/index.html","a3e7c085b2cdcbbbcaa031f7a0895a9b"],["categories/安卓/index.html","a9ff95ff5770f3629437ab1a3411f0f2"],["categories/数据库/index.html","9d1911d6138bba8219ad10a50b4ea5c8"],["categories/杂文/index.html","4173b93683d9f1a4e1e6fdc7dfaf2914"],["categories/系统架构/index.html","03b2318ca86fc5dbcb27fa924d08a88f"],["categories/运维/index.html","fee79bd6563bf16ba2f450b9244e7c41"],["css/index.css","fa923511fc4f4cf6c60868dc62bdd254"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","3f1cf05ef6eddd8299fc7c85ba529a5c"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","be9778a45aaccbf4535d849695f7daa0"],["page/2/index.html","852e2ff43a4c4742bc6070410d719b69"],["page/3/index.html","aa219cff087f9991fb93521d6190b450"],["page/4/index.html","93336b64b7265ce207a95fb5b81bf556"],["tags/Android/index.html","f094cfe028140dba907da5aa53949a31"],["tags/Centos/index.html","36ce6f6f2f1e1a3d96e33108c534a83b"],["tags/Docker/index.html","c11f0a83cdf59afa94b18761ab495ac5"],["tags/Gin/index.html","e3f0d064801ee6e728d79c6b15397e9d"],["tags/Golang/index.html","6c296d9347a27d46ef9d2e152309e6d4"],["tags/Go语言/index.html","4836ef696cfd6363114f9fd4e3b83317"],["tags/Java/index.html","1003407506aa58ca7dff4b8f7efff8b4"],["tags/Kafka/index.html","bdb67b21f3270830bbdaaff1fccbd435"],["tags/Kotlin/index.html","229ec121c7301bb740fbff1137d8e890"],["tags/Mysql/index.html","236a33b6109f4bc0782253de2062b726"],["tags/Redis/index.html","a9a1b0e5de6291604e971386ed6dc436"],["tags/Ubuntu/index.html","98d7584cd76744a1e802bead7aaebe30"],["tags/index.html","f37604fd7345663803fd47daefe23d76"],["tags/安卓/index.html","08fc024f97f3a6438af439b8ca47a034"],["tags/数据库/index.html","0f6d873feacf817951687dbf05c0afec"]];
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







