import { useAuthStore } from "@/stores/auth";
import { useLangStore } from "@/stores/lang";

export const useMyFetch = (url, options) => {
  const BASE_URL = useRuntimeConfig().apiBase;
  const AUTH_STORE = useAuthStore();
  const LANG_STORE = useLangStore();

  const myOptions = ref({
    ...options,
    headers: {
      ...(options ? options.headers : {}),
      "Accept-Language": LANG_STORE.current_lang,
      ...(AUTH_STORE.user?.token
        ? { Authorization: "Bearer " + AUTH_STORE.user.token }
        : {}),
    },
    baseURL: BASE_URL,
    onRequest({ request, options }) {
      // Set the request headers
    },
    async onRequestError({ request, options, error }) {
      // Handle the request errors
      if (
        error.response.status == "401" &&
        error.response.config.url != "login" &&
        error.response.config.url != "logout"
      ) {
        AUTH_STORE.logOut();
        // const {refresh_token} = await useFetch(BASE_URL + "refresh_token");
        // ... Set It In Storage
      }
    },
    onResponse({ request, response, options }) {
      // Process the response data
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  });

  return useFetch(url, myOptions.value);
};
