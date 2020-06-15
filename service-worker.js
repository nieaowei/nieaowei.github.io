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

var precacheConfig = [["2020/138BRG9.html","39743823e6679e16e25451eebe40dd7f"],["2020/1905944.html","96e1273fe0262f45f5ae8aab84216ff2"],["2020/1946C60.html","7cd187f7eb870db68faf3a95604b6866"],["2020/1FFNQNE.html","7d91ac406d249b446fb9755c1640a126"],["2020/1M052X8.html","7b3da2e9b985c7019cd15d5d5af18a11"],["2020/1TTQ6FN.html","0e81bd101cd7520c2cfac9359e37bd3d"],["2020/224PAWM.html","7a06725f25ea0261f4463ac3a538224c"],["2020/22X88J.html","5ca233c4c692e483b68d1bb02733daeb"],["2020/28VBK0S.html","53ff23773b36208e59d193c7992977b9"],["2020/2AATQ45.html","cee2a3e0fb61711e3e89baddf6afc2f2"],["2020/2B45ZZT.html","7904eb4834f8a42ba5f5bca142c0f2a0"],["2020/2EQXTDP.html","a957fc330605208af67517cf064af575"],["2020/2K0XH5G.html","2fcbc0209ed1c983a4ece7239e02a830"],["2020/2NK8Q7N.html","82e214aa38d426d9a3f99ebb4c40ba9a"],["2020/2QV9ZH2.html","0113de807ad8c7ab23b55bcfb874ecd0"],["2020/3EG8DED.html","3bb88b5220ce3f7ffa418835273ab2db"],["2020/3F6APKH.html","440959c66c175ad587019f997637bb6c"],["2020/3FRKW3J.html","0baa4d1c30b27b929f951921ee043fa0"],["2020/3HG63WA.html","fda4596b9addbd89d4b638243f942a4d"],["2020/3KDWDKB.html","e082e8456bc49cc44838e0427229dcf5"],["2020/3N2EAPR.html","139b9d047cd649c32881913299b98f00"],["2020/3R57ZBM.html","c339e916aa2f35d180b3a157cb98d03f"],["2020/3SHXKRR.html","82d341ac25b69be082a7382c80a8687a"],["2020/3TRNKGR.html","3fdae6ff92c0360f35120f8d149c1302"],["2020/3W9CXS5.html","3a3dadf5f74066f2cc185ea1a6cd4145"],["2020/3YZQVNS.html","d43517f0016950f8ea338e09de83e9ea"],["2020/65SJMT.html","fff3de6939c7fed922871cfc53d373ad"],["2020/73XEZ7.html","4e9d67d96a4db278202eb27f2eb6aa6c"],["2020/8BV7RJ.html","2fbae9cc2860f7c49707a118f5f8186a"],["2020/94VGB6.html","016eabda20e3351b0873013fda4141f9"],["2020/CEEV6W.html","f15052bd2ac94ce99b7a58796e0de81b"],["2020/DCQQ72.html","3fce0b3f7f339712289150cd4f3f389d"],["2020/FC7S68.html","797757711ff2198ba50732dc9cd898be"],["2020/VBR358.html","67a17efcea3d89bcccd000096ca5e551"],["2020/YE6KFM.html","b8895943cf0a5b98bf75e07b726a5493"],["about/index.html","fd8af35e9b229d7e05f95edf9a52ebf5"],["archives/2020/02/index.html","5513ba440ea0a9c60921264941738037"],["archives/2020/02/page/2/index.html","aad9f244f3019a3d0acdcf91931a0cfe"],["archives/2020/03/index.html","d370e3c6f5e38b8e37081341cd0464a3"],["archives/2020/04/index.html","c870054971e3061d72f8740cf4edd5ea"],["archives/2020/05/index.html","be385986aa8d20a6ca35a4ee477857c8"],["archives/2020/06/index.html","f5623301291fd54e100ff9b7908b636a"],["archives/2020/index.html","fc426b455e83f83fe382e8a7ca9e27bc"],["archives/2020/page/2/index.html","422f0b3030a6dff6b405fe40b5d0036d"],["archives/2020/page/3/index.html","0f0bc4e67e0617e24765601906b4772e"],["archives/2020/page/4/index.html","d55a2b596e9e73a60f343590cd989e9b"],["archives/index.html","4f9b1e85b0520f314235b80e7aac45f9"],["archives/page/2/index.html","1fb6a6540ab8632570df0d3cdc896303"],["archives/page/3/index.html","0275e2731d359c321fd3d2621167211c"],["archives/page/4/index.html","ecc09ef9128b6403c5f7611096ca99c0"],["categories/Git/index.html","7942fab586e08713a2f3f83d486e4ec0"],["categories/Go语言/index.html","46a63670b86469964bb14df113cfcfbe"],["categories/Go语言/page/2/index.html","0a9c249f91e1a527a1e5935326b6c164"],["categories/Java/index.html","0ef8c64b53d25f8c3efae6ee9f99e16a"],["categories/index.html","a10fc1faedbe5de49c910e4fd1ecc905"],["categories/安卓/index.html","bd687a1559619f7cd00dd3e28e4a23ca"],["categories/数据库/index.html","528536368f1a6aa27fd6e4916f544537"],["categories/数据库/运维/index.html","e796b0057c4c68a58c6daebae89e8de2"],["categories/杂文/index.html","4423f018fe82c0972bf3dc68550b599c"],["categories/系统架构/index.html","dd87b80dbd085ed90ce5941aa9bac0a7"],["categories/运维/index.html","e740a4e407ba233d5248e24365f944d9"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","535885fde51ef4ee6260f06dfd567ef9"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","96da23216756cc95d363156e5bd2cdbc"],["page/2/index.html","3934388df84dcca51d88e2232d069f13"],["page/3/index.html","15d2e56516ef9ca3aa1fa60bc6ac7ea4"],["page/4/index.html","36363078470882c1cca725eff45844f8"],["tags/Android/index.html","f2f7b5e32adfb50d153b6eca33f80394"],["tags/Centos/index.html","1e06d3bffc8af5ed7f92f498fcb0f79d"],["tags/Docker/index.html","5f6b8d790eab6782c066bca7331d7014"],["tags/Gin/index.html","c4db9675faf00753d2bfad16ace5ea3c"],["tags/Golang/index.html","f5ef8940b02ebae37874f4c6afa0dbc2"],["tags/Go语言/index.html","75687930ab91ce703216150560ec79aa"],["tags/Java/index.html","df483cc20a06cc674acf09904f256787"],["tags/Kafka/index.html","357897f683e52c46b24e18ef23c5a11d"],["tags/Kotlin/index.html","2b38456ded32b74320f8dda745fa8bb6"],["tags/Mysql/index.html","4f97d42f33691bf35b4849766273db46"],["tags/Redis/index.html","eb326b27ab0a12bb277168795ba194c5"],["tags/Ubuntu/index.html","3a373a1c454f227fe26d51cc87d1d13f"],["tags/index.html","694c51accd3bbcdd988820f6a286ae5d"],["tags/安卓/index.html","9ad9103e30130e50a43fc37f3be52124"],["tags/数据库/index.html","bc113bab9818c257d73aa79f13c9712f"]];
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







