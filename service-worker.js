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

var precacheConfig = [["2020/138BRG9.html","ff9ce3d72701b0b48aa050edebd45cdb"],["2020/1905944.html","76db4ec70558ebdcf2fdbfe4e820f9af"],["2020/1946C60.html","b7adf6b1ca8b33d4b59bdc9862496ad1"],["2020/1FFNQNE.html","2ad7298f44662e399bb19f50c121ac08"],["2020/1M052X8.html","07ba5f50ee7a3a23db413dfd77019958"],["2020/1TTQ6FN.html","19af1a41a34793ef97c16ff6cdeec78a"],["2020/224PAWM.html","db90ffe888083264c31de23c0513030f"],["2020/22X88J.html","19faff5c0149c3a068372c46081fade0"],["2020/28R01SH.html","aeb2724898bcea32f285935d1cf7d06c"],["2020/28VBK0S.html","589321c73ccb7298bed9cfa43f90f42a"],["2020/2AATQ45.html","8001ddfce112db6e68cacdb8c34ee6a2"],["2020/2B45ZZT.html","4c8c1d79538aba3a9b1670f2a4b1a1c1"],["2020/2EQXTDP.html","604af0f9ea80a0b2ea78e5ebe3a23991"],["2020/2K0XH5G.html","543045b1ca68b43ca1b5d0ced92967bb"],["2020/2NK8Q7N.html","09b95716fc3ba8fb8547f03162697e49"],["2020/2QV9ZH2.html","eeec38c4e2c451dfe050494ece19ff40"],["2020/3EG8DED.html","46aa3b76da1cbeb796662d85fd9755a6"],["2020/3F6APKH.html","3b327453cad4fbae24814af3bb678c31"],["2020/3FRKW3J.html","51d0fac0ea0479c664665d6079cd7d4d"],["2020/3HG63WA.html","e67a5bbef5b1eacbdc74de8f8e4f1194"],["2020/3KDWDKB.html","ddb48f0e960ed6db83eb524e1651f2bd"],["2020/3N2EAPR.html","0bfdfdb37a0632de40aa396579122812"],["2020/3R57ZBM.html","8f95fbb7b96273444147c4ef1f3a334c"],["2020/3SHXKRR.html","e5c15c0b0c4d52a2bc337fd601e776b7"],["2020/3TRNKGR.html","8b4bedc2588797848841037cc9cc2475"],["2020/3W9CXS5.html","a4b6736fb83472cf3f1dd553d194b803"],["2020/3YZQVNS.html","89bf62c24b9b38bbfca5b658f3fb0dbe"],["2020/65SJMT.html","d7d61f4d4c889a84964274e3dadbc626"],["2020/73XEZ7.html","3aa231fd4dd3ce1c6b16ca383dd6a018"],["2020/8BV7RJ.html","d59a9ea22b170f4d7d5863b75fecec3c"],["2020/94VGB6.html","89b99432c91085c0bb2cb8faccd32ebd"],["2020/CEEV6W.html","fd7d3d258f2d8f5e2028d550aa932572"],["2020/DCQQ72.html","0766eef07727981f6de350ecc3dc2af4"],["2020/FC7S68.html","fbc80bda4c5fac5e1b59cad8c4950cc6"],["2020/VBR358.html","61653cf7793beefa4d426efd08a6ff14"],["2020/YE6KFM.html","9943928dd6ee48542c76eb043e11a380"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","22c43fb4c7fd6248b30b24dab59845e5"],["archives/2020/02/page/2/index.html","b59c83a0d1c3ad15ffac4b63fe01766c"],["archives/2020/03/index.html","451bbb8aa4a0197f7812bc2c49e93432"],["archives/2020/04/index.html","598125bae8b00c2024410d7529018dd6"],["archives/2020/05/index.html","21fc821763f886911d572face031c8c3"],["archives/2020/06/index.html","fad4a7cd303c26058b8978419b8e8c36"],["archives/2020/index.html","196a43fc6e327401cef41776046294d1"],["archives/2020/page/2/index.html","1711a75d4bd387da994cd285999e197e"],["archives/2020/page/3/index.html","cc0e6771e1c58aabb6bed6b8002088bf"],["archives/2020/page/4/index.html","93296c31840fd5b7797cbc5571161880"],["archives/index.html","980ea64ed839f3c57b6005431b0507ca"],["archives/page/2/index.html","63d2cf3365ebde387ce371bc0ff0b9dd"],["archives/page/3/index.html","4fabfe32fc35d25ea1d2244b8f98c26f"],["archives/page/4/index.html","012dea599be2171a2b3d1c237d1d8067"],["categories/Git/index.html","4d82871a0ab91983fbeff25f3941c3ce"],["categories/Go语言/index.html","b43f75176a391ba8c591a96412463122"],["categories/Go语言/page/2/index.html","558829bc0b620c10cf75530e17858fd7"],["categories/Java/index.html","dff7a3796f6455b00aecca8494ce2b14"],["categories/index.html","2545f4e73f58601dcfcc8896bae8fd9e"],["categories/安卓/index.html","333b36eb374f4243883837205a40b23b"],["categories/嵌入式/index.html","91d8b4bdfcbc7bf39433ff1166887f8a"],["categories/数据库/index.html","fb2ef9ae6ec3c4746f283401a7556ead"],["categories/数据库/运维/index.html","f37172f47a95d99c333a4e5905c7798a"],["categories/杂文/index.html","71548c5543db2850155520989f54fa85"],["categories/系统架构/index.html","337333f82308893cda2052c95380eb54"],["categories/运维/index.html","a1b93fd3108af6d9caf8b19f7f26780b"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","ea3cc4716aaf34911b2c980bb115bac3"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","1571210b5d399f3bfd60d2ba48a69316"],["page/3/index.html","3afcdc56731ea307047dba7f6775b163"],["page/4/index.html","f32c029d1971f2bbaf9f5c5d48fdb242"],["tags/Android/index.html","5a001bce847e751078f065226bb865b3"],["tags/C/index.html","b3303529e66e1f934dc15f01aff65794"],["tags/Centos/index.html","224261d1ae69cb30002ae892851e9a20"],["tags/Docker/index.html","d4e8417803ef8aa251c94745b3c2ffd5"],["tags/Etcd/index.html","7825e4c0f0f71036041bf3fdd5537e75"],["tags/Gin/index.html","9fa21ae4a597fd5f4f3e9429dce35790"],["tags/Golang/index.html","c876507e89a10993966530748ff0d95a"],["tags/Go语言/index.html","c162f5189eb3678e44c339dea92b0177"],["tags/Java/index.html","79aa197685e97ffba6c1d09dd8f39916"],["tags/Kafka/index.html","0117dfa438e5d6bb7b6556d8e58f607b"],["tags/Kotlin/index.html","a1899aceaa0739c0528f3f6fbadc3562"],["tags/Linux/index.html","5cb7927ab2a4735e928c295c91af63dc"],["tags/Make/index.html","c9b09f58dd23cb8928bb6e5471ed7aa2"],["tags/Makefile/index.html","9151c40770168e338c9d9bef19739ba3"],["tags/Mysql/index.html","61de1ba9b57a60fac82a7693f8da9620"],["tags/Redis/index.html","8f1502f14220d870e783e8e5dff438ee"],["tags/Ubuntu/index.html","50384a25c134a3f3b9be4a6bc592ff3b"],["tags/index.html","57ab16fa04b4ced8f2f4e63cd617904a"],["tags/安卓/index.html","2ecfe9afdaa7fcabf9727e1275d8f80e"],["tags/数据库/index.html","52535d6739969ae4ef6414eef4dcfa25"]];
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







