if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const a=e=>n(e,c),d={module:{uri:c},exports:o,require:a};i[c]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DaMZa6X-.js",revision:null},{url:"assets/index-DFbCIsIf.css",revision:null},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"icons/apple-touch-icon.png",revision:"fc81889891336adabb8228663e813c6b"},{url:"icons/favicon-16x16.png",revision:"a30d7f0054f814121791bc3b0d597f9c"},{url:"icons/favicon-32x32.png",revision:"e16c8107ddacd5cfbebe63e47a57318d"},{url:"icons/mstile-144x144.png",revision:"3ac2386845604942d01a1c5ada4c289d"},{url:"icons/mstile-150x150.png",revision:"4b124d7eb297c181e4b5a0fc1484c3a0"},{url:"icons/mstile-310x150.png",revision:"be5336f70429e9e5c28902c5b9ac54df"},{url:"icons/mstile-310x310.png",revision:"47fbd61732bae798282197e69478de3d"},{url:"icons/mstile-70x70.png",revision:"5784ed560ef62a36a85045569cb4ef98"},{url:"icons/safari-pinned-tab.svg",revision:"48d4062e905adc9b2aa817dd88ffca2d"},{url:"images/дым.jpg",revision:"848f14fe45911ca5ed4612757bba2a50"},{url:"images/дым.png",revision:"a8cbdacd0fb3cbd137424e819e2fb9c3"},{url:"index.html",revision:"359198e81ce3aa19963f668eeac017f9"},{url:"registerSW.js",revision:"347b6858b56b630a591fc994c5d30036"},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"manifest.webmanifest",revision:"1230382a0854c8bf314d3f2cdfc7e96e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
