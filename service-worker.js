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

var precacheConfig = [["2020/138BRG9.html","1e951aa6007d9371d2052cf2863fc9e2"],["2020/1905944.html","a2449bed52fccef7ee560968ea2b6ce7"],["2020/1946C60.html","7cd187f7eb870db68faf3a95604b6866"],["2020/1DYJH86.html","a9593b895cd6c70b1ef854adc785c42a"],["2020/1FFNQNE.html","7d91ac406d249b446fb9755c1640a126"],["2020/1M052X8.html","7b3da2e9b985c7019cd15d5d5af18a11"],["2020/1TTQ6FN.html","6814785da05a358b2730e450f1ec29b2"],["2020/224PAWM.html","7a06725f25ea0261f4463ac3a538224c"],["2020/22X88J.html","7e6c62db11c6ec3e0873ebe43b7df101"],["2020/28VBK0S.html","f53906ab0f4ec357296a8ed2f675a0de"],["2020/2AATQ45.html","cee2a3e0fb61711e3e89baddf6afc2f2"],["2020/2B45ZZT.html","addba52cc11f03315e7f14de6456f81b"],["2020/2EQXTDP.html","a957fc330605208af67517cf064af575"],["2020/2K0XH5G.html","b628a172208284e34795e6bf0b274028"],["2020/2NK8Q7N.html","82e214aa38d426d9a3f99ebb4c40ba9a"],["2020/2QV9ZH2.html","3afc4f90ce2ca3b97b5bb0faca23803c"],["2020/3EG8DED.html","3bb88b5220ce3f7ffa418835273ab2db"],["2020/3F6APKH.html","b46ed624e9d84bd626e7137a4ca42c07"],["2020/3FRKW3J.html","0baa4d1c30b27b929f951921ee043fa0"],["2020/3HG63WA.html","5ea758dbebf3a9ca62d713f84858fc8d"],["2020/3KDWDKB.html","021661f4b4a1400538d70c09b14a0ff6"],["2020/3N2EAPR.html","139b9d047cd649c32881913299b98f00"],["2020/3R57ZBM.html","c339e916aa2f35d180b3a157cb98d03f"],["2020/3SHXKRR.html","82d341ac25b69be082a7382c80a8687a"],["2020/3TRNKGR.html","3fdae6ff92c0360f35120f8d149c1302"],["2020/3W9CXS5.html","c5ba4e7edb16b5cfbfc53e4f3b213b41"],["2020/3YZQVNS.html","d6e994cc63eee499fdaa1fcfe224225f"],["2020/65SJMT.html","40c1f8ddff8ee26a0d8d799ab3011dea"],["2020/73XEZ7.html","4e9d67d96a4db278202eb27f2eb6aa6c"],["2020/8BV7RJ.html","8a073e034059addbdfc4c2e2dd560f78"],["2020/94VGB6.html","016eabda20e3351b0873013fda4141f9"],["2020/CEEV6W.html","f15052bd2ac94ce99b7a58796e0de81b"],["2020/DCQQ72.html","3fce0b3f7f339712289150cd4f3f389d"],["2020/FC7S68.html","797757711ff2198ba50732dc9cd898be"],["2020/VBR358.html","67a17efcea3d89bcccd000096ca5e551"],["2020/YE6KFM.html","c8c61765b0d9fda9dc6bf0406b67ae5a"],["2020/ZP5TVN.html","88e4a32e1599ab14d32363137cd54da6"],["about/index.html","abf1915bd3565a5eb24de578b1b0b523"],["archives/2020/02/index.html","0544df438b4176910e9cc02addc6d127"],["archives/2020/02/page/2/index.html","0364c73c3192ffed95455bfcc396c081"],["archives/2020/03/index.html","ab769975870e9859927c19904d113213"],["archives/2020/04/index.html","20c1aa48b8527e4b5cbaf65438595742"],["archives/2020/05/index.html","d518ca9085356722f9c2c1b87d168217"],["archives/2020/06/index.html","fd80e4da2bdbdcbae2288206b84a8ad8"],["archives/2020/index.html","b3b24f6945ecd547299e9d85ff240c07"],["archives/2020/page/2/index.html","4efb17ae92424e7b531aa20dca5e4523"],["archives/2020/page/3/index.html","b64a6062dd9aaa68563433cc97c33bfd"],["archives/2020/page/4/index.html","b8083c46b4204749a9d0e854904ef31b"],["archives/index.html","7b46b4524d84d58c277772d0dd1113e9"],["archives/page/2/index.html","faf26926a6f95b6c89858312b39c94f4"],["archives/page/3/index.html","e48727660e68e48bb1b5a6b6b0191e76"],["archives/page/4/index.html","6383cb887e96430abd97019b5e3596c3"],["categories/Git/index.html","b2cc295af4bc5a930e70fb2c60b705a0"],["categories/Go语言/index.html","58167728d57622fa4917e6e1f6a5a83f"],["categories/Go语言/page/2/index.html","ae94cf69e3735a969d3f464fc582aff4"],["categories/Java/index.html","2aa309da2792968504d394c2ce307641"],["categories/index.html","e754abc0befb160ca4300bf096c8ca7b"],["categories/安卓/index.html","e118181dc5664076d3eec821c13b4515"],["categories/数据库/index.html","c6b93693e83b1bbc7d3920a5368ff522"],["categories/杂文/index.html","7d8c1dd432986ffffa0f627e926b18ac"],["categories/系统架构/index.html","5ac2385f73aeaadc2c549b4db486030d"],["categories/运维/index.html","5aefe0f135796c7af21c87558f1169f7"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","3a94a7ca36d589c1839c28fe1a82e9f7"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","dec428200f13f71d6510348242d6fea4"],["page/2/index.html","d6000745190e69a28a1a85de256f0ac0"],["page/3/index.html","346c1f3f5d90358e2f5bc3134804af55"],["page/4/index.html","197f16f20d06b6c9ddcfa38b18e29863"],["tags/Android/index.html","25abbaed8a2eaa7e8d986173a2446b72"],["tags/Centos/index.html","38f1d49f8daee3de0f8a5dac0f242f53"],["tags/Docker/index.html","b731ab53b34c227f7cf63aaabb62a615"],["tags/Gin/index.html","030211ebbbbd54f6b79495b38bbabfa7"],["tags/Golang/index.html","bf9867691af476240091c324ad542481"],["tags/Go语言/index.html","d0eb161e37c5fcb90f1fe2b663e5c23c"],["tags/Java/index.html","db70b68552269679a1bd016a7f3fbe61"],["tags/Kafka/index.html","131e6a8ba84e75bad2223555de6ddefa"],["tags/Kotlin/index.html","5183e6f1ae6ea527eaa75a6e8c08d6cd"],["tags/Mysql/index.html","6f0284bf4907ee38e9d17030f78214d6"],["tags/Redis/index.html","111e69fd717c21208f4c904455242cd5"],["tags/Ubuntu/index.html","4c498943bc97908618a9aa9c8bfaaf3d"],["tags/index.html","3fc9266d4832db24b46f86216463bb8b"],["tags/安卓/index.html","25d99cce590a0599631ee292edfa0fed"],["tags/数据库/index.html","794b304fdbe7c8092b5e6e0fec72c0d9"]];
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







