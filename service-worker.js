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

var precacheConfig = [["2020/138BRG9.html","1e951aa6007d9371d2052cf2863fc9e2"],["2020/1905944.html","a2449bed52fccef7ee560968ea2b6ce7"],["2020/1946C60.html","7cd187f7eb870db68faf3a95604b6866"],["2020/1DYJH86.html","a9593b895cd6c70b1ef854adc785c42a"],["2020/1FFNQNE.html","7d91ac406d249b446fb9755c1640a126"],["2020/1M052X8.html","7b3da2e9b985c7019cd15d5d5af18a11"],["2020/1TTQ6FN.html","6814785da05a358b2730e450f1ec29b2"],["2020/224PAWM.html","7a06725f25ea0261f4463ac3a538224c"],["2020/22X88J.html","7e6c62db11c6ec3e0873ebe43b7df101"],["2020/28VBK0S.html","f53906ab0f4ec357296a8ed2f675a0de"],["2020/2AATQ45.html","cee2a3e0fb61711e3e89baddf6afc2f2"],["2020/2B45ZZT.html","addba52cc11f03315e7f14de6456f81b"],["2020/2EQXTDP.html","a957fc330605208af67517cf064af575"],["2020/2K0XH5G.html","b628a172208284e34795e6bf0b274028"],["2020/2QV9ZH2.html","3afc4f90ce2ca3b97b5bb0faca23803c"],["2020/3EG8DED.html","3bb88b5220ce3f7ffa418835273ab2db"],["2020/3F6APKH.html","b46ed624e9d84bd626e7137a4ca42c07"],["2020/3FRKW3J.html","0baa4d1c30b27b929f951921ee043fa0"],["2020/3HG63WA.html","5ea758dbebf3a9ca62d713f84858fc8d"],["2020/3KDWDKB.html","021661f4b4a1400538d70c09b14a0ff6"],["2020/3N2EAPR.html","139b9d047cd649c32881913299b98f00"],["2020/3R57ZBM.html","c339e916aa2f35d180b3a157cb98d03f"],["2020/3SHXKRR.html","82d341ac25b69be082a7382c80a8687a"],["2020/3TRNKGR.html","3fdae6ff92c0360f35120f8d149c1302"],["2020/3W9CXS5.html","3a3dadf5f74066f2cc185ea1a6cd4145"],["2020/3YZQVNS.html","d43517f0016950f8ea338e09de83e9ea"],["2020/65SJMT.html","40c1f8ddff8ee26a0d8d799ab3011dea"],["2020/73XEZ7.html","4e9d67d96a4db278202eb27f2eb6aa6c"],["2020/8BV7RJ.html","892389c1285aaedd99a295c8038c2caf"],["2020/94VGB6.html","016eabda20e3351b0873013fda4141f9"],["2020/BRR9PZ.html","ff95c58fe2d327d5d4bfc98c8f123078"],["2020/CEEV6W.html","f15052bd2ac94ce99b7a58796e0de81b"],["2020/DCQQ72.html","3fce0b3f7f339712289150cd4f3f389d"],["2020/FC7S68.html","797757711ff2198ba50732dc9cd898be"],["2020/VBR358.html","5a23ce3dbb1c4315bf9dd3337b5ed9d5"],["2020/YE6KFM.html","c8c61765b0d9fda9dc6bf0406b67ae5a"],["2020/ZP5TVN.html","88e4a32e1599ab14d32363137cd54da6"],["about/index.html","abf1915bd3565a5eb24de578b1b0b523"],["archives/2020/02/index.html","c7dc1131c0edd56f9fe70bad4c6c6abd"],["archives/2020/02/page/2/index.html","b4a1265bf49ae9d5221406a3fe7c1fec"],["archives/2020/03/index.html","0b50fca99c6a0b3e932225814689525d"],["archives/2020/04/index.html","f3e45b6e4a7edc38c83b4513e30ba47b"],["archives/2020/05/index.html","3838263577f54cf0460533f8f76f3052"],["archives/2020/06/index.html","3337223e7d958814cd4ca1841ca03f4f"],["archives/2020/index.html","8f1df685dc0167abe7fea6b0f900579d"],["archives/2020/page/2/index.html","0a37480c05958dffc881d29f440ee52d"],["archives/2020/page/3/index.html","38678868fffa9ab844598575afcfdd36"],["archives/2020/page/4/index.html","416a959c406b6b75820789d14e39f29d"],["archives/index.html","8e10db875d47592ceb47298b9d9b48b3"],["archives/page/2/index.html","6cb3a5f11c3b3362e5471f8e515d7e0f"],["archives/page/3/index.html","97699232f7017f2848c47ae7ee84444b"],["archives/page/4/index.html","500269419db96be6cea845028662ed3a"],["categories/Git/index.html","468f0576ec6b0722a376dc99f577071d"],["categories/Go语言/index.html","d7a3cf0dd2e580a5286c71499dbbb33f"],["categories/Go语言/page/2/index.html","601996a31baaa49134aa8f704e85d4a6"],["categories/Java/index.html","d171cff5dff8f7504847f4ba1ca6ee1e"],["categories/index.html","211c1fc504b64b3f621394c535822044"],["categories/安卓/index.html","59b664505e96aaca9f594d948e76469d"],["categories/数据库/index.html","ec0d7e1402767d1e5f3a0fb072123971"],["categories/杂文/index.html","41853855125c7b156b4bcb7f55eb5f42"],["categories/系统架构/index.html","700cc4854d9c2cf5d517833749f0d53f"],["categories/运维/index.html","b31d82e48b2cb8f180054df720ce0bab"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","c62cf1e9fd4db03a6a5bc8f8335bb128"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","dec428200f13f71d6510348242d6fea4"],["page/2/index.html","126d44d32e636de4e62f8e1bae4e7645"],["page/3/index.html","4dba7f59d4671c620bf75df4b3a3aa41"],["page/4/index.html","7b1c93ddaced6dc7afb3584b19946618"],["tags/Android/index.html","fc4b2587519036e6e77f05d455958ec0"],["tags/Centos/index.html","1a0c5dbefcc814e3c4be42bfdc47e5d8"],["tags/Docker/index.html","cb757f49a228a27a49615f0d7f13531f"],["tags/Gin/index.html","7c05df5ff70b609e1973b2830a682f32"],["tags/Golang/index.html","d59b23391eacfc11673e6c689d30624c"],["tags/Go语言/index.html","b4319b4bec11995ce6d3a6718870b317"],["tags/Java/index.html","83b3017a587fa987294b11feb91e0b4f"],["tags/Kafka/index.html","448d6a6bea727fe7a44c54ec8060befa"],["tags/Kotlin/index.html","dedcd1f2e15a03fce906c583f8765cc7"],["tags/Mysql/index.html","34abf0ef37bed40d858bfc1354ecb70d"],["tags/Redis/index.html","d6d4c3c79d8d91703b3cd2a9e4b44ed6"],["tags/Ubuntu/index.html","9ae180402b59a68aa640269da3b0482c"],["tags/index.html","3c7401f183ac4d0a7b2c4805d3577378"],["tags/安卓/index.html","f77286e253b6aee072d877690b12370e"],["tags/数据库/index.html","c09e316b61426c0b3fba8e1d9e3c4903"]];
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







