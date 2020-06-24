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

var precacheConfig = [["2020/138BRG9.html","bbcdfc5269a713bb38d32760ec8cc5b7"],["2020/1905944.html","9010d836bf7c04a4d45094e56b9d0941"],["2020/1946C60.html","415d1f8d5ca40c94072926f7fe8e9eeb"],["2020/1FFNQNE.html","bb3d362cef4edde7a75030c665e7c1fc"],["2020/1M052X8.html","fa5c034631707b83a8d8406c1fd7c1f3"],["2020/1TTQ6FN.html","6740674783dd6104f889a626678a526f"],["2020/224PAWM.html","249f4f19982c715507557ddd722e13d6"],["2020/22X88J.html","33478662ee1e4cdc7452214ec9bbb481"],["2020/28R01SH.html","d9d0bfa90cd0e0ebfd275ba5b126c504"],["2020/28VBK0S.html","4e8401157cbafcd608d3fbaee15c4bae"],["2020/2AATQ45.html","abfdd6cfe73b21621141e26f2bf7d2ea"],["2020/2B45ZZT.html","ec235bdd424c5c9015c66af0a10605a2"],["2020/2EQXTDP.html","b8ad3636630c456fb761233a93fcda3a"],["2020/2K0XH5G.html","98dedb14bf4b084c21462f2b7eeed884"],["2020/2NK8Q7N.html","ea5c980fcb9c2ef9d87063019250f1bd"],["2020/2QV9ZH2.html","923859deaf57968eb52ed463df3d6e3a"],["2020/3EG8DED.html","bbd6527bf5caa17ce734dc1658809114"],["2020/3F6APKH.html","42f04dcf2bdc4780b84da9577e11c232"],["2020/3FRKW3J.html","f2c7feb5c29fd6d180c4ea96d00e1a4a"],["2020/3HG63WA.html","d560155fc1452ad3e2e82f5d08f2f0f9"],["2020/3KDWDKB.html","2751b99db52f191b9906a6924ce0ca8a"],["2020/3N2EAPR.html","863733a600b32055e786fc5492c3ca73"],["2020/3R57ZBM.html","8827b175c7c49b58ac114b4f5904215e"],["2020/3SHXKRR.html","ebbfef4915a9e013999893ac21a9f174"],["2020/3TRNKGR.html","04c5e21eba77f7fdc9242f926bf58ce0"],["2020/3W9CXS5.html","1ff9b17d5d492d75256a8764482c5adf"],["2020/3YZQVNS.html","364676b438f700c8d82898a680a294aa"],["2020/65SJMT.html","65a3359c00f5d48ade580929b0ec6365"],["2020/73XEZ7.html","c4ea580e32444593c3dfc6b1e0b8c209"],["2020/8BV7RJ.html","e8ce1a58c95839f53f767fab8badc39b"],["2020/94VGB6.html","bda30a89b3515287c8a34d2f30ab2322"],["2020/CEEV6W.html","2e9709df5e40217d488e54baccea45b1"],["2020/DCQQ72.html","2eb3f4f9ce417890d9cda28f106370f4"],["2020/FC7S68.html","d710d257e85b24c875d91f850eac9ddb"],["2020/VBR358.html","75e540def8edee473e0209c4f579d423"],["2020/YE6KFM.html","7648f1977c09540f005e393666b320bf"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","3de9437375840bbf60fd4c6b3c905de5"],["archives/2020/02/page/2/index.html","25811c8c93218f4d4ae45eda0cc3a08f"],["archives/2020/03/index.html","8fd03046a118b7f16b125f9d17ebfadc"],["archives/2020/04/index.html","5ed55fd0e81c98f339601877ca9ac043"],["archives/2020/05/index.html","37b96bd3865089052b9bd345bc2acdd9"],["archives/2020/06/index.html","89e861180079ce88920ad1c08fc6f58f"],["archives/2020/index.html","48f30c5600b80c0519988739a8e24c6c"],["archives/2020/page/2/index.html","3a88a7953c744886b562c37459ec58e0"],["archives/2020/page/3/index.html","b73efbf8e6055b0f68a7f8bc29e7a670"],["archives/2020/page/4/index.html","a615bd2a5e56a336a53ea051241cf3b8"],["archives/index.html","0cb9be5d6e7d8b2b9175c63baa43c75b"],["archives/page/2/index.html","89326879c9d68651c53e168a30fc3389"],["archives/page/3/index.html","2c65885c7139a17cb7f98c4a7486f03e"],["archives/page/4/index.html","6392b21703cd980b7d76ffad79f1f02d"],["categories/Git/index.html","e48aeea02b4dbc47243e4cddebbfae0c"],["categories/Go语言/index.html","41c7a6a292ee8561a197f7aba4576079"],["categories/Go语言/page/2/index.html","0bafbe367eedc40551a0f7546841783b"],["categories/Java/index.html","6dfc1a5d5f50e72c6d20eb086599feaf"],["categories/index.html","ff4679be9c39478fc168dc9ea48594bc"],["categories/安卓/index.html","cd46ea1d6c0ad3ad957e9a16d094a365"],["categories/嵌入式/index.html","62cee3b78c9283174576fcc5d03491ff"],["categories/数据库/index.html","bdc4bd86945a36c82a099e9da93e50e7"],["categories/数据库/运维/index.html","eefed8b5a7c538a20ac4713962c9adb7"],["categories/杂文/index.html","47a0585904e6584c89d5fe1b80e85670"],["categories/系统架构/index.html","cec8cda35c8414d7f15657262890ad1d"],["categories/运维/index.html","e857f724462f13b9c428605ab873f16d"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","af3e7622c849ac9c8f7d7059db1c61b0"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","1abbe9dcd244d784d5f1ca2cd888696c"],["page/3/index.html","335752accc80047ca664bd45e1be20fa"],["page/4/index.html","9e24539f7c9e4c27339816bc43d7678a"],["tags/Android/index.html","02fb13ade602a35bc7ac0e8b8df9a578"],["tags/C/index.html","2d6ece6ee79665a314a2e9b6c344aec2"],["tags/Centos/index.html","bd3e8c19113806749afcfa4d9e0fa079"],["tags/Docker/index.html","9127709664aa49a1d9b9a278db0fdb38"],["tags/Etcd/index.html","f455b1d12f99ec1017a610e58c0e0ba8"],["tags/Gin/index.html","c741436d4ea15a859c159d4ccdad21ce"],["tags/Golang/index.html","49f62c0d85fcf8656bd98424d34bf82e"],["tags/Go语言/index.html","84b5ebedd4cc3350e3fd61ff49cff306"],["tags/Java/index.html","5529dd2b7ef10e8034e18d16dba06742"],["tags/Kafka/index.html","12e8e82a401f2856c33dad95a38169c1"],["tags/Kotlin/index.html","6c4dfdcb0d1c6c8b50d61c15bac4457f"],["tags/Linux/index.html","eeef063d0e97e461673c1a2d099b47f7"],["tags/Make/index.html","01b6c15856937eb67a73a62412a83579"],["tags/Makefile/index.html","4d5608442f62d4ca7548b6563d6f3ee5"],["tags/Mysql/index.html","5c43cef4813eddb49a8f8a19cb29078c"],["tags/Redis/index.html","80e58fd2a7b1bc060a39b81f4e9229bc"],["tags/Ubuntu/index.html","a2784ee74e6815c7c91a11e0d1c6ba31"],["tags/index.html","f1dfd1bd631d70ca6e966d315fc6149b"],["tags/安卓/index.html","1540e585ad3c2c0c1ffbd2ed847e6610"],["tags/数据库/index.html","97903d326e5fcc0bafedbd6367e2b1af"]];
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







