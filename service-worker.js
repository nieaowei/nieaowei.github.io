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

var precacheConfig = [["2020/138BRG9.html","3a25ae4793f651edaa70fbf438913ad3"],["2020/1905944.html","5bda26ebe116e4a2fbd15b5d42de3328"],["2020/1946C60.html","5553abbbae0c3c483d8afd5b80638ecf"],["2020/1DYJH86.html","413dbf4b847aed4244c238652ef969e2"],["2020/1FFNQNE.html","2939d7995444c308a4a0a9dfd463c6d0"],["2020/1M052X8.html","d6c503eb3512c43cc3ac1acf441a2fe0"],["2020/1TTQ6FN.html","2bf8c9a7aeb81f66930c047b9163a317"],["2020/224PAWM.html","53ed24519f0d8e4ddab9433a67d645de"],["2020/22X88J.html","4a2bccc724d601b9a8371aacd6217999"],["2020/28VBK0S.html","e7203f85d09e9a9bc9df098daf36584e"],["2020/2AATQ45.html","cbbf927607a2a5ef12f6f1fcbe8681c7"],["2020/2B45ZZT.html","3d2ef24ed8e71b6dcd72e50a66116f21"],["2020/2EQXTDP.html","f5c6e60ec43fbabca9f2fc8dcfd9f438"],["2020/2K0XH5G.html","5d233d662d91d06818639d6f6954c967"],["2020/2QV9ZH2.html","9972ebd29765292064b77f2b9e9bea31"],["2020/3EG8DED.html","590c4f9e4c9049a154d0fe6102018a11"],["2020/3F6APKH.html","b01851daa54347e70cd8d1a68a03a86e"],["2020/3FRKW3J.html","8be39fc260af0e8ba740a11d90098647"],["2020/3HG63WA.html","7fea5df3c32a23ab93ef20c276c43927"],["2020/3KDWDKB.html","2f54043cc9b9c630c1ede8780113e706"],["2020/3N2EAPR.html","29fc2aaef4de88620ef2248a6cde1934"],["2020/3R57ZBM.html","69c630f1d26399df696a271764717c75"],["2020/3SHXKRR.html","9319e0f54d8fbea6812ff8f6a5b4e284"],["2020/3TRNKGR.html","7486ff2f8daf64f89372983c7fc764c6"],["2020/3W9CXS5.html","e75ab74d0ffe6df3e2ddf1c52828a88c"],["2020/3YZQVNS.html","fae8de441b20c45a0bdc662a85988ca8"],["2020/65SJMT.html","7b64ed9571bd6b258a1dd55e68fdb4ee"],["2020/73XEZ7.html","9f008117f5d84d3f49a18460178c0493"],["2020/8BV7RJ.html","9f40d5e908db69cf8ad7485128c541e2"],["2020/94VGB6.html","f4f60daa4116ae3f6117d2aa0431994e"],["2020/CEEV6W.html","3e4673d3ae801ad37737f2b6e5581505"],["2020/DCQQ72.html","a0bff02ca2004dc72bc7025569823ed0"],["2020/FC7S68.html","428fec41808db4ce54d38db141e76925"],["2020/YE6KFM.html","1d8d0f6a6bfad15c0a2dd7df55404c19"],["2020/ZP5TVN.html","4abc799e7af2e2645650e85f9ef68d47"],["archives/2020/02/index.html","7a1245292fb4b16a71eaeeb41cc04eed"],["archives/2020/02/page/2/index.html","67fe5328972efa7dbf1e72c23fe7a01b"],["archives/2020/03/index.html","23230cd7f7574966c33a385fe73e9985"],["archives/2020/04/index.html","8f5b7de618f260baabb04f7b059957ac"],["archives/2020/05/index.html","f783af4d77174bb55ab9359fed330024"],["archives/2020/06/index.html","4ed4fdda52c994767ea220e3ebbc63c8"],["archives/2020/index.html","b729285aeaa837ae048335f515ce2165"],["archives/2020/page/2/index.html","2ff597f8ce5db47586ee63b0ce8548cc"],["archives/2020/page/3/index.html","1645f1fb58584891aba8299c60049294"],["archives/2020/page/4/index.html","9b79a8a2e5b7321fc18abc0ec4cd75c9"],["archives/index.html","54b9c9b12841c69562fd4e2d070d7a5c"],["archives/page/2/index.html","548ce88e0fa58ce1327f6bda114add49"],["archives/page/3/index.html","010298518f83427b8c51a115ed5c1c67"],["archives/page/4/index.html","3ba4fc4dc2754198057abe608f18cc5a"],["categories/Git/index.html","bee84b3fd4bdca436a69d89d41aa9a3a"],["categories/Go语言/index.html","7f7659ac8e371da6191268c61355c9cd"],["categories/Go语言/page/2/index.html","a29fe34d3d1795ac715171f602b94612"],["categories/Java/index.html","d6e92f485011816ee4af2c504d406ae1"],["categories/index.html","b6fb19891f6987410ce97bd022640799"],["categories/安卓/index.html","a842a00625b47bb6a3d717783e66ff12"],["categories/数据库/index.html","2ddf95ca098df0b45a188d3fe0a179a6"],["categories/杂文/index.html","00cca35aca47080dd3be619a3cb01705"],["categories/系统架构/index.html","7d1200d0c93254f62a5b94d5ed764e5d"],["categories/运维/index.html","3dc24c2a51f7bd6aa83403be2cd090ef"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","ea1102acaba72bcb0004b3bcf9e145a4"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","4764e37b14827b2082303f410335bd22"],["page/2/index.html","a89e1d61c64658b33713a0c6189ac5d8"],["page/3/index.html","e47991f1881004cc3e2580c4e3346d41"],["page/4/index.html","af56c72001d93c02d96239f06f89ff1e"],["tags/Android/index.html","0a124c278445aa53950fff702dce1cb6"],["tags/Centos/index.html","048604c1e8a236284b7d31c986c09594"],["tags/Docker/index.html","c9f784bf28885b4e6fa150e115840c7e"],["tags/Gin/index.html","c530cda12eac408836ec58ac5bf77d63"],["tags/Golang/index.html","aa71fb38bb616309bb330da7da81c0c0"],["tags/Go语言/index.html","329466894e8c5e43497864b2ef4ad955"],["tags/Java/index.html","44b25fb951949479b0db04c3dda97807"],["tags/Kafka/index.html","42f92d3876397bd0ad7d69546310bc38"],["tags/Kotlin/index.html","a8a8be0cf7300db090d0ef4c551fce4b"],["tags/Mysql/index.html","658d038a6b1264d9edc88802eb8c4ad2"],["tags/Redis/index.html","3eaffede97a050ef8931244c8c45bf8a"],["tags/Ubuntu/index.html","665c2e9f62caabdbf70c8a7ea080016c"],["tags/index.html","b6194969463153014f91927f8ab2c080"],["tags/安卓/index.html","01a6b0b7513bc0ef4deb19508d3b783e"],["tags/数据库/index.html","5b1c8ddbd02660bece44cf5952ef1c89"]];
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







