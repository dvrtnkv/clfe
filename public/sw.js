if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-760a632129fb1e62.js",revision:"760a632129fb1e62"},{url:"/_next/static/chunks/675-760a632129fb1e62.js.map",revision:"419d6b28b97b575ec4162b3e3d7746d2"},{url:"/_next/static/chunks/framework-654b6047e3d0e6e1.js",revision:"654b6047e3d0e6e1"},{url:"/_next/static/chunks/framework-654b6047e3d0e6e1.js.map",revision:"06c93f4d31c6ef96f817614555085e47"},{url:"/_next/static/chunks/main-fa989f7fc7425c8d.js",revision:"fa989f7fc7425c8d"},{url:"/_next/static/chunks/main-fa989f7fc7425c8d.js.map",revision:"9d3c3e676cdd41573621f9e2cb781f04"},{url:"/_next/static/chunks/pages/_app-f93205432f443582.js",revision:"f93205432f443582"},{url:"/_next/static/chunks/pages/_app-f93205432f443582.js.map",revision:"eb96bf991d0f353fb90055d674b5ac0c"},{url:"/_next/static/chunks/pages/_error-21c4048e16cf5944.js",revision:"21c4048e16cf5944"},{url:"/_next/static/chunks/pages/_error-21c4048e16cf5944.js.map",revision:"bd1d17fb474447c4f6bda38156184ddc"},{url:"/_next/static/chunks/pages/index-fed22061ed932489.js",revision:"fed22061ed932489"},{url:"/_next/static/chunks/pages/index-fed22061ed932489.js.map",revision:"f8b81789e5cff76c594d530e8a5e2189"},{url:"/_next/static/chunks/pages/portal-3a687bb4e0735ca9.js",revision:"3a687bb4e0735ca9"},{url:"/_next/static/chunks/pages/portal-3a687bb4e0735ca9.js.map",revision:"71e780ac39b8103cd847cce405c1eaff"},{url:"/_next/static/chunks/pages/posts-e7d498fc960b702c.js",revision:"e7d498fc960b702c"},{url:"/_next/static/chunks/pages/posts-e7d498fc960b702c.js.map",revision:"01c7137bee1f6db4697ca6c78bbdfb22"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-d46122d1c7aaa8ce.js",revision:"d46122d1c7aaa8ce"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-d46122d1c7aaa8ce.js.map",revision:"3710eaf9ffa8f3b193659d0e10ab4617"},{url:"/_next/static/chunks/pages/service-4f0f76a25d26f938.js",revision:"4f0f76a25d26f938"},{url:"/_next/static/chunks/pages/service-4f0f76a25d26f938.js.map",revision:"4dee3cdac4066181a1fd22fe235bd205"},{url:"/_next/static/chunks/pages/shop-2b35afdce106fd07.js",revision:"2b35afdce106fd07"},{url:"/_next/static/chunks/pages/shop-2b35afdce106fd07.js.map",revision:"ba02bb9b9e31532a255de8a4fb114602"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8c0202d61bc61a66.js",revision:"8c0202d61bc61a66"},{url:"/_next/static/chunks/webpack-8c0202d61bc61a66.js.map",revision:"60934316d9dee1d308990917f68a90b8"},{url:"/_next/static/css/041a82557097bf11.css",revision:"041a82557097bf11"},{url:"/_next/static/css/041a82557097bf11.css.map",revision:"4a51aad16c122ff3a8b2a7d685347571"},{url:"/_next/static/ebe00cf5a1058a4f0d57d0c707d2f504ec06db44/_buildManifest.js",revision:"f5ea9a717f0c8992a400ef76190705b6"},{url:"/_next/static/ebe00cf5a1058a4f0d57d0c707d2f504ec06db44/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"7c5734209756865e0396321719b8c4b3"},{url:"/icons/android-chrome-192x192.png",revision:"5069d90aac950963727b8a93dd5cd280"},{url:"/icons/android-chrome-512x512.png",revision:"230dc95735ca89fbfe080a0a04e03b9c"},{url:"/icons/apple-touch-icon.png",revision:"07b752dc54d278e15cfb1b517e102ce3"},{url:"/icons/email.svg",revision:"af6134f2903eebdc17e57cd1193d040d"},{url:"/icons/favicon-16x16.png",revision:"43e55cd1b137c7511cbbd33efc353341"},{url:"/icons/favicon-32x32.png",revision:"66f1ce4161c86e8b836e63100c3ad59a"},{url:"/icons/github.svg",revision:"27534a4df1d67e79862b8c72d2252a0e"},{url:"/icons/maskable_icon.png",revision:"6e874af1d2acb42ddb064356fef9c543"},{url:"/icons/telegram.svg",revision:"5d365fc9401093340e38a0833e64da29"},{url:"/manifest.json",revision:"5ba19bcce08309608ee7ad8abae9e207"},{url:"/posts/images/test.jpg",revision:"c620e3ef7b7e6c10cb649fc65250e76f"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
