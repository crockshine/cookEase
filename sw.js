if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const d=e=>c(e,n),f={module:{uri:n},exports:a,require:d};i[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CaQcFTuZ.js",revision:null},{url:"assets/index-lTsRnwny.css",revision:null},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"icons/apple-touch-icon.png",revision:"fc81889891336adabb8228663e813c6b"},{url:"icons/favicon-16x16.png",revision:"a30d7f0054f814121791bc3b0d597f9c"},{url:"icons/favicon-32x32.png",revision:"e16c8107ddacd5cfbebe63e47a57318d"},{url:"icons/mstile-144x144.png",revision:"3ac2386845604942d01a1c5ada4c289d"},{url:"icons/mstile-150x150.png",revision:"4b124d7eb297c181e4b5a0fc1484c3a0"},{url:"icons/mstile-310x150.png",revision:"be5336f70429e9e5c28902c5b9ac54df"},{url:"icons/mstile-310x310.png",revision:"47fbd61732bae798282197e69478de3d"},{url:"icons/mstile-70x70.png",revision:"5784ed560ef62a36a85045569cb4ef98"},{url:"icons/safari-pinned-tab.svg",revision:"48d4062e905adc9b2aa817dd88ffca2d"},{url:"images/борщ.jpg",revision:"5657427afc8821ab29d7619be5b4367a"},{url:"images/вторые блюда.jpg",revision:"8d6b60e68a3be44bc70dc176f6732d3f"},{url:"images/голова.jpg",revision:"ac20301e410cbe9a682aaa2ddaf9363c"},{url:"images/гороховый.jpg",revision:"5207c1b21ac24150b2ffaa848ef82dc5"},{url:"images/грибной.jpg",revision:"fc486b5d003b07c49382a9dd8267ea5e"},{url:"images/десерты.jpg",revision:"180ed0168217755deadc62a43fb93a9d"},{url:"images/дым.jpg",revision:"848f14fe45911ca5ed4612757bba2a50"},{url:"images/дым.png",revision:"a8cbdacd0fb3cbd137424e819e2fb9c3"},{url:"images/куриный.jpg",revision:"d12af17943b1015b06f43481735eb115"},{url:"images/низ стола.png",revision:"f57884a6d5782975c00738468a7bffee"},{url:"images/первые блюда.jpg",revision:"d1f86977f76bcd333896add422451df6"},{url:"images/солянка.jpg",revision:"c6360d8638fc44af092579c7dec80ced"},{url:"images/стол с тарелкй .jpg",revision:"dc71b27f0cf7d3d58dbf9cec91e50fa4"},{url:"images/стол с тарелкой.jpg",revision:"5695233625b2dd48c07b628e6c283fa0"},{url:"images/стол с ушами.jpg",revision:"e1d78a85190ed084b0171c98c8ddd770"},{url:"images/суп-пюре.jpg",revision:"3b7210392d89c623be2eba9bbacf4f08"},{url:"images/тарелка с тенью.jpg",revision:"2f20be8cceb00722db60f7fb95e9f8dc"},{url:"images/уха.jpg",revision:"cda8cbb55d43f1e38eff117d4f78422b"},{url:"images/фон без стола.jpg",revision:"86813dfc2832a42fd828ed8b8159e71c"},{url:"images/харчо.jpg",revision:"afa226fa37a02956f52fbc8969d771ca"},{url:"images/щи.jpg",revision:"93ef3f50b2eceb3d1afbdce489346882"},{url:"index.html",revision:"5e2e561fbac873cecdd605fd02708c7f"},{url:"registerSW.js",revision:"347b6858b56b630a591fc994c5d30036"},{url:"icons/android-chrome-192x192.png",revision:"6f643452fea0e246ba338cb88e62a930"},{url:"icons/android-chrome-512x512.png",revision:"9922730bf05545e0568217c028e10055"},{url:"manifest.webmanifest",revision:"1230382a0854c8bf314d3f2cdfc7e96e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
