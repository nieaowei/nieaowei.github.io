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

var precacheConfig = [["2020/138BRG9.html","b42344898c06b69f232dbc274b76e4a3"],["2020/1905944.html","1c6e3ed996ff9fef25206e758d2c38d1"],["2020/1946C60.html","3e9ed44381a3967d12e6acc3c83875b2"],["2020/1FFNQNE.html","111bac6133db159b3c8d27643da0028e"],["2020/1M052X8.html","41c3e36a8e978cd97671e71e5ce20778"],["2020/1TTQ6FN.html","460a03394cbba112d5d76558fabd066c"],["2020/224PAWM.html","1a179f3d599e3dd145bd82d2a63682e3"],["2020/22X88J.html","8ca8537c013464139f0441e1b4151e90"],["2020/28VBK0S.html","4b8e059109ab0d7b52e940b45bf43847"],["2020/2AATQ45.html","1b4e335a3a5f5510490807cb1ac39e92"],["2020/2B45ZZT.html","925749768a229e4d7bf3f7393d371794"],["2020/2EQXTDP.html","7031a33dc79d0c512905cdcc75a1e2fa"],["2020/2K0XH5G.html","ef73a298d99edef52d897f8c9474c811"],["2020/2NK8Q7N.html","0612bb3cee85a8a6fdff9371f05dd9fb"],["2020/2QV9ZH2.html","e6cef0ecb3bca5e5c256059871acfec9"],["2020/3EG8DED.html","6262760aa9e1a38c012cdd2e67b7d0f4"],["2020/3F6APKH.html","59bae4707ac426941dc50f9164eefafd"],["2020/3FRKW3J.html","285718b3a6c4abd162ddf9bdcdbeb5ab"],["2020/3HG63WA.html","ea379a1cfc96133a71e645de9d5d6800"],["2020/3KDWDKB.html","183c24a63141024d547c31571e3b20de"],["2020/3N2EAPR.html","b8feeb21cabb4066c1a3c3a983d7b18c"],["2020/3R57ZBM.html","61d3d2beb1ce2d754cf63eedd656550e"],["2020/3SHXKRR.html","e686e93771753253d17e0e6a1ddaef2d"],["2020/3TRNKGR.html","a753d31475eb045bb823c5d6c53b1e15"],["2020/3W9CXS5.html","8996d6d631a87c46bee7c9ff4daa2041"],["2020/3YZQVNS.html","ee79a388486130a3083b1178877d6874"],["2020/65SJMT.html","9d175c9ce32f84e6c7c48c716f232dd1"],["2020/73XEZ7.html","6a628a335a0330533849616358323ec6"],["2020/8BV7RJ.html","654b9fd116f1d65df7ba19612c7af301"],["2020/94VGB6.html","234f9cbeef7f03ad65c3217443727abe"],["2020/CEEV6W.html","00bd775015dbaa22b01c410f1ea57517"],["2020/DCQQ72.html","0fe06a41190e98a0f0636e1e49fec314"],["2020/FC7S68.html","b639cff99cf5c9782b5a93810ac8c988"],["2020/VBR358.html","3147520d19a2164c69550034977ee8da"],["2020/YE6KFM.html","31fba05bc0fb6e515c65c2c798e5c0d3"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","8fa0a742f892801d3a30375f7721397c"],["archives/2020/02/page/2/index.html","ffd785796d5047c41af61a1e94927dac"],["archives/2020/03/index.html","18d4666d0ddb9c3770fe7b9cb2e3ed96"],["archives/2020/04/index.html","236bbd406c0623b5eee648296777b160"],["archives/2020/05/index.html","7f5f95fba4688e6cfa1bcfc75d20b344"],["archives/2020/06/index.html","1ada4ece78329ddede5b6db0ee51aa6c"],["archives/2020/index.html","a75fff0f256928ab7a30af1fb256b9fe"],["archives/2020/page/2/index.html","4aefa0094f4212f4f1f7a0fbf194df07"],["archives/2020/page/3/index.html","c4b48c8993b7311133d8139d6dccbe80"],["archives/2020/page/4/index.html","adb3e09559ec31650ef58bf3d986fcbd"],["archives/index.html","e6637c714935d55581045a0a01f3f3a1"],["archives/page/2/index.html","1303b2a31b1f9ec2c3b81f92f93c1e71"],["archives/page/3/index.html","21fae49f82631066a41a420b08db8b91"],["archives/page/4/index.html","312522b2131c2b6ff7256f10cef7796e"],["categories/Git/index.html","9bc35db57083342f4dad2b8d3db50a25"],["categories/Go语言/index.html","5440163337b25e1368194401ee8e88e2"],["categories/Go语言/page/2/index.html","fbaf055b8a120b3dc1ac96f8b1ff9a22"],["categories/Java/index.html","9e304847e6e168560c5b685a032c6de2"],["categories/index.html","477724a6fefe00c94764a1d1df774516"],["categories/安卓/index.html","bd64a39e503c7724fe8fb6302685106f"],["categories/数据库/index.html","8a2784e6021c2576df3db4d7f6ef9d4d"],["categories/数据库/运维/index.html","9e9dca67753a0aa9cebac30557360402"],["categories/杂文/index.html","49e5601089b9c9835960b3650075d6fd"],["categories/系统架构/index.html","597e6225a00443e0d68e128899b2f2a3"],["categories/运维/index.html","d1d8c9acfd5646fa61f14620eeba5c5b"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","2ffa79f4862448584a016827e9125f12"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","d2395999639e05c5dabb904d1b3790bc"],["page/3/index.html","2851220faa97a6e1998cc26228430722"],["page/4/index.html","3bd1547019fcd6afa2ae43e4e2d7459e"],["tags/Android/index.html","c0939c3d6abdeddc1469bbaeabd04928"],["tags/Centos/index.html","2d754a92846e7991a2a1d2297711c69b"],["tags/Docker/index.html","9ca0f42c2b11f91d39e7696b852ab8a8"],["tags/Gin/index.html","908a7be3931c5c38dca2d8afe8b6b00a"],["tags/Golang/index.html","b4b0eb15914ba9b19b4032b81c7b08e4"],["tags/Go语言/index.html","530bef35adb6ecb1af7a8fd8dbf85c32"],["tags/Java/index.html","cd1a06d6ccf21bbe7db4ce152ca486a1"],["tags/Kafka/index.html","3b9c2c3e08c98dca5155a9ebcd2e9089"],["tags/Kotlin/index.html","4fc676259a5fc7c5e88ffeb8bc8d6d4d"],["tags/Mysql/index.html","c67f79b93193e7fec93fd9606397b4e2"],["tags/Redis/index.html","2703144154963bab88fbd96fed7d4f17"],["tags/Ubuntu/index.html","af593c7e08055793bcf7ea9609fbf1d8"],["tags/index.html","4d0e4d27a06028c5ba7acdeed2a5dfb8"],["tags/安卓/index.html","4ee6933c121e80b3934db6fcf7fc42db"],["tags/数据库/index.html","6b26f34d73f09cb01a503fce4e15b6fb"]];
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







