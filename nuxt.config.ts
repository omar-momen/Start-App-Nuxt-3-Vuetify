import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],

  build: {
    transpile: ["vuetify", "vue-countup-v3"],
  },

  css: ["~/assets/scss/main.scss"],

  image: {
    unsplash: {
      baseURL: "https://images.unsplash.com/",
    },

    presets: {
      default: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "70",
        },
      },
    },
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "",
      googleMapsApiKey: "",
    },
  },

  app: {
    layoutTransition: { name: "fadeIn", mode: "out-in" },
    pageTransition: { name: "fadeIn", mode: "out-in" },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
