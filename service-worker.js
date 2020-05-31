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

var precacheConfig = [["2020/1905944.html","3fff995247101db115ed4adfb81d10be"],["2020/1946C60.html","4290a05f3bb3d13c5855c81c9cce3641"],["2020/1B5R51M.html","ea5b36c4b5010eabe805a56ab76afafa"],["2020/1DYJH86.html","6d1b5d1a0fc22c4f277f6d656713a42f"],["2020/1FFNQNE.html","671fc831250c504963fbd1d88d452984"],["2020/1M052X8.html","480c071e10a1764c992190fb9a6d5b3c"],["2020/1TTQ6FN.html","38cdb58b21bef5f8acb149d219225f5a"],["2020/1X1JYEX.html","0c1f0edfe5f99eba6f04978f49a6bc19"],["2020/224PAWM.html","7cb335e1c4e6bfb5399e13c3f7d662f7"],["2020/22X88J.html","41587a760c3229646f733a0717584a2d"],["2020/28VBK0S.html","9736338fdc01c2b99c89c7ca70558c1e"],["2020/2AATQ45.html","d923fcc805d95c20054e776b7a01a740"],["2020/2B45ZZT.html","f50f897ceb5c30d0e98f06bd75ce1772"],["2020/2EQXTDP.html","b501c82906706c51f063ed453b1bee36"],["2020/2QV9ZH2.html","003da016fbf263276592019e8ec6ba29"],["2020/33KJF3Z.html","36d07cd84c9891a7f3a03057e11beb57"],["2020/3EG8DED.html","416020265be2ae784c401382b435d456"],["2020/3F6APKH.html","7f70c0ed99d1299e36108b169f32049e"],["2020/3FRKW3J.html","ce2d31aa63322e1f405727aa07eff2d6"],["2020/3HG63WA.html","02cb7993df403216e71d120a47cab626"],["2020/3KDWDKB.html","82d8dd533bd1fcc978a9c3d2203890cf"],["2020/3N2EAPR.html","24473bc0f997525c83e6bceb60bd6157"],["2020/3R57ZBM.html","de2fbe308bdd292c74d8f0714cac54e2"],["2020/3TRNKGR.html","e88c5df7261d1a6462ccd497df3a35c5"],["2020/3VJHNG4.html","832db0ffd78cc6eb1ed080b91da50ff7"],["2020/65SJMT.html","873c4633bc5fbe41a4a2ef2bfe74c9d2"],["2020/73XEZ7.html","4a7f469dacb6737a6074da0017afbb19"],["2020/8BV7RJ.html","190d16b7c1377545fbec7a974e331b0f"],["2020/94VGB6.html","e54cf187067f79a787ae4f4b33ce8872"],["2020/CEEV6W.html","8c7d176efc0bf1b218be2fc0c79d42e4"],["2020/DCQQ72.html","1ca4b788c2c1e5d9ae7e464ed51797e5"],["2020/FC7S68.html","d90bf724ac04254df4401048e847b4a7"],["2020/YE6KFM.html","435a9dd343773cf4cc91b2f9171b5a2d"],["2020/ZP5TVN.html","ceb2f6c75db63c151fbd866e341cf4b7"],["archives/2020/02/index.html","6578134844f3002eca63fda9c1f2eb34"],["archives/2020/02/page/2/index.html","b35bbb6933d59d6d1fa6097563515c84"],["archives/2020/03/index.html","2ea96dd9ee2922df48a14c03778d07b0"],["archives/2020/04/index.html","11996aa8812432c1cf40dec6bf317852"],["archives/2020/05/index.html","38d0489aeb1eb776d400ac372bb53d0c"],["archives/2020/index.html","1df7aac241ce1a2f99e2dd38ca2f2342"],["archives/2020/page/2/index.html","20752d07d439c91f9e7c65c78c888fd0"],["archives/2020/page/3/index.html","a28d651295d45afac1e814306d415460"],["archives/2020/page/4/index.html","b5ed4c2134f700690696b90c98a3e550"],["archives/index.html","d05b214307af18dba441954954a155ce"],["archives/page/2/index.html","122bf5143469a6a0e84125ac96e15ee6"],["archives/page/3/index.html","3aaa3468ffa48c7b590202af744e2f14"],["archives/page/4/index.html","d328bb7ee780dfa3ea50141a4f17cfaa"],["categories/Git/index.html","6185eaa30fc80acbc273761bfae24f27"],["categories/Go语言/index.html","1da2efa35f62ad2745245e0c7116ff6b"],["categories/Go语言/page/2/index.html","852cf5b1efef18122f4f2a21be0ff9bd"],["categories/Java/index.html","b2cda23f8cbaaea6c1972863b5ccb1e0"],["categories/index.html","a8469479e92f46b3440672c5461003f6"],["categories/安卓/index.html","fa4d59f9cbd46b057b9a1abdae8e1852"],["categories/数据库/index.html","666de20d07c597f68f7d5fd08c487fdd"],["categories/杂文/index.html","a5cf22cadec6d93065ac5addcfbcee62"],["categories/系统架构/index.html","d772480827c577f2495f1efb0cea5bed"],["categories/运维/index.html","cda584b8ae6149dcca1e6ef67d5bc421"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","65fbb8dbaa9ad9db7682273f12286967"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","34f4e9526183e54941d2639014622fb7"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","cd7663783ac6958478c1904a9d68f093"],["page/2/index.html","36b8c6a6c88f163060e76376177e4111"],["page/3/index.html","0c5114fb06bbea52cac67e1ea1ed74fb"],["page/4/index.html","bd28f61cd13274fab0f825e5c526daa4"],["tags/Android/index.html","bcbcc71a8bc9e7fd288f855a0cf41248"],["tags/Centos/index.html","d3f79cbcf6a285c45b8a274a96c2d86c"],["tags/Docker/index.html","6371e6d34d5f5805789fce6265da7686"],["tags/Gin/index.html","0605cd81ceb65e24cedcb0543993bd5f"],["tags/Golang/index.html","6a2701064cc47dff585947967bcf4b31"],["tags/Go语言/index.html","9bac579a1ba1ec1d0187fbdeda9d5748"],["tags/Java/index.html","6c178dff223fa5b0d8c4e25f4c89e5eb"],["tags/Kafka/index.html","46ed66696e93d0d236920385b5662e79"],["tags/Kotlin/index.html","ce3441364b0d0ec3b6f43b845c48a23a"],["tags/Mysql/index.html","9cb6ce21c8cd5d72164c82255dd267cf"],["tags/Redis/index.html","1ef6cfd5b6691d96546015ad66eefb38"],["tags/Ubuntu/index.html","ed09f65d1b4cf8ace63bd9c34cf919f4"],["tags/index.html","f7ce7ac088f392b671c0d6600c208ea8"],["tags/安卓/index.html","4a08986f6368520db8c9b72067a0e661"],["tags/数据库/index.html","f3e215bfb0c3bfb4e5ccb5411e2a16ec"]];
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







