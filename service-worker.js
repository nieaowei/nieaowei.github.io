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

var precacheConfig = [["2020/138BRG9.html","fb311087a0a1a93d66229f9786cd28b4"],["2020/1905944.html","2e2ee4450e9cdddd166349f2f6aa2d67"],["2020/1946C60.html","0a85d2d059d2ca80ada141b46408600d"],["2020/1DYJH86.html","5c4b44da820f24007c40c74ecd7600ce"],["2020/1FFNQNE.html","fc5958672e36c84f7450c1a8fe7cf113"],["2020/1M052X8.html","7038ddd647ed8bdc67ea51ecb52b3f8d"],["2020/1TTQ6FN.html","af269388966883b20129ab6b5bd182b6"],["2020/224PAWM.html","9c1948c679f02edef123217dc3d0d395"],["2020/22X88J.html","68309a3e00b476e8bd9aa443280e8aff"],["2020/28VBK0S.html","396e49aac1e4db97d3a86610d866f64e"],["2020/2AATQ45.html","12307de94fcbcc302d24d263b6b2c154"],["2020/2B45ZZT.html","17851345092df9ee57cff80220d6f420"],["2020/2EQXTDP.html","4aaf052a94bf96402ba95d6435bec129"],["2020/2K0XH5G.html","7492e8f0a9a278a79519e0452272e752"],["2020/2QV9ZH2.html","689109ab52cebb6ae3f95584c32f45d7"],["2020/3EG8DED.html","0ca85c589b1049a91af2486f04b5f1ea"],["2020/3F6APKH.html","63b7e49a7afa984e9b97a747c64f9cf0"],["2020/3FRKW3J.html","98e4e64b0f712b5ed87d4db63c1116bb"],["2020/3HG63WA.html","7add186c63ead2b6529a4f97deafe7e3"],["2020/3KDWDKB.html","50036f30bad4433c5b49c2342c1642ab"],["2020/3N2EAPR.html","ddb5d23b3fcf3ea6676c715c9e4525ae"],["2020/3R57ZBM.html","cfeb2a223131faa9217b4b9c9341a0ec"],["2020/3SHXKRR.html","e7ae34e1fb79bc26fe9932a5a843a222"],["2020/3TRNKGR.html","082eb383f2f740d42259f27f4ca39768"],["2020/3W9CXS5.html","75bc421da35cfd029243625bb40eddf5"],["2020/3YZQVNS.html","138e6b6827e11581f645de9c0358452d"],["2020/65SJMT.html","cc3fa0cd804163cb835db046dcaf9142"],["2020/73XEZ7.html","13e6bbde4ec86a6c5c8a715f51fca9e5"],["2020/8BV7RJ.html","97367e13b4cb9f3eb38dd1a6a4e81c70"],["2020/94VGB6.html","1b72f5d5527451814c553e14c7b06311"],["2020/CEEV6W.html","17603a4150526487035c9f193ca41596"],["2020/DCQQ72.html","09774338ceefae7952dc57fb23ddaf35"],["2020/FC7S68.html","dab37d658aa5824103805e707fb72516"],["2020/VBR358.html","19a9c3c8977bc31fc7149f3ad16eb0c9"],["2020/YE6KFM.html","ef81b4a48895a247cdec044cead3b56f"],["2020/ZP5TVN.html","78b44405efabcf06994148773e66aab5"],["about/index.html","069223e6ed3f5cf339342ea710cef391"],["archives/2020/02/index.html","fda7246081b639743b242a756bb32b50"],["archives/2020/02/page/2/index.html","c7dab1eee35de86a0c094d01670d11f6"],["archives/2020/03/index.html","575a646b4c96930d7e499983ecdadf7d"],["archives/2020/04/index.html","49560c5e5143930501532b4eed5f80f3"],["archives/2020/05/index.html","170d0af137cdcd5e062ad783426d59b8"],["archives/2020/06/index.html","612b0775f9698318a553adcf9bce67b8"],["archives/2020/index.html","dcbfd2027f50ed184b4778c06a9ff858"],["archives/2020/page/2/index.html","a987de8e4080ede1747356e215fbeddb"],["archives/2020/page/3/index.html","2a45cfc38969af0fe8853b772e58fcdb"],["archives/2020/page/4/index.html","8c6f80b44e3cfeaf5ca5458fbe3fb058"],["archives/index.html","2fd70e8a4fed71dbe2e9406840a21ba4"],["archives/page/2/index.html","6698094ca0f251044793c9b583b2aac8"],["archives/page/3/index.html","0cfefa3f1073b48752e11291c7d690e0"],["archives/page/4/index.html","ab998f94dc3c7eb9bfce750c90fa5a3b"],["categories/Git/index.html","83090bdf10dd47b432ff3b681c140928"],["categories/Go语言/index.html","54da783dd9b73d975a3d664da1752c31"],["categories/Go语言/page/2/index.html","4f214c11c34a42b7130a523ded081742"],["categories/Java/index.html","adea10e02ece0550f073a670f0f0be0d"],["categories/index.html","795a4d553b1eaa095dd7939d74e30dee"],["categories/安卓/index.html","6a37797be58a0efeb810e492bf0ac8f5"],["categories/数据库/index.html","172499e286bc3c89a77a2839577d46f6"],["categories/杂文/index.html","ec580f16932806414f297d0b1c7b4e88"],["categories/系统架构/index.html","40aaa96d503428e2a2d7ccbb4aafe532"],["categories/运维/index.html","76f5124afc10e7a07e2d20e2d853ce82"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","ac526a6737188468f45476c4d8f526ce"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","08f682d7041c335d8f193562e85919c3"],["page/2/index.html","66b1cd2c84f18c6218762a9fa5d22b32"],["page/3/index.html","849f53ba9a8193a9da7fbfcdb03fb674"],["page/4/index.html","6bb3dc32a9ddf39cecad9fdffb3282b3"],["tags/Android/index.html","ff653ee9dd7628c469bc9d5ab12987a6"],["tags/Centos/index.html","01dc30cc744de19e4af737399375a5be"],["tags/Docker/index.html","c88591e86620fee0eda46b3a96dd83fc"],["tags/Gin/index.html","63f8e8179b13c7a08dbe02d6af9aec2c"],["tags/Golang/index.html","42874e5a6e8bc2984e12e8875de40ac9"],["tags/Go语言/index.html","04415ba302f9b8459524542ecda23893"],["tags/Java/index.html","7f3560684d919090251bf4d995541736"],["tags/Kafka/index.html","4e1488f23b69cf73b4b108512c80dde7"],["tags/Kotlin/index.html","f0e526503a76fc06ec1731770abb45b4"],["tags/Mysql/index.html","defd378fa36ff8c332af3c844eea3b08"],["tags/Redis/index.html","3653ecdbdc77b524690a9ea1a441c16c"],["tags/Ubuntu/index.html","fd8f16be921b70429a1cd573309b5e9a"],["tags/index.html","87bdb0c29cf066338593db952882823a"],["tags/安卓/index.html","ec51c46d2ba934a7921d60647605f502"],["tags/数据库/index.html","22a74afa5088594f4cc7e0561e92c11c"]];
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







