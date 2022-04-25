import { I18N } from "./config/lang";

export default {

  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description,
      },
    ],
    script: [
      // {
      //   src: "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
      //   defer: true,
      // }

    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#5e7153" },
  /*
   ** Global CSS
   */
  css: ["assets/css/main.css", "element-ui/lib/theme-chalk/index.css",],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "@/plugins/lib-flexible",
    },
    { src: "@/plugins/ElementUI" },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [["@nuxtjs/i18n", I18N]],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        "postcss-px2rem-exclude": {
          remUnit: 75,
          exclude: /node_modules|folder_name/i,
        },
      },
    },
    extend(config, { isClient, isDev }) {
      if (isClient && !isDev) {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      }
    },
  },
};
