import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

import { ar, en } from "vuetify/locale";

import { useThemeStore } from "~/stores/theme";

export default defineNuxtPlugin((app) => {
  const theme_store = useThemeStore();

  const vuetify = createVuetify({
    locale: {
      locale: "ar",
      fallback: "ar",
      messages: { ar, en },
    },

    theme: {
      defaultTheme: theme_store.default_theme,
      themes: {
        // myCustomTheme,
        dark: {
          colors: {
            primary: "#f29727",
          },
        },
        light: {
          colors: {
            primary: "#f29727",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);

  return {
    provide: {
      vuetify,
    },
  };
});
