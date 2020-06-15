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

var precacheConfig = [["2020/138BRG9.html","124b8ceb0037c58fe7f57a8f130a999e"],["2020/1905944.html","52ad845c7e9a504c84d40cce769f2549"],["2020/1946C60.html","52dae014142daf622a68ce01c1ad229f"],["2020/1FFNQNE.html","6443125350d7bc5826be7fa7c1a8cb38"],["2020/1M052X8.html","9fca390b6a7330c0d634929103e63081"],["2020/1TTQ6FN.html","168e0c4803c8d9ecc2b751100d29952e"],["2020/224PAWM.html","8872286f1b6e0dc8b7430c330a2ea8ff"],["2020/22X88J.html","375abedd7358d3e45f520d7573f05855"],["2020/28VBK0S.html","b362e5f4aeff8930b68079e7f00ccf6d"],["2020/2AATQ45.html","1dc7d3f2e452f7476445ab5e63697f86"],["2020/2B45ZZT.html","7fae63134d27b03485cadbdf0ca72902"],["2020/2EQXTDP.html","de4fe5a07e894e6da74ab20b27090633"],["2020/2K0XH5G.html","0eb757a09285362cb6c4b8d8d988056f"],["2020/2NK8Q7N.html","b1d7c80b82d0a5bbc98e98b80f20c01a"],["2020/2QV9ZH2.html","a06945a9599311cef022094487217686"],["2020/3EG8DED.html","2d897002b5dd4428c8daa1b66f37393c"],["2020/3F6APKH.html","5d4f8647cde3255eb1131dec6fd820bb"],["2020/3FRKW3J.html","59700d22dfdc0d5baa0cf79f941f0e97"],["2020/3HG63WA.html","e2d97c2d371c695f6ce89edc6dd54bf0"],["2020/3KDWDKB.html","dd8e725ad25be6e73269299769cab951"],["2020/3N2EAPR.html","9632c408cb4407385a1afe08bb15bebc"],["2020/3R57ZBM.html","8472e1d9f36113660db48d6c30ab7f63"],["2020/3SHXKRR.html","893e38351044f8f803ae8d13b8112420"],["2020/3TRNKGR.html","01b54c39649d5bdc96f31a6a1d4abe73"],["2020/3W9CXS5.html","03fa872eeaedef218508619b217f9665"],["2020/3YZQVNS.html","b9e04987ef4b0d7c9fe78c1dbe31f1a5"],["2020/65SJMT.html","985ebaf8c2c42d59b74c728a954cb532"],["2020/73XEZ7.html","3a55950339ae416a13ed1644a25e2614"],["2020/8BV7RJ.html","3b16e53e7e3904755d75c902318b07ca"],["2020/94VGB6.html","e3d2a3037aacdb28ddf9f23c3f0eb017"],["2020/CEEV6W.html","473bdf1d7febc252010f3727ae7e1508"],["2020/DCQQ72.html","d4b57020281582c68537834973ee52e6"],["2020/FC7S68.html","5e3b65b15ceb55c335c84552fc359c97"],["2020/VBR358.html","2246e438640d1e9fc074eaca66532019"],["2020/YE6KFM.html","3a3d7c6208dd82c4349697d6633311c9"],["about/index.html","54f345ccdebc669ad95da8459b25e844"],["archives/2020/02/index.html","b38744d4417069138b9cf530cbfd9d2a"],["archives/2020/02/page/2/index.html","592ead02d9c0f421dee1980c0425d103"],["archives/2020/03/index.html","e9262959e6e9e316ebad2d84cbb91122"],["archives/2020/04/index.html","cfe499a842e7fce1e1d3195e61bd57ae"],["archives/2020/05/index.html","5ce2c4b2a5e8b5f35faea13bcd47419d"],["archives/2020/06/index.html","8b6b1b91f7517d4f33d235e471b67b76"],["archives/2020/index.html","94969197c3402b899bab19b16382819d"],["archives/2020/page/2/index.html","02e8348d7b6b7fe423c9925dde851015"],["archives/2020/page/3/index.html","ccf7fbcd27e8a71a2844b61254655c53"],["archives/2020/page/4/index.html","8c140bb869a1964ceb437f6217866ba5"],["archives/index.html","7df1277909251aa2b418260db0e897bd"],["archives/page/2/index.html","2d7d00e62abe02cb9d2d063c57b80b1c"],["archives/page/3/index.html","5dccc7c89d79404cce117de9faabcc7d"],["archives/page/4/index.html","00a77e49e72eb0fe813d382584ebb1d1"],["categories/Git/index.html","20a3b102a2781cfac785bccad7074d5c"],["categories/Go语言/index.html","40004398dde3f965db43bf8f92708773"],["categories/Go语言/page/2/index.html","df70daee63a9d39eb7e8840335276526"],["categories/Java/index.html","d53de044074e63269b79253622ada931"],["categories/index.html","def87fad3e5675acebe6fe5d7f5b50d8"],["categories/安卓/index.html","ec408075d2666c196529e1c2473c3c76"],["categories/数据库/index.html","0505c2239b61a9bfa64ffdeffafcdfba"],["categories/数据库/运维/index.html","31a2a835187885bc98b9a57666825c1a"],["categories/杂文/index.html","232073f9965073b4a973f9065c68f5b9"],["categories/系统架构/index.html","6d0e2d649074484f6185bf6e3a9b793e"],["categories/运维/index.html","834dca85ff535aae63f820838bd0b1d0"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","398d3d26bc6dff514893441808f977a1"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","a8050382aeee8aeea95a6e599639c71e"],["page/2/index.html","ae9b0965b35baa075580edb329a2d31b"],["page/3/index.html","5b7599bd38a92d2b13f1e61733e40949"],["page/4/index.html","773ca9673a611a978e27a276f3850634"],["tags/Android/index.html","cad33aae891be539ffe2708c6c6dd593"],["tags/Centos/index.html","072cf77443dacd43393c2da6d8361ef1"],["tags/Docker/index.html","8e1c139c9877a1d8736b611a1f10e78c"],["tags/Gin/index.html","dd2e569d591479ff8a4fa93bc10af4ca"],["tags/Golang/index.html","a9c368ffa3df77abeff47b8b1480bb4c"],["tags/Go语言/index.html","ab9d27abc390ea79d3ebb6b8b426a4cf"],["tags/Java/index.html","d378fee1f03410ea534d644bc7af78f5"],["tags/Kafka/index.html","ced2b3000fd6285d7e91d4dc27ec02a7"],["tags/Kotlin/index.html","3fe95d24c1cc5e76207d65379e83f6bb"],["tags/Mysql/index.html","d753b9d5c9d6899ff1f08401e9c6d452"],["tags/Redis/index.html","751ec15ffad75f8cd9748dbf04f6f899"],["tags/Ubuntu/index.html","7021fda841d5899da0492e733887461d"],["tags/index.html","cf7ddb3826161cab7b240e99635b0faa"],["tags/安卓/index.html","0b0f36b265dd47684c8d82aef4950b1f"],["tags/数据库/index.html","cbd072947f95cfef78e8267a97aeb28a"]];
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







