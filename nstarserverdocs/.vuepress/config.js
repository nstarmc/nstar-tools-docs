const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "夜阑星空群服务器帮助文档",
  description: "夜阑星空群服务器的帮助文档",

  dest: "./docs",
  lang: "zh-CN",
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    logo: "/favicon.png",
    hostname: "https://docs.nstarmc.cn",

    author: "小宇",


    nav: [
      { text: "文档首页", link: "/", icon: "home" },
      {
        text: "夜阑星空-Minecraft",
        link: "https://nstarmc.cn",
        icon: "note",
      },
    ],

    sidebar: {
      "/": [
        "",
        {
          title: "快速开始",
          icon: "123_huaban1fuben2",
          prefix: "start/",
          children: [

            "", 
            "reg",
            "java",
            "bedrock"
          ],
        },
      ],
    },


    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        NSTARMC: "https://nstarmc.cn",
      },
    },

    footer: {
      display: true,
      content: "夜阑星空群服务器文档",
    },


    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.png",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
