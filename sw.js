if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const d=e=>s(e,r),o={module:{uri:r},exports:a,require:d};i[r]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DRPqkYjT.js",revision:null},{url:"assets/index-gl5MWJ93.css",revision:null},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"icons/apple-touch-icon.png",revision:"fc81889891336adabb8228663e813c6b"},{url:"icons/favicon-16x16.png",revision:"a30d7f0054f814121791bc3b0d597f9c"},{url:"icons/favicon-32x32.png",revision:"e16c8107ddacd5cfbebe63e47a57318d"},{url:"icons/mstile-144x144.png",revision:"3ac2386845604942d01a1c5ada4c289d"},{url:"icons/mstile-150x150.png",revision:"4b124d7eb297c181e4b5a0fc1484c3a0"},{url:"icons/mstile-310x150.png",revision:"be5336f70429e9e5c28902c5b9ac54df"},{url:"icons/mstile-310x310.png",revision:"47fbd61732bae798282197e69478de3d"},{url:"icons/mstile-70x70.png",revision:"5784ed560ef62a36a85045569cb4ef98"},{url:"icons/safari-pinned-tab.svg",revision:"57f6649f828dd41b458b55802822a6cb"},{url:"images/борщ.jpg",revision:"5657427afc8821ab29d7619be5b4367a"},{url:"images/вторые блюда.jpg",revision:"8d6b60e68a3be44bc70dc176f6732d3f"},{url:"images/голова.jpg",revision:"ac20301e410cbe9a682aaa2ddaf9363c"},{url:"images/десерты.jpg",revision:"180ed0168217755deadc62a43fb93a9d"},{url:"images/дым.jpg",revision:"848f14fe45911ca5ed4612757bba2a50"},{url:"images/дым.png",revision:"a8cbdacd0fb3cbd137424e819e2fb9c3"},{url:"images/куриный.jpg",revision:"d12af17943b1015b06f43481735eb115"},{url:"images/первые блюда.jpg",revision:"d1f86977f76bcd333896add422451df6"},{url:"images/стол с тарелкй .jpg",revision:"dc71b27f0cf7d3d58dbf9cec91e50fa4"},{url:"images/стол с тарелкой.jpg",revision:"5695233625b2dd48c07b628e6c283fa0"},{url:"images/суп-пюре.jpg",revision:"3b7210392d89c623be2eba9bbacf4f08"},{url:"images/тарелка с тенью.jpg",revision:"2f20be8cceb00722db60f7fb95e9f8dc"},{url:"images/уха.jpg",revision:"cda8cbb55d43f1e38eff117d4f78422b"},{url:"images/харчо.jpg",revision:"afa226fa37a02956f52fbc8969d771ca"},{url:"images/щи.jpg",revision:"93ef3f50b2eceb3d1afbdce489346882"},{url:"registerSW.js",revision:"347b6858b56b630a591fc994c5d30036"},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"manifest.webmanifest",revision:"e1cad82cfd3730cacfc65e0cc86b4ce5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
