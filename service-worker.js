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

var precacheConfig = [["2020/138BRG9.html","cb6c5e071d396d59bdd824346e0f2e3e"],["2020/1905944.html","8b80f2798f0e774fe7191d91b32a9bd2"],["2020/1946C60.html","a72a1c6bc5277d8bf62e66602447eb0b"],["2020/1FFNQNE.html","21eabf874a83431514f044889aa7d64a"],["2020/1M052X8.html","a82f68b7f953689703df4fdf4385c3be"],["2020/1TTQ6FN.html","63d8cbf8b0f9e0398e31c796f729347b"],["2020/224PAWM.html","3696189588d7f82766010724fa782dd9"],["2020/22X88J.html","141ecfb93fd8549dad056b589140ddca"],["2020/28R01SH.html","a5c756cf7dbe2568d4d89943072c6491"],["2020/28VBK0S.html","cc844a76cf383c484cb513719ee171e7"],["2020/2AATQ45.html","32c3a98450968b25f220a167df0fa4e9"],["2020/2B45ZZT.html","48199dfd6c5db504d1f14327065c8913"],["2020/2EQXTDP.html","ad0b17d89fd33e068bfcd6d266f37c50"],["2020/2K0XH5G.html","b929e925b85adcc2e1a1623031d005bf"],["2020/2NK8Q7N.html","8e6ca7b1971be35999fa7c773a9c8bac"],["2020/2QV9ZH2.html","06cbef4d1dda9f08c5dab91f4afb2c37"],["2020/3EG8DED.html","65d85efb39062670b4c81561fc6d8352"],["2020/3F6APKH.html","e1078c3a14969509ce8480dfa8039544"],["2020/3FRKW3J.html","92e00763b655349e282f87e0729f5f08"],["2020/3HG63WA.html","d848aac659c1072abea20d4614cb02c1"],["2020/3KDWDKB.html","7aded74db3ceecc7bee10e9a3f710583"],["2020/3N2EAPR.html","55a96d238068a8a3037e8c079f47a86c"],["2020/3R57ZBM.html","c2b16beba34abb2edcae1f0d3b36b782"],["2020/3SHXKRR.html","05a95854925dd2ab7010b196e0af3316"],["2020/3TRNKGR.html","67f80acfb0a68c7215019b6cc066906a"],["2020/3W9CXS5.html","4f8216afd89fb48cb9bc0c49f0c83269"],["2020/3YZQVNS.html","fd9cc343327d9b594b0bf006b6496865"],["2020/65SJMT.html","3fe572ac4db698a39d9e4b42fc8e218b"],["2020/73XEZ7.html","d2ee3466fe4fb35010d7b8fc5f188e0a"],["2020/8BV7RJ.html","a062199e22f46bfaa682d2024b137723"],["2020/94VGB6.html","5e025b3848ebff174e8fe3fc2e2c9f69"],["2020/CEEV6W.html","5837fe49451e8e7c6df0d5f4e4aac930"],["2020/DCQQ72.html","e52c03ef906286f33935d8e7c517fbe6"],["2020/FC7S68.html","c74a295ec1bf3e1aeee4a5a7d222dc6e"],["2020/VBR358.html","2442a5f81f683afc040f80f7f244fc2a"],["2020/YE6KFM.html","084441a56c29213a798a4dea5a2d0311"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","daad336f9844a32658903c1743840526"],["archives/2020/02/page/2/index.html","905fe453f793af8f41d85c1f468b1400"],["archives/2020/03/index.html","4e06a45b7216c817953032334277a6c2"],["archives/2020/04/index.html","d3287dd3e44b35da94ca1204b4f2ea96"],["archives/2020/05/index.html","f9bdb4db9c6b375c60bfb79c9d4a29d9"],["archives/2020/06/index.html","3f252c66b9933a02e90577c113b9e78c"],["archives/2020/index.html","474984bc6d5b3dc8f29ebe69be570e5b"],["archives/2020/page/2/index.html","1dd08950d7817801a5c8030cf1a06812"],["archives/2020/page/3/index.html","12078c6122d5154788fe061361b5bc47"],["archives/2020/page/4/index.html","df41ed03fd94801bdac09cbd035176fc"],["archives/index.html","6a7e99703f764f5bd2ecc6b28f92ca15"],["archives/page/2/index.html","bb57c8c1de28b3ab40f1996d629ffc10"],["archives/page/3/index.html","9f739c95adb6faf5c719c56e5a1267a9"],["archives/page/4/index.html","57a454bf7d42ae759bf9fe69b419a4b4"],["categories/Git/index.html","7a29e036c250c6a7cef472c704caa4ef"],["categories/Go语言/index.html","3e5b89fef93908e9fbcc169b2ee3274e"],["categories/Go语言/page/2/index.html","1609a5bbb16cffb30d72d1eff76f912b"],["categories/Java/index.html","e03d6426da58cc2b6fb6c629ac467429"],["categories/index.html","d115da9d6b68b6581597d5accac207c5"],["categories/安卓/index.html","ee2bdff3cc145380a84e01af58b70058"],["categories/嵌入式/index.html","248f99cd6b337b3d7e48f015fdfc1d04"],["categories/数据库/index.html","a2bebdd8cc551475f569eb77829beb94"],["categories/数据库/运维/index.html","7a8b44bbd4fb0ebb1a97e51d4957277a"],["categories/杂文/index.html","b6f02b584da249292a841d934852fbb2"],["categories/系统架构/index.html","feab32184f591117cabf62bb5728210b"],["categories/运维/index.html","61c44779cb42d46b8c85c8f423e8fb90"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","e69c441cc97ed110c3d2cb22369fdc9d"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","a1cdbc1188bd5c17ecc7e7a80d7cdd81"],["page/3/index.html","69aed5e5dc36c0df6bb04efcd5aba0d9"],["page/4/index.html","a9f4f432690750c8017d4b471f38d16f"],["tags/Android/index.html","85948826eb615093efeb028b0f685a30"],["tags/C/index.html","d88e64599d9fba2517da3082fee2bcdc"],["tags/Centos/index.html","6f62b02b0cdf259f98390ab79b7bee07"],["tags/Docker/index.html","2923f8c478560d0d4f77933f72d7022b"],["tags/Gin/index.html","32e7367a55df6bc4656b67abfdd74470"],["tags/Golang/index.html","582bdb886c53d7af128a304fdc6e9659"],["tags/Go语言/index.html","4d3dc4bd6ad673a51816f6b8ffeb37f6"],["tags/Java/index.html","035ae9ba75024d6f1d8f42e609ab772f"],["tags/Kafka/index.html","936cac18d925fefca4aadfb3338bdf78"],["tags/Kotlin/index.html","a25fa5cc2fa51c79e05686ae8f5f6e2e"],["tags/Linux/index.html","70720afc9793513449801352c8cfe9e1"],["tags/Make/index.html","c9c1212266fe54c45bd7a06a317b7568"],["tags/Makefile/index.html","c4ae6e222b93362e10c54b7f1c4af45e"],["tags/Mysql/index.html","9312b8d6e94db83613972070ea4ca197"],["tags/Redis/index.html","ab65aa957567f8cac762cfa85baeaa0d"],["tags/Ubuntu/index.html","2b77d92159c6af85ca303f9ad441d2af"],["tags/index.html","89754a915da93a1ff32664e6ea1a8dfb"],["tags/安卓/index.html","be6a079d8e189c6672f64a798619529f"],["tags/数据库/index.html","0b96ce1f49d998007231f8ba40cde8fc"]];
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







