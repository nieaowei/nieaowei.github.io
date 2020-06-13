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

var precacheConfig = [["2020/138BRG9.html","b8f49d21867fb308c5cffe9c0c3cf8b1"],["2020/1905944.html","7ae76e7ec063bcf8ab259c0a715535ab"],["2020/1946C60.html","1ef18c07252edd0b3793bd1432ee500e"],["2020/1DYJH86.html","8de3fef09e6ebf8df0c86a86bc69822f"],["2020/1FFNQNE.html","681c878a21948bff4462ab9d1bba7425"],["2020/1M052X8.html","7bf2823d6f6cd5baba3325072cce6ecc"],["2020/1TTQ6FN.html","aceb8bb9accb796bcb87178e7001b004"],["2020/224PAWM.html","24c90c9bfd558c7ca87ccf2d3b4e6d04"],["2020/22X88J.html","307e9b871e9438c8c11f9c2a05dc01db"],["2020/28VBK0S.html","8190c8dd69f865dcd1fadcdd238533f0"],["2020/2AATQ45.html","9133a3747ab57060a977de8af2c74f69"],["2020/2B45ZZT.html","1dfb70ac23de881e9f7423f4e56ceca5"],["2020/2EQXTDP.html","b84c647f5eae9707600ab91ada067ca2"],["2020/2K0XH5G.html","4be561460c2b8dcb1da4999515880552"],["2020/2QV9ZH2.html","9ab3a86409db9b14241c7af9993935b4"],["2020/3EG8DED.html","1a2d4f1c5b6cd4505c099d1283bc136e"],["2020/3F6APKH.html","35c34d568d86f502de7fbfe30d6f2b86"],["2020/3FRKW3J.html","e7ab51dfd69ea07215c145534c993ccd"],["2020/3HG63WA.html","6af575c83e0d08e6c1f36613f0080847"],["2020/3KDWDKB.html","e6135cba194959961d544bd2e3f7571f"],["2020/3N2EAPR.html","d85f080fedd8f4506fb3d4910ce4c2ff"],["2020/3R57ZBM.html","86b39e47b95b75a93e44d913fbd5ab44"],["2020/3SHXKRR.html","dd2492234f07a3f36cdd7a654adec7e5"],["2020/3TRNKGR.html","2042ed6ae974e68453666e631957d4bc"],["2020/3W9CXS5.html","ae97b92244f2724bcc2438ea657c32cc"],["2020/3YZQVNS.html","bff7143ac961a08ecaa1553520341d53"],["2020/65SJMT.html","56ec33a5ee5e33908d05d34623b56539"],["2020/73XEZ7.html","827c9e0c5cd1d6672b05e9e0b4c22bfc"],["2020/8BV7RJ.html","bd6d3c13d16eaabe8cb46dd7ee68030b"],["2020/94VGB6.html","3e2ba605067601a2ecdbb64e81a075b6"],["2020/CEEV6W.html","0fccff23ac1509f92914dd26dcc049e6"],["2020/DCQQ72.html","d06831b8109dc02c59f4662ffe73446c"],["2020/FC7S68.html","527c459de52a01ade773b2fed5edd586"],["2020/VBR358.html","95ba12fff462a769e90e9dcd90cd64b3"],["2020/YE6KFM.html","5794e129bbaf520544adccbae9c467af"],["2020/ZP5TVN.html","059dab649d1423d27bfc36f03358cd34"],["about/index.html","abf1915bd3565a5eb24de578b1b0b523"],["archives/2020/02/index.html","2a22c1c678ab131e7cb23ac0d360eeca"],["archives/2020/02/page/2/index.html","846ecd2c77e8dd834ee7ddcdf008ee52"],["archives/2020/03/index.html","dbcf6c943a50a0e93a15e04ce725de17"],["archives/2020/04/index.html","eee8a988c9082440c462aa834572f965"],["archives/2020/05/index.html","cafdf564bc44885ac06f0112055c8e94"],["archives/2020/06/index.html","4ec8661736791a1ea5b246102fa47b17"],["archives/2020/index.html","f4eab2fb66d50a8ba840becf263dff30"],["archives/2020/page/2/index.html","d6568ecf24ee7ac771de4d056b18f39d"],["archives/2020/page/3/index.html","9b63c3808030789779cba1777d2b3f13"],["archives/2020/page/4/index.html","432e0c60faa1e319be195d90fe871cec"],["archives/index.html","1865c30b5ae206195273721e377d97f8"],["archives/page/2/index.html","e903d7ff5eef3825e77e77ef75c133ae"],["archives/page/3/index.html","d08262773d2221def5a95ac9fd977b0e"],["archives/page/4/index.html","70b7b8d930cecf928160cb8f2c935931"],["categories/Git/index.html","9298abd25d9e4e1bee3d7b002cd5e964"],["categories/Go语言/index.html","f8df23b1ec4da46b2648d00b8ee7bbb1"],["categories/Go语言/page/2/index.html","4a3226cf73455d3d982617cc593fbe60"],["categories/Java/index.html","ee46ce2ec3b7f48452842c669c5bf6e8"],["categories/index.html","9c16fbf0972d0fa741e05ac87688778b"],["categories/安卓/index.html","a8d0a482cdd5f3cc0f7ba65ccbbb969f"],["categories/数据库/index.html","9dcc5a5ba1758b85681b25e980cab8bc"],["categories/杂文/index.html","c711402aff66294c517a2973793f84ad"],["categories/系统架构/index.html","430dc6f1b2739a500ec42e6de4b3882d"],["categories/运维/index.html","5bfbd1a812e9ec736d45048b227a7dfc"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","3dbbbf42935ba61d5a04025bbc270d99"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","dec428200f13f71d6510348242d6fea4"],["page/2/index.html","43d9db8b86a05820d4dedda8b7c6223b"],["page/3/index.html","979d4bcc13d0748df1aa9a03d28e4c8e"],["page/4/index.html","24bb4fc26457e827ff824de030d46ad5"],["tags/Android/index.html","c7fb5dcd6600901e15101b8b61987bc5"],["tags/Centos/index.html","61b37d372089dd136164d27c2b29ccba"],["tags/Docker/index.html","ecb917e1fcda9a5724304772be349642"],["tags/Gin/index.html","601d56411b9afcee862fe57843a27e39"],["tags/Golang/index.html","a17d6a8dcf0ebd59b0829d0d0625b8d8"],["tags/Go语言/index.html","40ae9986746b4ba8b7b738ccace42a64"],["tags/Java/index.html","11e0016207c3e0a12f3a43afacca2b53"],["tags/Kafka/index.html","9745af4a10abbc318bf28d4a7e583c4e"],["tags/Kotlin/index.html","3df9aec9f4509ec88001550e2219c99b"],["tags/Mysql/index.html","9b890f869455beab2b1b8349bf74cb3b"],["tags/Redis/index.html","7e7067d99bd6d3852788240b8790e86b"],["tags/Ubuntu/index.html","9acc7d2080a94215573033f2d7b2e299"],["tags/index.html","7e8901e2cbbfec2863ecf245d265146b"],["tags/安卓/index.html","4e569588291fb79bc1d3e13bbb386c1f"],["tags/数据库/index.html","d6d179731ed813befc9d29aecf66fd87"]];
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







