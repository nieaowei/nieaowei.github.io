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

var precacheConfig = [["2020/138BRG9.html","bbcdfc5269a713bb38d32760ec8cc5b7"],["2020/1905944.html","9010d836bf7c04a4d45094e56b9d0941"],["2020/1946C60.html","415d1f8d5ca40c94072926f7fe8e9eeb"],["2020/1FFNQNE.html","bb3d362cef4edde7a75030c665e7c1fc"],["2020/1M052X8.html","fa5c034631707b83a8d8406c1fd7c1f3"],["2020/1TTQ6FN.html","6740674783dd6104f889a626678a526f"],["2020/224PAWM.html","249f4f19982c715507557ddd722e13d6"],["2020/22X88J.html","33478662ee1e4cdc7452214ec9bbb481"],["2020/28R01SH.html","d9d0bfa90cd0e0ebfd275ba5b126c504"],["2020/28VBK0S.html","4e8401157cbafcd608d3fbaee15c4bae"],["2020/2AATQ45.html","abfdd6cfe73b21621141e26f2bf7d2ea"],["2020/2B45ZZT.html","ec235bdd424c5c9015c66af0a10605a2"],["2020/2EQXTDP.html","b8ad3636630c456fb761233a93fcda3a"],["2020/2K0XH5G.html","98dedb14bf4b084c21462f2b7eeed884"],["2020/2NK8Q7N.html","ea5c980fcb9c2ef9d87063019250f1bd"],["2020/2QV9ZH2.html","923859deaf57968eb52ed463df3d6e3a"],["2020/3EG8DED.html","bbd6527bf5caa17ce734dc1658809114"],["2020/3F6APKH.html","42f04dcf2bdc4780b84da9577e11c232"],["2020/3FRKW3J.html","f2c7feb5c29fd6d180c4ea96d00e1a4a"],["2020/3HG63WA.html","d560155fc1452ad3e2e82f5d08f2f0f9"],["2020/3KDWDKB.html","2751b99db52f191b9906a6924ce0ca8a"],["2020/3N2EAPR.html","863733a600b32055e786fc5492c3ca73"],["2020/3R57ZBM.html","8827b175c7c49b58ac114b4f5904215e"],["2020/3SHXKRR.html","ebbfef4915a9e013999893ac21a9f174"],["2020/3TRNKGR.html","04c5e21eba77f7fdc9242f926bf58ce0"],["2020/3W9CXS5.html","1ff9b17d5d492d75256a8764482c5adf"],["2020/3YZQVNS.html","364676b438f700c8d82898a680a294aa"],["2020/65SJMT.html","65a3359c00f5d48ade580929b0ec6365"],["2020/73XEZ7.html","c4ea580e32444593c3dfc6b1e0b8c209"],["2020/8BV7RJ.html","e8ce1a58c95839f53f767fab8badc39b"],["2020/94VGB6.html","bda30a89b3515287c8a34d2f30ab2322"],["2020/CEEV6W.html","2e9709df5e40217d488e54baccea45b1"],["2020/DCQQ72.html","2eb3f4f9ce417890d9cda28f106370f4"],["2020/FC7S68.html","d710d257e85b24c875d91f850eac9ddb"],["2020/VBR358.html","75e540def8edee473e0209c4f579d423"],["2020/YE6KFM.html","7648f1977c09540f005e393666b320bf"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","91d1bc705b4f0f28f09cadb8410a819a"],["archives/2020/02/page/2/index.html","6be11d7dc200a0d7796da9ffd709f750"],["archives/2020/03/index.html","64bd235f4fc6be7a6d7467738912fafb"],["archives/2020/04/index.html","f445f722f93c2de08616c92183850281"],["archives/2020/05/index.html","4882f0081a2cc7780667b99e43e6a4c8"],["archives/2020/06/index.html","b0ca207aeea649fc4dc9b3d60e02b943"],["archives/2020/index.html","dea7f8c6592f485bfedd80b6c7cb46e4"],["archives/2020/page/2/index.html","2a91ec5f2ba2649acbe470bb3a2ef772"],["archives/2020/page/3/index.html","b4852c1e274a3acc64dc81118259c201"],["archives/2020/page/4/index.html","f9618c678c987de5aea487dc40db0859"],["archives/index.html","105eb2c18462809a1eeb7a69dc251a56"],["archives/page/2/index.html","a5c07518533aba091837fe46c10e2f96"],["archives/page/3/index.html","0c2eb3c182c7434b307eaddc04aa9c66"],["archives/page/4/index.html","6f728580815909574d29f6718fcc2e1b"],["categories/Git/index.html","11191b901d29e77316cc319feb74dba1"],["categories/Go语言/index.html","2b71f28241eaf7e7da4b218417630f31"],["categories/Go语言/page/2/index.html","9be6d5723ac40b809861b9e1925d0e08"],["categories/Java/index.html","b4cc61fc3f31814c510a8d443e4a69e2"],["categories/index.html","02c14ec13439776c272cf92a0e5cbd66"],["categories/安卓/index.html","7e5b5a6286a6d935a774c1e2d59a01dc"],["categories/嵌入式/index.html","1d015bdd245cad0ebb52b16bd0cfebb3"],["categories/数据库/index.html","ec25fed1cd7dee1a2260a6c4c444a5a0"],["categories/数据库/运维/index.html","c4a4d6e515f4921724b66aad670a96b8"],["categories/杂文/index.html","5823df280abeb66bfab8befe595e8d5f"],["categories/系统架构/index.html","a26e218fbf33482058dc2757e1f1bff7"],["categories/运维/index.html","5f18350391719ed4fd9541d3a972a29a"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","e8aed8fff3b4e02541375dd28e35b1b0"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","74389af25a8010c19a6fd76e050780a4"],["page/3/index.html","e60295655af0f90b4f08013eac93158a"],["page/4/index.html","bd981ec20977c1e8bed6c8189c58a29f"],["tags/Android/index.html","9afd41c26e0ac8c7b3008c8dead1fd9f"],["tags/C/index.html","81e5e5e13d655ece99f792b0dd07e369"],["tags/Centos/index.html","8832e881e357c5703bb53ddc3f13d7da"],["tags/Docker/index.html","9cb81bd616f6cdb28182d0ee94e3c4fd"],["tags/Etcd/index.html","b6f3e2357d6cbe09257b87a18e203d8e"],["tags/Gin/index.html","b452ccfe5de48ec5d197e9d976ac7128"],["tags/Golang/index.html","6885031d2c299309ef6516a3e1eec081"],["tags/Go语言/index.html","ab490605bdc465e3eb05bb547962258f"],["tags/Java/index.html","96233385eef4654140ac6c8e31c1d0f5"],["tags/Kafka/index.html","671ef690dfd230cb2018aeb00ca08b0d"],["tags/Kotlin/index.html","b2e4a027282ec0216e44a4a8cb9f82fb"],["tags/Linux/index.html","a9912198fd49eb358e4c3e49c5dbe013"],["tags/Make/index.html","89d932e6340e77a6a2ed08ab9d90ad5e"],["tags/Makefile/index.html","6797b8dfdc4df9f0ff18040dedd0f675"],["tags/Mysql/index.html","7a11a75816d68afbebd0b3ecc23ee303"],["tags/Redis/index.html","a644cc220f1bfca5efdd64d4e76e2a9b"],["tags/Ubuntu/index.html","ae382552aca19d23b9d5db5d99ee0718"],["tags/index.html","8b0526b0fb5c7e60272a4d39c5053549"],["tags/安卓/index.html","70a184cf8b9d461f6bb0e7451bbc7b9e"],["tags/数据库/index.html","0728fc48f00c0b16e0ca1ffd0ec550c6"]];
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







