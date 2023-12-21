export const useThemeStore = defineStore("theme", () => {
  const nuxtApp = useNuxtApp();

  const current_theme = ref(null);
  const default_theme = ref("light");

  const setCurrentTheme = () => {
    current_theme.value = current_theme.value === "light" ? "dark" : "light";
    return current_theme.value;
  };

  const domManipulation = (theme) => {
    // Body
    const BODY = document.querySelector("body");
    BODY.classList.add(`${theme === "light" ? "lightTheme" : "darkTheme"}`);
    BODY.classList.remove(`${theme === "light" ? "darkTheme" : "lightTheme"}`);

    // Root  Attribuets
    BODY.setAttribute(
      "theme",
      `${theme === "light" ? "lightTheme" : "darkTheme"}`
    );
    document.documentElement["lang"] = current_theme.value;
  };

  const framworksLocale = (theme) => {
    nuxtApp.$vuetify.theme.global.name.value = theme;
  };

  const fillStorage = (theme) => {
    const theme_locale = useCookie("theme_locale");
    theme_locale.value = theme;
    nuxtApp.$encryptStorage.setItem("blank_App_Theme", theme);
  };

  const switchTheme = () => {
    setCurrentTheme(current_theme.value);
    domManipulation(current_theme.value);
    framworksLocale(current_theme.value);
    fillStorage(current_theme.value);
  };

  const handleFirstLoad = () => {
    domManipulation(current_theme.value);
    framworksLocale(current_theme.value);
    fillStorage(current_theme.value);
  };

  return {
    current_theme,
    default_theme,
    handleFirstLoad,
    switchTheme,
  };
});
