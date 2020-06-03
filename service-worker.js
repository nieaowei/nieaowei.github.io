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

var precacheConfig = [["2020/138BRG9.html","0a1d0b8d39b8ecd91b3f7956927b50ee"],["2020/1905944.html","c73c30ecc185f292f3912362b67c6957"],["2020/1946C60.html","efe6fa40dc7111a57ef3d2f0986783ed"],["2020/1DYJH86.html","d20d9a02771d4ba6929a1fd712e15757"],["2020/1FFNQNE.html","20edd60f66cb437f590f8295ea729d7e"],["2020/1M052X8.html","df332d4cc9b69c7a9cb8b969ee83ed94"],["2020/1TTQ6FN.html","d09ce83154f53b0e16cd4e143037b2f6"],["2020/224PAWM.html","997c0185467ae5c8a97634ca46bec26c"],["2020/22X88J.html","51609025dcc694a9793ee40dd0fe7f72"],["2020/28VBK0S.html","4cb62a6b9394147b7f443623ee923cc5"],["2020/2AATQ45.html","f2347de192e255d9c5b1efe7ebc59008"],["2020/2B45ZZT.html","a0a419054be4b03a78ae750ecb66d3f7"],["2020/2EQXTDP.html","b7a5531a29907bc7f515047313a1b942"],["2020/2K0XH5G.html","811398238fc37b1f176f3340db33fa99"],["2020/2QV9ZH2.html","929acaa5437d77c5ab1bb412fe9d8263"],["2020/3EG8DED.html","a7ff7e3cb25fde15189a4d8317e4b39c"],["2020/3F6APKH.html","8c214794925acbe7bb6edd81377f06ea"],["2020/3FRKW3J.html","e9a1dde79ed9a4fe32a2885ab0c05499"],["2020/3HG63WA.html","303e81c1909775f0418179140ed3ba76"],["2020/3KDWDKB.html","7c4d18e1d9ac3b961f231bb3d138a26a"],["2020/3N2EAPR.html","ac839945d215fd3a6993393a7298eb87"],["2020/3R57ZBM.html","b6873786b40d51b0b1aa35755a6b1fae"],["2020/3SHXKRR.html","cf0d8c1f86c1706c0bfebf51b20e38f4"],["2020/3TRNKGR.html","bd317dbe133743f86618943590a6b68a"],["2020/3W9CXS5.html","c26166bf605ea0eaf9f718f3c15ce55d"],["2020/3YZQVNS.html","23004c6d49e61f9599dcff29d6083fcb"],["2020/65SJMT.html","ae928e0993e2cef0d87f456d2a1f9317"],["2020/73XEZ7.html","a2da6a8437463603dc0cf0624e4aa8ad"],["2020/8BV7RJ.html","9cec7fa88df98b3f8c180339e73b932b"],["2020/94VGB6.html","ca469583781d533cb449ff4d0568897f"],["2020/CEEV6W.html","25141d59473301491c37011ba824abc3"],["2020/DCQQ72.html","e243c0360e443d92408b138acc93a593"],["2020/FC7S68.html","98d122b1dfc612ad2a27e8c3126ea6f4"],["2020/VBR358.html","dc8a2c202f173b68bf31050808be7a7a"],["2020/YE6KFM.html","f2167857a4f4357fa1d3b17e4037983e"],["2020/ZP5TVN.html","1bddea4055751f49ed3be13578f443dd"],["about/index.html","b435a67168317b2bcec5c15c5e663c9a"],["archives/2020/02/index.html","87cf97236c393a70b4027496b81b94e0"],["archives/2020/02/page/2/index.html","84d5f1af903b4e3fc037426544c0c439"],["archives/2020/03/index.html","1f3509fd30f42bc7eb0257de8eb38984"],["archives/2020/04/index.html","a5a842c1e1652f0d33ce83db58933c8d"],["archives/2020/05/index.html","050462e0f24eba79b9dd9815acd367e6"],["archives/2020/06/index.html","a80ef6dbb00484d02a7034f59002b901"],["archives/2020/index.html","8db126ba042d88bf4939d4695e263188"],["archives/2020/page/2/index.html","082188c3a54856aec2f078c4fe798550"],["archives/2020/page/3/index.html","fd13b5bb868c48e38af18f4ee42522b9"],["archives/2020/page/4/index.html","742e6050f44877dacf0513dbd2e848c3"],["archives/index.html","03f8216feff646bb342f8cf1223ae145"],["archives/page/2/index.html","89320f56fcef05f42d230573b0cdcc56"],["archives/page/3/index.html","33145347dced9d75c64cd8ebdad71ad8"],["archives/page/4/index.html","f31d1546345a503cad56070cf2cc4804"],["categories/Git/index.html","0a65c0f12d4e4ebf98007179d79d53ff"],["categories/Go语言/index.html","ebfaa7cb069a4bfef03f5c1797e2d5a3"],["categories/Go语言/page/2/index.html","527db890b2eff830f3c55466fe575a0e"],["categories/Java/index.html","f3679434c8dce02a2b07009b06a1590a"],["categories/index.html","0a5fbad88eb6e7fee3d868e781c9dcf9"],["categories/安卓/index.html","278267666658703d91f7be8121be46fc"],["categories/数据库/index.html","dfa4aa708bba3a755a45f0f90e87014b"],["categories/杂文/index.html","c06cab70385f176f3e889106f42e569e"],["categories/系统架构/index.html","f9769a3dfe65839cd55b8e337608d700"],["categories/运维/index.html","d5172f6c88695d38b4046f76eaf239d1"],["css/bootstrap-responsive.css","9bab11aeb5bffe7a9d73da6b65c90cf7"],["css/bootstrap.min.css","b93d0342183d657f6c8acc2f9541de3f"],["css/font-awesome.css","c08369a079de54dc134eb03a84f42c2b"],["css/fonts/Fixedsys500c.eot","1b683111cb3b0b8e497307c2c723c0d5"],["css/fonts/Fixedsys500c.svg","2bf884c69a05089a20d443c1d2af2f95"],["css/fonts/Fixedsys500c.ttf","8ad84d20444bf9679cc5739424e9550f"],["css/fonts/Fixedsys500c.woff","c1fc2bed5c45c933f95903a6f0bddbac"],["css/google-fonts.css","320a76e118eb42061a1d765b9f938589"],["css/highlight.css","24a3e42ea504fa66be2a568a25b4e718"],["css/responsive.css","33c473b4914b8657878d1bd752988ce3"],["css/style.css","7db6f2b96b66564943ea507ff6503c0d"],["fancybox/blank.gif","22edb6617e829a61262a0835d85572f7"],["fancybox/fancybox_loading.gif","b6fd122d38c85950fb7ef2983f7c094a"],["fancybox/fancybox_loading@2x.gif","95f6a0022f6484b5881ab23edc4f79c2"],["fancybox/fancybox_overlay.png","a958bf5eb8e0b9858b2e36982d7cef6c"],["fancybox/fancybox_sprite.png","3281326c65831bc8791c0f4e6fb7f6bb"],["fancybox/fancybox_sprite@2x.png","62ca69190a12c7438f397a01e58819a8"],["fancybox/jquery.fancybox.css","dc016f1a0b62f6dda26b869d5ae67080"],["fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["favicon.png","ae224f772fea9d7e1657c6c5907ecccc"],["fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/google-fonts/0AKsP294HTD-nvJgucYTaIbN6UDyHWBl620a-IRfuBk.woff","a81508acd6b59ab47a3382b07a0e4901"],["fonts/google-fonts/0XxGQsSc1g4rdRdjJKZrNBsxEYwM7FgeyaSgU71cLG0.woff","46cc056af76411d81df168751d982441"],["fonts/google-fonts/2UX7WLTfW3W8TclTUvlFyQ.woff","e5d1ccfbe43c8138e553093300603815"],["fonts/google-fonts/LKf8nhXsWg5ybwEGXk8UBQ.woff","ed5a7b14dd1e89a3f68504a379663f2a"],["fonts/google-fonts/PIPMHY90P7jtyjpXuZ2cLD8E0i7KZn-EPnyo3HZu7kw.woff","07c8590b41915691a67b4a91400bef5b"],["fonts/google-fonts/UyYrYy3ltEffJV9QueSi4RdbPw3QSf9R-kE0EsQUn2A.woff","d9953bfa03dc32903c10217f5b25c968"],["fonts/google-fonts/cj2hUnSRBhwmSPr9kS5899kZXW4sYc4BjuAIFc1SXII.woff","3fa07b129b7040df155f981a2003603a"],["fonts/google-fonts/lILlYDvubYemzYzN7GbLkHhCUOGz7vYGh680lGh-uXM.woff","85860ff9050cd150f275446b03492da6"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/github-sprite.png","949bcf8f897aa31c3e45d84973a40ceb"],["img/glyphicons-halflings-white.png","6b478889829531d5bf5642c0638745d3"],["img/glyphicons-halflings.png","26b9f3c02274408809440ef44e64e573"],["img/grid-18px-masked.png","c2b99646704cdb111f60ff272bf5fc6e"],["img/grid-baseline-20px.png","d2e99d2770a4af182f7d65932bf7059e"],["index.html","11e50109845963cb10af74bd3ce9bef6"],["js/bootstrap.min.js","ba847811448ef90d98d272aeccef2a95"],["js/gallery.js","565e7c95706714d0474681702e0f878d"],["js/jquery-2.0.3.min.js","115fd57f494ba572e47b385d2aaa5115"],["js/jquery.imagesloaded.min.js","b96764c4154740d9ba66b375ab680524"],["js/main.js","cdb11f49f7a7076c946e79a7128cd642"],["js/search.js","c7f078f8354814124158f263af40d93b"],["link/index.html","d86356b3f41f2937da858bd8ed41d255"],["page/2/index.html","d4aaee5388a949c44298d7f1eb93b83b"],["page/3/index.html","873ce23af18cdd871b9c619837eaee27"],["page/4/index.html","9f92e2819a98ca7b8f2e1eef4aef1851"],["tags/Android/index.html","b7f0d364f360d2a08a20dd660ee1c4db"],["tags/Centos/index.html","088072b057a650c537a940cf5ac9a775"],["tags/Docker/index.html","978d602bb3494ce1dd5ae296ed2bfecc"],["tags/Gin/index.html","2dab104f575bc9473b4ed82ea17f511f"],["tags/Golang/index.html","b66ec36bdace22651e33343a8badde38"],["tags/Go语言/index.html","b6abbd2935f4d24a381e329dfaa31746"],["tags/Java/index.html","862ed39fa86e3d5e757039fe06f49177"],["tags/Kafka/index.html","f2c9ed3c311a25c3c8614d5737fcd48b"],["tags/Kotlin/index.html","b995b99c2e762691fa467c3ee4ff0142"],["tags/Mysql/index.html","a24e55aea64ffaf5304466e2ff8d2933"],["tags/Redis/index.html","fd392369e83681847590c50a91bfd25e"],["tags/Ubuntu/index.html","a778199b9ae05a1d8a432aab5f64ad1d"],["tags/index.html","edb9b34af18eca5b523d3d3b769026e5"],["tags/安卓/index.html","e8139a68475328f6820bc696d085f9df"],["tags/数据库/index.html","7e535850b9c435679b41902d2d527a80"]];
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







