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

var precacheConfig = [["2020/138BRG9.html","aacdcdc5a78ff7d8b5bb8cf12d014aea"],["2020/1905944.html","89a263b633a4822805a9731cf6b6d5a1"],["2020/1946C60.html","856e637b3c01613af2aa05328f3f2ce9"],["2020/1FFNQNE.html","6299b992d88e10a9e825925d1796648f"],["2020/1HAFVWT.html","e97ac7ac7e246c082a7f3505367ffd3a"],["2020/1M052X8.html","2a5dcf9a5ce9913c97672477b74c6ac8"],["2020/1TTQ6FN.html","e00ebc438b74d0d11bae29c321c92536"],["2020/224PAWM.html","cbdd21f22cf36631955d36ed51a3901f"],["2020/22X88J.html","6bfe080fc3e633f743f44ee8639b441b"],["2020/28VBK0S.html","327a3fe9f3c7f5e63b907c218a4badcd"],["2020/2AATQ45.html","2d9dc2179db87b4382a14d997f3d427e"],["2020/2B45ZZT.html","110bc68935aa9fbe52cad6278a83ec16"],["2020/2EQXTDP.html","83a6e6095a9e6748a20aa59cc1203b14"],["2020/2K0XH5G.html","be14ae7375c5a473f59eab31433be873"],["2020/2NK8Q7N.html","42e2143413dcbd15af873626123ccb65"],["2020/2QV9ZH2.html","b4e0fe15bbbb6e1b2c3ec2421deba8fd"],["2020/3EG8DED.html","66882b5edbf3c5263e8d1bc4ee8770d4"],["2020/3F6APKH.html","66768d2921b815929729f3f467062402"],["2020/3FRKW3J.html","7ce57a5f0cc207a9ef0700d1045741fc"],["2020/3HG63WA.html","9d45f812c0c4440ac9d59dc9924bc78d"],["2020/3KDWDKB.html","429d8af1248dc0c618f55382ee1c970a"],["2020/3N2EAPR.html","f73cf4614da78183e3976ea98ef6f5e4"],["2020/3R57ZBM.html","6d589b2f4f2cb1354cbf6659697da3a5"],["2020/3SHXKRR.html","c99c938d49986ccbd87940077560aedd"],["2020/3TRNKGR.html","0a84a80033e82e860c54b27e46225d85"],["2020/3W9CXS5.html","e2d47ffee3dd4028189e319d904a8476"],["2020/3YZQVNS.html","4a7fbc4b9f8f50ddd2881e55a2bd65b8"],["2020/65SJMT.html","54ea050efff6f814b2ada4aa2e6872c5"],["2020/73XEZ7.html","8387a1240170cf1bc2851b79c8373cdc"],["2020/8BV7RJ.html","a957c1de1f9aca53af88850e641471cc"],["2020/94VGB6.html","e4dcb534ac3a4e831e17b0db2c460550"],["2020/CEEV6W.html","b8b4b98ef7e5603c8c3e5ae2bbedce3e"],["2020/DCQQ72.html","6fab42619a9a09012b2209f2b353ec32"],["2020/FC7S68.html","5f41bd5cb2c169b2210e760fa0a6f4aa"],["2020/VBR358.html","3131c7b7820b5d6b4fd6407d3fa43139"],["2020/YE6KFM.html","58c418b2ee2fe7ba0bc02d5dc5b2d0fa"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","e901927f3f22bcbd7e19a68a4cb1b3ca"],["archives/2020/02/page/2/index.html","67bf617a49019c22abcb6f90aa492165"],["archives/2020/03/index.html","24f351480e0732fafab8c2b997e2fd0b"],["archives/2020/04/index.html","9e998b469e03ef21907813240589a075"],["archives/2020/05/index.html","822158efc55f7e72fb3d1d77fc2f9848"],["archives/2020/06/index.html","08e8255af1bb2361bd10fdbc8637eea3"],["archives/2020/index.html","f4a066b4e70b2913bd2d40b79c640166"],["archives/2020/page/2/index.html","b8a0aa216c74fc7267ea135514919d84"],["archives/2020/page/3/index.html","2fa0cb876f18b50b2c26b085d26d15be"],["archives/2020/page/4/index.html","43b0b93aaeb6ed523e72f5d366238cc5"],["archives/index.html","8276074769ec50c91d9396b171469fa6"],["archives/page/2/index.html","458e225715f7e6653efbbc8d9ededc62"],["archives/page/3/index.html","84313c70becff30c6938b42187928a43"],["archives/page/4/index.html","004997c23df6576615263f793655d727"],["categories/Git/index.html","49e82e885723cebc5c115ba8bbfbbdff"],["categories/Go语言/index.html","25837400b2fe596b2b80859f68bbc4cf"],["categories/Go语言/page/2/index.html","259443c63addcaf93f856390892ce7fc"],["categories/Java/index.html","ec7ba898944c994c6235f76bb334f3d1"],["categories/index.html","5c82e4d95b9cc3aee9a9028afa7c5f4f"],["categories/安卓/index.html","ae7d522fc92fcaf052812335aa2378a5"],["categories/嵌入式/index.html","298bc761ab8f813ff15a0cdb5e023824"],["categories/数据库/index.html","7afaca1d807434ba042886df8cf9233f"],["categories/数据库/运维/index.html","778cb15e20d99d76630b23831f399631"],["categories/杂文/index.html","632110bcaf2d1a4818f02153d2ba6525"],["categories/系统架构/index.html","0cdaf15b01f59a657bef38b38f547719"],["categories/运维/index.html","d8fe827bf534c3abcaf6d1a1d8798571"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","5b391d19e29819358f4430b8765973fe"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","97a7071621cc0dac0a344cda74e1226a"],["page/3/index.html","c7dd716c683485737b19514f3af4ab07"],["page/4/index.html","16ebcad793477ddb0ac816a43834b58b"],["tags/Android/index.html","06f86a61b4e4c1581e80e715fb650371"],["tags/Centos/index.html","0736f1d3d9ce6b8b99b2da27773eb048"],["tags/Docker/index.html","a78d2c584c95b8f9bbb646ce9af9cc27"],["tags/Gin/index.html","62739389287b9de9394cc0f880fddcb5"],["tags/Golang/index.html","f3b2a0514195db4f8d0cc61bcf07273a"],["tags/Go语言/index.html","9c0f7c7822be568b3e9ca5890b7aba94"],["tags/Java/index.html","b532ad93a1ad9ce2b1f8c38e8dfdecb4"],["tags/Kafka/index.html","30449373523eb0f7112d80e3a5444c82"],["tags/Kotlin/index.html","bfe5f0633e03e46d31ec89568d9fdf6c"],["tags/Linux/index.html","8d51dc8ba0be696867db713df4923cc2"],["tags/Mysql/index.html","f6a1c0febf4ae74d863daae142343e04"],["tags/Redis/index.html","6b0ca0cd1df57a0861a9bcb706004629"],["tags/Ubuntu/index.html","73278426a2c29683360d9e1d57323144"],["tags/index.html","adfd441fe9f1b04691fc7f775de9bcba"],["tags/安卓/index.html","bfef9df77a0749438e30cc6587f22f25"],["tags/数据库/index.html","b3b94fc487eda8ed9cc3055628b9404d"]];
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







