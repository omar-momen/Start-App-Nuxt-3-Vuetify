import { useThemeStore } from "~/stores/theme";
import { useLangStore } from "~/stores/lang";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
  // Theme
  const theme_store = useThemeStore();
  theme_store.current_theme =
    nuxtApp.$encryptStorage.getItem("blank_App_Theme") ||
    theme_store.default_theme;

  // Lang
  const lang_store = useLangStore();
  lang_store.current_lang =
    nuxtApp.$encryptStorage.getItem("blank_App_Lang") ||
    lang_store.default_lang;

  // Auth
  const auth_store = useAuthStore();
  const user = nuxtApp.$encryptStorage.getItem("blank_App_User");
  auth_store.user = user;
});
