if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const t=e=>s(e,i),c={module:{uri:i},exports:r,require:t};a[i]=Promise.all(f.map((e=>c[e]||t(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.dce60114.css",revision:"92372d3ce9543d36b583e263a29e2941"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/18.fb5c66a0.js",revision:"889c99fe9edfdc6ce79bd683f4e01e2c"},{url:"assets/js/19.cae87a9e.js",revision:"b3a84a74b33a15d853a8fb9ae2d8b643"},{url:"assets/js/20.62fb4882.js",revision:"1ea6da9e397cd6cd70428d708f9b31e6"},{url:"assets/js/21.32c13715.js",revision:"0ef62dde55a2a698fe8f008d5cfbb328"},{url:"assets/js/22.9a7ee2f0.js",revision:"779ce61248b826a5b31a6959cb46eaea"},{url:"assets/js/23.2fc65858.js",revision:"d63af56eda92e6d6206304401d539a0f"},{url:"assets/js/app.e225c2f0.js",revision:"79f170d644ff0fdc91e4042b2ebfc574"},{url:"assets/js/layout-Blog.87ea281d.js",revision:"10bd5d94d67b9dfb9d2551a9dd4ec9b9"},{url:"assets/js/layout-Layout.60f5be12.js",revision:"e52e8629ac678533a5adf79f80fa6479"},{url:"assets/js/layout-NotFound.b85b0a92.js",revision:"c111fd81b26f006610a87249ea829b76"},{url:"assets/js/layout-Slide.20cc137f.js",revision:"ff3f8e9c0741121c7b2ce434a58300d6"},{url:"assets/js/page-使用Java版本进入服务器.980fcdad.js",revision:"43345755cebc0d218e971d8bdebc6388"},{url:"assets/js/page-使用基岩版加入游戏.ced61a50.js",revision:"27160ef2d4ca249e36fc1dfae18d6c0d"},{url:"assets/js/page-在验证系统注册.ee5d8e50.js",revision:"10d20c8568a9442eff080cf32ee31764"},{url:"assets/js/page-夜阑星空群服务器.78973a96.js",revision:"626fba42b99c22cc8835d0a4aede5d85"},{url:"assets/js/page-夜阑星空群群服务器帮助文档.7117ebcf.js",revision:"93fcb802bf3a90f2a80747d03d42d937"},{url:"assets/js/vendors~flowchart.70e6e103.js",revision:"70636c07f3a55012d1693dae6c78be40"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.cb3bf30c.js",revision:"0dcbec4784adb5210d5f93794f8d3b5b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.abf847ff.js",revision:"c470d55c3e36a56724e7bb302ed41d43"},{url:"assets/js/vendors~layout-Layout.c84b5caf.js",revision:"7d0a34dd66f7839cc6ab215a8c8a3402"},{url:"assets/js/vendors~mermaid.ec46e742.js",revision:"ad4065e2bddda4b861e929365347b9f2"},{url:"assets/js/vendors~photo-swipe.416c9476.js",revision:"a9951a0738857eb725d96ea1e0264536"},{url:"assets/js/vendors~reveal.30723eba.js",revision:"0e869dc434182910557dc3659ed98f50"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"84cead708c498071e958606251ff22ec"},{url:"article/index.html",revision:"d63bfb4b38b1d49ac9a06da81b638413"},{url:"category/index.html",revision:"422e5f2651381d38d1aafc4b4647b562"},{url:"encrypt/index.html",revision:"030e2d6a0076b4d4031aebc36c15a1a6"},{url:"index.html",revision:"151d43a3bfd2969c80b626fd1261d5d7"},{url:"slide/index.html",revision:"cce0afd8ba113af1aa72dc5a9b28d87d"},{url:"star/index.html",revision:"3fd5b5e93a610d91982021335e9c235b"},{url:"start/bedrock/index.html",revision:"9d171badb29b5923c76261e153063f16"},{url:"start/index.html",revision:"b8831a173ba95e92d6f1306d4dc617ea"},{url:"start/java/index.html",revision:"91420033fafda365e81e0c2390e96042"},{url:"start/reg/index.html",revision:"ccb2ea82b79e2b580eed5e70956f9337"},{url:"tag/index.html",revision:"2caf1ed2c87f504dfcd29a73a9f1fa4d"},{url:"timeline/index.html",revision:"49f01d9f5d5dbf65f154bf184dd06a02"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
