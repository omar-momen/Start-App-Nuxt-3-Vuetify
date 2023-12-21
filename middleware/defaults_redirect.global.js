export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp();
  const theme_store = useThemeStore();
  const lang_store = useLangStore();

  // Retrieve the locales from the cookie
  const lang_locale = useCookie("lang_locale");
  const theme_locale = useCookie("theme_locale");

  // Set the locales if the cookie is present
  nuxtApp.$i18n.locale.value = lang_locale.value || lang_store.default_lang;
  nuxtApp.$vuetify.locale.current.value =
    lang_locale.value || lang_store.default_lang;
  lang_store.current_lang = lang_locale.value;

  nuxtApp.$vuetify.theme.global.name.value =
    theme_locale.value || theme_store.default_theme;
  theme_store.current_theme = theme_locale.value;
});
