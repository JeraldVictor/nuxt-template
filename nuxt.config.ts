import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
  ],
  googleFonts: {
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
    families: {
      Roboto: true,
      "Poor Story": true,
    },
  },
  css: ["~/assets/scss/main.scss"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
