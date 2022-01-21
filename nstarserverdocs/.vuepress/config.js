const { config } = require("vuepress-theme-hope");

module.exports = config({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '夜阑星空群服务器帮助文档',
      description: '夜阑星空群服务器帮助文档'
    }
  },
  title: "夜阑星空群服务器帮助文档",
  description: "夜阑星空群服务器的帮助文档",

  dest: "./docs",
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
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
    pwa:false,
    logo: "/favicon.png",
    hostname: "https://docs.nstarmc.cn",
    repo: "nstarmc/serverdocs",
    docsDir: 'nstarserverdocs',
    author: "小宇",


    nav: [
      { text: "文档首页", link: "/", icon: "shouye" },
      {
        text: "夜阑星空-Minecraft",
        link: "https://nstarmc.cn",
        icon: "shouye",
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
        {
          title: "服务器相关",
          icon: "youxitianchong",
          prefix: "server/",
          children: [
            "command", 
          ],
        },
      ],
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
  },
});
