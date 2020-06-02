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

var precacheConfig = [["2020/138BRG9.html","ba65cb3cc46a990e47a37d08a6b3059a"],["2020/1905944.html","fd7e85422588df882e7c5ab6ff84555a"],["2020/1946C60.html","ed11dbd2644153efbefc2f1da45efb16"],["2020/1DYJH86.html","822a00a846cb4711ec6982ac7fbd6e8c"],["2020/1FFNQNE.html","55df50a94d46b77875c6b5e530e04eee"],["2020/1M052X8.html","f99cc527af34dddacf687594d27640dc"],["2020/1TTQ6FN.html","3575b3bb976c95fc6d90238ca1d84313"],["2020/224PAWM.html","497bc1c23297928a486885522145c09f"],["2020/22X88J.html","aae5e16bcb850ade15d7f8f45d684ada"],["2020/28VBK0S.html","837bcc05c63f356558b462377ec3b5dd"],["2020/2AATQ45.html","b93298ed5378d770d43cdfcc91b81fbe"],["2020/2B45ZZT.html","b63aa21051463cd48f8f99b47b6e41fd"],["2020/2EQXTDP.html","befa4be20491c87f23be7f8355c87d73"],["2020/2K0XH5G.html","bb8ffe631cec0a00a6c5120a11981b64"],["2020/2QV9ZH2.html","06e9aee27be7863df8c316b8abcfc3c9"],["2020/3EG8DED.html","6a7f578b46e3fef2c5c4ff0b456f5ef6"],["2020/3F6APKH.html","56d7f3ad0c36ad510d843128afff076a"],["2020/3FRKW3J.html","61d046b595cd6ac4175931db84339db9"],["2020/3HG63WA.html","1f594f518995a758abefa8c8e18a36a2"],["2020/3KDWDKB.html","641eadbf8f099707006cdef7b3bd6944"],["2020/3N2EAPR.html","05b5f95aad07b2505fa4326e3956e36a"],["2020/3R57ZBM.html","4c40ff2ed76502dd153962c17fe96408"],["2020/3SHXKRR.html","cbf9301c8c33307625ca2aa62ab957ab"],["2020/3TRNKGR.html","fe386baf44124d8c0aaebc293829f92f"],["2020/3W9CXS5.html","c25af47f861450789ede99544cf625d7"],["2020/3YZQVNS.html","a74aa12fcf861a1a41e832c57a9213a3"],["2020/65SJMT.html","05898e170602b3959d63f8ba27c565a6"],["2020/73XEZ7.html","c5648b6a9b6d05867a6dd98564d7dd36"],["2020/8BV7RJ.html","b894a9db3ac13b44f9f8d0e950cea03e"],["2020/94VGB6.html","f49d61c57cdb1527f5cccf31083fa9f2"],["2020/CEEV6W.html","92319ae98ead8f73b648f8af1a3a6436"],["2020/DCQQ72.html","5324739ff2972cbd96f184f42cd40b9a"],["2020/FC7S68.html","4d8161601b0303f9444fefdcec0bbbeb"],["2020/YE6KFM.html","49aac03522e39d1782aef18afd6bb8c6"],["2020/ZP5TVN.html","bb78574eafdc71be47fa3376f6f28cf7"],["archives/2020/02/index.html","cedf38a15f5b0c82a2de694ca6823df6"],["archives/2020/02/page/2/index.html","60e7e42b463ca8d65109cb56ab65b87b"],["archives/2020/03/index.html","8713ac52c9faf3d6d1b8e3215e971583"],["archives/2020/04/index.html","c40ac8615f7307329efcd85ee36c5c97"],["archives/2020/05/index.html","6d2151a37ceb8b76a6e8795f83e89f63"],["archives/2020/06/index.html","28b057f860e3119d203e26f45161af8e"],["archives/2020/index.html","abf1682424d5f1c3f95e230d1769bc63"],["archives/2020/page/2/index.html","57be54a38775ddcec841d375f7c2754c"],["archives/2020/page/3/index.html","48b08151be7fb99ab83cb5cf1e608824"],["archives/2020/page/4/index.html","aea8e9585ddb36dd69005d699d5f4efa"],["archives/index.html","d190261fb338b69ea6975a85e35e4b67"],["archives/page/2/index.html","0a3516f84a7357340007de2fae60eba5"],["archives/page/3/index.html","acf2efb4ba766b7d1afe8b57fef8b2c8"],["archives/page/4/index.html","f2bdef62172796e5fada8e6c3690c42e"],["categories/Git/index.html","8ce3a7e9ccb2a1aa43b3c49d35a7c40b"],["categories/Go语言/index.html","6366edc7065912b49a5da380f1214512"],["categories/Go语言/page/2/index.html","259e43e41cedf70edf2b314e0a5566fa"],["categories/Java/index.html","49bf7dbf379e1c32bbb5e240152e489c"],["categories/index.html","418276e5145da3fa453ee8321cf84fcf"],["categories/安卓/index.html","3a0db56f3a1fcecd51bef730ce05f659"],["categories/数据库/index.html","42e8e33de354e238eeb7c07a2afcda72"],["categories/杂文/index.html","8966ac38d2b8d90403eb945e918f5468"],["categories/系统架构/index.html","e9c81859e810495deb842d21b1af8d1b"],["categories/运维/index.html","c9dc7c0b5937ad615316fda72d4144ee"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","65fbb8dbaa9ad9db7682273f12286967"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","41b440d39ed60c123d48f9e331b4e3be"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","4764e37b14827b2082303f410335bd22"],["page/2/index.html","d2ddb77126b85b56302e3b04aa54a7c7"],["page/3/index.html","3607ad56a65cca410bb983c6c7ee739f"],["page/4/index.html","a106573b538eac39c821456eb2ff1759"],["tags/Android/index.html","a4dc199eaf6e9ceafe62961bd5aa5574"],["tags/Centos/index.html","5182e1d76e47356bc4da6825e6597a25"],["tags/Docker/index.html","bcc6ce0ac1f18625851f953f46a1fe4c"],["tags/Gin/index.html","92a956e96302dd2b302bda94234f7824"],["tags/Golang/index.html","be2794c5b0366289f26b31ee84fd219c"],["tags/Go语言/index.html","614d72689e0900203eea61be3ae6212d"],["tags/Java/index.html","9d1de63886d7589160154f7c93fc52a8"],["tags/Kafka/index.html","9aed30c365c2618c03f0c9360dcb6ba7"],["tags/Kotlin/index.html","0e4345d9c0936fa26512750370529c30"],["tags/Mysql/index.html","3ed38b92cc50102e69da16750cb0e4ce"],["tags/Redis/index.html","557f6b5ee8ff6b6fcffb478bd8c6c650"],["tags/Ubuntu/index.html","71dd00d27c9e581a1873f903961599b3"],["tags/index.html","5f8532763bf518ee15eea0606a13170f"],["tags/安卓/index.html","38c6641efd7a68739fef12ff6404ebbf"],["tags/数据库/index.html","6e4000ab4af2e454cfa2360319162ad9"]];
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







