const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Brian Norris | Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/aqk6rlp.css" }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-29705114-1", async: true }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#DA6259", height: "6px" },

  /*
   ** Global CSS
   */
  css: ["@/assets/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/analytics.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
