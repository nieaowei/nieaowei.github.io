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

var precacheConfig = [["2020/1905944.html","69671b53cc3ec1de2ce0ca292b2cca4c"],["2020/1946C60.html","8c7339b0b7f50ad47e19cc109d3de4e1"],["2020/1B5R51M.html","4e3c2cb3151361dc634430f2af6e369d"],["2020/1DYJH86.html","ab65ff2866093ea644e3fbc1362155b6"],["2020/1FFNQNE.html","d04112815cfd7b98ced083e0fac8c9cf"],["2020/1FRBXF8.html","bf9bb37d2ea9249b0db70f801185ca8b"],["2020/1X1JYEX.html","0f3c8696065bcf3a9426c9d2797647a3"],["2020/224PAWM.html","2207f2abe5b1de9ed4133a3958a9b41f"],["2020/22X88J.html","b20de8650c273a716957fd8ddef6db83"],["2020/28VBK0S.html","0a42fe11afd7c1bb61cc7b82b599a7d9"],["2020/2AATQ45.html","2fb54101590421e1e44029c09a615413"],["2020/2B45ZZT.html","1ddf9955fbbd9cb2fa5f74569e559425"],["2020/2CJ51QS.html","45d793216bdfb09cf74d97f48361d802"],["2020/2EQXTDP.html","57fd83c62e310815a0d8b3d232dd854b"],["2020/2QV9ZH2.html","8767ded952abfc0465fa39805c42a4f9"],["2020/2ZN7WDK.html","4bfd779ec7f03e5267d2d81322c3fef0"],["2020/3C7YZGC.html","1fa75944ab04edb4770947de112acfbe"],["2020/3EG8DED.html","190018d463163412fc2649f8f8e08fde"],["2020/3F6APKH.html","e5d655c2274efba35ce633642a328d34"],["2020/3HG63WA.html","b1e681e9a12768b1b3ba6083e134c399"],["2020/3N2EAPR.html","cd94f2f695e2edb8bb571ced068e7bc1"],["2020/3VJHNG4.html","24e6fc03f67778d690839e67074d5f3c"],["2020/73XEZ7.html","b46f10e9ca7870c545031507e0e070a9"],["2020/FC7S68.html","053258103534de76a3b7ddc20aa22b56"],["2020/FEJ92A.html","0f39b436c21a509e7e79291a04b4e079"],["2020/TKXNFM.html","31c9350e5c3d21c970adbd8a94119331"],["2020/YE6KFM.html","b07d3d8205dd5b035382ea2edd743a7f"],["2020/ZP5TVN.html","8d4bc997620dec4c51ffe259636a9581"],["archives/2020/02/index.html","216fce82e9833efd5921d50683c1b0a2"],["archives/2020/02/page/2/index.html","c7bfca40f3f96c0a0ea91297ce458563"],["archives/2020/02/page/3/index.html","fc20af0289265e80d6c16b3a61912ac2"],["archives/2020/03/index.html","85a70592ffe8905e67eaf2ec954be30e"],["archives/2020/04/index.html","1f3b180ae030e1e909d345296c394c91"],["archives/2020/index.html","8f5f043f086c639da4384c9991350630"],["archives/2020/page/2/index.html","4c19b0d97ec379282bfbdb78f6ecb0ba"],["archives/2020/page/3/index.html","e7361feea580f21770e120ce84ef5758"],["archives/index.html","90eabab0b371f100cc75742d50673bf5"],["archives/page/2/index.html","d10b406e015317153851a6bc9e72dfb5"],["archives/page/3/index.html","0655dced4e522ae02299a44fc0f5ed64"],["categories/Git/index.html","0b28962bb569711dbe6586a07b44c92b"],["categories/Go语言/index.html","8a646660ca4dd1929250b6e39cdcc0d6"],["categories/Go语言/page/2/index.html","de867990960a484b99ff4871c2366b3b"],["categories/Java/index.html","821ba2ceb94f7873ad7de1a6562c5b09"],["categories/index.html","99b185d7a2117e8f23eacea9a6928456"],["categories/安卓/index.html","2002205c57f1851b8f9ae65159be9fac"],["categories/数据库/index.html","09ceb1683939a40b4f256a23cdf6f7e5"],["categories/杂文/index.html","6600bee96c12ded31f894296212c7c55"],["categories/系统架构/index.html","cb6c9581fad48da482a93a7090112bc3"],["categories/项目/index.html","9810d244d5480922b435f4de0c04a69b"],["css/index.css","15bc6fa8074a3813cd2eed404d4251aa"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/index_background.jpg","2e924a4a51fdf3e0a1c9f8fa9e841959"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/icon-128x128.png","18a2913f6839862d7f83964bbf51abb8"],["img/pwa/icon-144x144.png","945dc212944e415679af724c4d847a7b"],["img/pwa/icon-152x152.png","cc2b8e9be84202cd325e71da2552a53b"],["img/pwa/icon-192x192.png","8bbf950e5fbc1a753ef3344fabbeda04"],["img/pwa/icon-384x384.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-512x512.png","4293bf09264d3c4d04baaea63409233b"],["img/pwa/icon-72x72.png","4294db9d2c4c9256e547b576ab3cd79d"],["img/pwa/icon-96x96.png","f4f769183d2d2397f52ef02f9258cdba"],["index.html","0aa03eaf4c2cdb1eba779f8e837fd91b"],["js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["link/index.html","54ccbdd4672fe8ec93e58f25a2d2cd51"],["page/2/index.html","33b27d12c43523ccd73ac3a8758585f5"],["page/3/index.html","6b4c10928bc595ff3b155fc06fc24863"],["tags/Android/index.html","54699757c426c64930226c46c5321771"],["tags/Centos/index.html","acf73e205d4627ba3db94218ede82717"],["tags/Docker/index.html","b0f1ee4386c8ac0980c554792fba6e01"],["tags/Golang/index.html","b323c04109b6567fe3164f7b3a6566d7"],["tags/Java/index.html","5bc02f04025e032c0f5b384fd5441ae0"],["tags/Kafka/index.html","5129e448f753405e9c2bdbd2268228c2"],["tags/Kotlin/index.html","9e7ce914ae9733f26469a5fee0b28600"],["tags/Mysql/index.html","eff45ddd727a2a521d88879b0975e89d"],["tags/Redis/index.html","b2c1e9d4b24b393ebaba67df3a92ba5c"],["tags/Ubuntu/index.html","2094c054c1277546bc42a723652c6b48"],["tags/index.html","51495dbb054d24bac69619b9e8526af1"],["tags/安卓/index.html","e00f547283b353506f4cd28802b9c9bf"],["tags/数据库/index.html","7bde785495d044cda1a721bd502cfb43"]];
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







