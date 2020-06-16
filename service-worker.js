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

var precacheConfig = [["2020/138BRG9.html","ff9ce3d72701b0b48aa050edebd45cdb"],["2020/1905944.html","76db4ec70558ebdcf2fdbfe4e820f9af"],["2020/1946C60.html","8c872925e03982f9bd8bc8d6347ea4c1"],["2020/1FFNQNE.html","2ad7298f44662e399bb19f50c121ac08"],["2020/1M052X8.html","e0c8df3fb7508f07cf63a0305516005f"],["2020/1TTQ6FN.html","19af1a41a34793ef97c16ff6cdeec78a"],["2020/224PAWM.html","db90ffe888083264c31de23c0513030f"],["2020/22X88J.html","16712328136e6afa03d3a9a2bf8aa08c"],["2020/28R01SH.html","32de3ef95a4edb54c8914e14cea18814"],["2020/28VBK0S.html","589321c73ccb7298bed9cfa43f90f42a"],["2020/2AATQ45.html","8001ddfce112db6e68cacdb8c34ee6a2"],["2020/2B45ZZT.html","4c8c1d79538aba3a9b1670f2a4b1a1c1"],["2020/2EQXTDP.html","604af0f9ea80a0b2ea78e5ebe3a23991"],["2020/2K0XH5G.html","543045b1ca68b43ca1b5d0ced92967bb"],["2020/2NK8Q7N.html","09b95716fc3ba8fb8547f03162697e49"],["2020/2QV9ZH2.html","eeec38c4e2c451dfe050494ece19ff40"],["2020/3EG8DED.html","46aa3b76da1cbeb796662d85fd9755a6"],["2020/3F6APKH.html","3b327453cad4fbae24814af3bb678c31"],["2020/3FRKW3J.html","51d0fac0ea0479c664665d6079cd7d4d"],["2020/3HG63WA.html","e67a5bbef5b1eacbdc74de8f8e4f1194"],["2020/3KDWDKB.html","ddb48f0e960ed6db83eb524e1651f2bd"],["2020/3N2EAPR.html","0bfdfdb37a0632de40aa396579122812"],["2020/3R57ZBM.html","8f95fbb7b96273444147c4ef1f3a334c"],["2020/3SHXKRR.html","e5c15c0b0c4d52a2bc337fd601e776b7"],["2020/3TRNKGR.html","8b4bedc2588797848841037cc9cc2475"],["2020/3W9CXS5.html","8c0b5b1e3c3fd788fea625b88c3dfe01"],["2020/3YZQVNS.html","d10c4c1162257192a9e34e509f50d492"],["2020/65SJMT.html","d7d61f4d4c889a84964274e3dadbc626"],["2020/73XEZ7.html","3aa231fd4dd3ce1c6b16ca383dd6a018"],["2020/8BV7RJ.html","d59a9ea22b170f4d7d5863b75fecec3c"],["2020/94VGB6.html","89b99432c91085c0bb2cb8faccd32ebd"],["2020/CEEV6W.html","fd7d3d258f2d8f5e2028d550aa932572"],["2020/DCQQ72.html","0766eef07727981f6de350ecc3dc2af4"],["2020/FC7S68.html","fbc80bda4c5fac5e1b59cad8c4950cc6"],["2020/VBR358.html","61653cf7793beefa4d426efd08a6ff14"],["2020/YE6KFM.html","9943928dd6ee48542c76eb043e11a380"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","bc6886fb8918b8b5379063b306a7db12"],["archives/2020/02/page/2/index.html","d3d1b2582fbafc1af5491dcafedc0ba1"],["archives/2020/03/index.html","3efee02115299d5e663b431f7c716c23"],["archives/2020/04/index.html","cabf5dfcdb9a12a448ab0a32c039214c"],["archives/2020/05/index.html","1a990918f6c611899427b7c9419db478"],["archives/2020/06/index.html","0c27943b2f610464db7c6852dd4451f2"],["archives/2020/index.html","f7141cca5d6c391963e8f54f55b28198"],["archives/2020/page/2/index.html","8c48c0789b6a54ab038357da1fd01092"],["archives/2020/page/3/index.html","d44edf0456bf751a9b9b85d0d3ab3d82"],["archives/2020/page/4/index.html","3a2d26f2160664791f6c9c9c0a2a58e4"],["archives/index.html","0e6edaa1eeab6d86efcb24b20b26296c"],["archives/page/2/index.html","3f488e356fba03d4f5c77309629dbef3"],["archives/page/3/index.html","bea37258614ed80a1392ce9651310839"],["archives/page/4/index.html","c1a39ec8237754246c92b22f3b8a0efd"],["categories/Git/index.html","d59965124000eb98edddb6b49d176b36"],["categories/Go语言/index.html","393216bc80d3ae10e7849e4b8b7389e6"],["categories/Go语言/page/2/index.html","8fff1f28f6c0fe1097bafbd304fad013"],["categories/Java/index.html","3d8f26c98e028c4ba8d9040e9a87cdce"],["categories/index.html","c13ab4316529389aed8a71e52b97c06c"],["categories/安卓/index.html","8aab6f4fb23e47fd6bdff442f954d99a"],["categories/嵌入式/index.html","20bfd84322efa5c01840868c38419c28"],["categories/数据库/index.html","5cd38828a703c8bbe801ccaf99d0ba65"],["categories/数据库/运维/index.html","95ba7540bc66ee822a4d33cff3a20995"],["categories/杂文/index.html","3f2e059cec3fefc48af8e1293f0b8c1e"],["categories/系统架构/index.html","fb287e4558065a39528dae30a8a5cae1"],["categories/运维/index.html","0139cce5fc14f3f21ad3ded3fdbdad99"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","83eabef83235e43aec0a68b09728f096"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","d1bcd4a2715350ae7729aa868b8ac858"],["page/3/index.html","33405e9b386661398e31e56bd529e8ea"],["page/4/index.html","9984f209a53446210f2d7c70ca67b647"],["tags/Android/index.html","679f9c7b8236a08b6d9e022e7aab1e69"],["tags/C/index.html","4a9ef94c5173ba01dc95ef997881bdb6"],["tags/Centos/index.html","c991ddec1137fb35f7d2a7fe8f47bc71"],["tags/Docker/index.html","477940d8f77db06d1ac1ebe1fbbfcc8b"],["tags/Etcd/index.html","b12e2f3bbe4637c709dc7d8a7390cbac"],["tags/Gin/index.html","1b1dc8274c85a9c98c8d8438f72eae5f"],["tags/Golang/index.html","f6eb3b890ff29fdfbafb956e59eee1ae"],["tags/Go语言/index.html","5299c754e272269cabb900e55bc4598e"],["tags/Java/index.html","8c2be6150c68114d21775b64eb4b3370"],["tags/Kafka/index.html","45dff679ea52daddf8f71039166d27c9"],["tags/Kotlin/index.html","c9c4d03934af135cd8b669c9f8327fc6"],["tags/Linux/index.html","71b5982e2265fe662f5a116d5b01e91f"],["tags/Make/index.html","f4ee6a194f63a6bc109953353d72fbf9"],["tags/Makefile/index.html","89ac8c589e81e16ad11d3c703551fe9b"],["tags/Mysql/index.html","f8e43499e7e80af528dcc4e4416be8a0"],["tags/Redis/index.html","678fcdf692c99637bfa50cafe5e4c2b7"],["tags/Ubuntu/index.html","87757c0c22b2cf9c9216088d5249c2a2"],["tags/index.html","42b545e99bbd613ade840ddd1ad96dc1"],["tags/安卓/index.html","12eaf165aa598b3d1c56ab74f217aec7"],["tags/数据库/index.html","7509069838f6888cf4649a7ac37184b3"]];
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







