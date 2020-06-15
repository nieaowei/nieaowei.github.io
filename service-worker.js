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

var precacheConfig = [["2020/138BRG9.html","cb6c5e071d396d59bdd824346e0f2e3e"],["2020/1905944.html","8b80f2798f0e774fe7191d91b32a9bd2"],["2020/1946C60.html","a72a1c6bc5277d8bf62e66602447eb0b"],["2020/1FFNQNE.html","21eabf874a83431514f044889aa7d64a"],["2020/1M052X8.html","a82f68b7f953689703df4fdf4385c3be"],["2020/1TTQ6FN.html","63d8cbf8b0f9e0398e31c796f729347b"],["2020/224PAWM.html","3696189588d7f82766010724fa782dd9"],["2020/22X88J.html","141ecfb93fd8549dad056b589140ddca"],["2020/28R01SH.html","bf6408fd6d8f2308465db080fef96a59"],["2020/28VBK0S.html","cc844a76cf383c484cb513719ee171e7"],["2020/2AATQ45.html","32c3a98450968b25f220a167df0fa4e9"],["2020/2B45ZZT.html","48199dfd6c5db504d1f14327065c8913"],["2020/2EQXTDP.html","ad0b17d89fd33e068bfcd6d266f37c50"],["2020/2K0XH5G.html","b929e925b85adcc2e1a1623031d005bf"],["2020/2NK8Q7N.html","8e6ca7b1971be35999fa7c773a9c8bac"],["2020/2QV9ZH2.html","06cbef4d1dda9f08c5dab91f4afb2c37"],["2020/3EG8DED.html","65d85efb39062670b4c81561fc6d8352"],["2020/3F6APKH.html","e1078c3a14969509ce8480dfa8039544"],["2020/3FRKW3J.html","92e00763b655349e282f87e0729f5f08"],["2020/3HG63WA.html","d848aac659c1072abea20d4614cb02c1"],["2020/3KDWDKB.html","7aded74db3ceecc7bee10e9a3f710583"],["2020/3N2EAPR.html","55a96d238068a8a3037e8c079f47a86c"],["2020/3R57ZBM.html","c2b16beba34abb2edcae1f0d3b36b782"],["2020/3SHXKRR.html","05a95854925dd2ab7010b196e0af3316"],["2020/3TRNKGR.html","67f80acfb0a68c7215019b6cc066906a"],["2020/3W9CXS5.html","8502de5d88ae4fd478713124726f6336"],["2020/3YZQVNS.html","fd9cc343327d9b594b0bf006b6496865"],["2020/65SJMT.html","3fe572ac4db698a39d9e4b42fc8e218b"],["2020/73XEZ7.html","d2ee3466fe4fb35010d7b8fc5f188e0a"],["2020/8BV7RJ.html","a062199e22f46bfaa682d2024b137723"],["2020/94VGB6.html","5e025b3848ebff174e8fe3fc2e2c9f69"],["2020/CEEV6W.html","5837fe49451e8e7c6df0d5f4e4aac930"],["2020/DCQQ72.html","e52c03ef906286f33935d8e7c517fbe6"],["2020/FC7S68.html","c74a295ec1bf3e1aeee4a5a7d222dc6e"],["2020/VBR358.html","2442a5f81f683afc040f80f7f244fc2a"],["2020/YE6KFM.html","084441a56c29213a798a4dea5a2d0311"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","d12816c337f96f8891df5ac3be03f12a"],["archives/2020/02/page/2/index.html","68faeddc5debeb7254aea5b965b54f3d"],["archives/2020/03/index.html","f5bbefef941efcece913161f97c4fdfd"],["archives/2020/04/index.html","060e766c168bd097d8fc0cd0b15b0b47"],["archives/2020/05/index.html","fda0c78927491e8f91865f6b248f2586"],["archives/2020/06/index.html","6636da76faf5185f769c3862321a2a50"],["archives/2020/index.html","7c4384b6fbd30ddc47717f39cb0d8150"],["archives/2020/page/2/index.html","4ae8bf5a033929e0d92480cef4787ae6"],["archives/2020/page/3/index.html","5fed3d8898be18828301305c13c99b13"],["archives/2020/page/4/index.html","67599a57361e9ea9e304b9bab6c0c175"],["archives/index.html","4e4ac03312a215664d8115f3d4e6c316"],["archives/page/2/index.html","495901006fa27b36e6f0baba90088321"],["archives/page/3/index.html","38f216c7c7ee694ef7b3aa6557ba8b1b"],["archives/page/4/index.html","319917d6279cc4c5bcba1f033c2d1203"],["categories/Git/index.html","ff65fa06e108df47ece83be06a65bc0b"],["categories/Go语言/index.html","a7ed5bf151e6aaa8cc1b94d35041fb86"],["categories/Go语言/page/2/index.html","0b29a24908f43f634813bb05a2b07dc1"],["categories/Java/index.html","0686b19b84a9764098598d8740d874bf"],["categories/index.html","6dc91fa17586f4be0695ed87f7d5a4c0"],["categories/安卓/index.html","259dea366a097b6609946d826ec60dd3"],["categories/嵌入式/index.html","603f73a26c1b8552c6ecd033653a4026"],["categories/数据库/index.html","cacd2d57d7566f1ab04be0a0beea8830"],["categories/数据库/运维/index.html","15a4ee243e0a82c82266319b99573556"],["categories/杂文/index.html","82ea7e4daafc5ca58f9407dbfeb495e3"],["categories/系统架构/index.html","de7426561005bbff03e12de0c54c69a6"],["categories/运维/index.html","914d78a75a2d4c7305728350ec1285ea"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","5a264404b09cb2851019416ae76e45db"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","7b801eee7453a33a3e90ed7588f7dcd1"],["page/3/index.html","960069c0571deed8cfb6dd147377d541"],["page/4/index.html","4968922ef7c4bc50a83578a174907f21"],["tags/Android/index.html","c5e33dc65b69c3d8e83b19e87f5cbac8"],["tags/C/index.html","1ad2f6179d8a36a4dfe253fcda365511"],["tags/Centos/index.html","d66646e348f6d29d47a0332ebf60cae7"],["tags/Docker/index.html","03ca8e88684fed0531a19de17c5c3211"],["tags/Gin/index.html","1aa1eba957c4c077d839011e512fd764"],["tags/Golang/index.html","330ab0bea192edf623407dd70c700299"],["tags/Go语言/index.html","e116692f519b198c6ea991e4be1e1bd0"],["tags/Java/index.html","546132fc059ca5c56bb4fc59389c81f9"],["tags/Kafka/index.html","70b14c145aa507c541ee0ccd1653a055"],["tags/Kotlin/index.html","c6ac30c4363ce0085ad87854dcee4c29"],["tags/Linux/index.html","0d0ee9e7825676b2e44ea5aaaad6a496"],["tags/Make/index.html","d8562a4b7af71a2643830a40fde96fa8"],["tags/Makefile/index.html","3bf6a8f62c9e551faee6bae3474e3b87"],["tags/Mysql/index.html","132a31ef9933ac68f2341357733b8883"],["tags/Redis/index.html","b1f2c82438664fe8320990f8c9de5180"],["tags/Ubuntu/index.html","690d84536066ac709b8bc4379d48001f"],["tags/index.html","cceab499f9c6115403f4a8ee92db5c66"],["tags/安卓/index.html","4378323b9aedad762b75e145f1d7ecbd"],["tags/数据库/index.html","ba295ac4228b5aa607217e48b8fe4409"]];
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







