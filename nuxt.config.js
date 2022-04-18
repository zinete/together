import { I18N } from "./config/lang";

export default {

  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "一剑钟情，从瓷开始",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description,
      },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },
  /*
   ** Global CSS
   */
  css: ["assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "@/plugins/lib-flexible",
    },
    { src: "@/plugins/i18n.js" },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [["nuxt-i18n", I18N]],
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
    extend(config, ctx) { },
  },
};
