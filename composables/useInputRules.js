const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ar_letters_regex = /^[\u0600-\u06FF\s]+$/;
export const useInputRules = () => {
  return {
    only_ar_letters: (val) => {
      if (!ar_letters_regex.test(val) && val) {
        return useNuxtApp().$i18n.t("validation.only_ar_letters");
      }
      return true;
    },
    required: (val) => {
      if (!val) {
        return useNuxtApp().$i18n.t("validation.required");
      }

      return true;
    },
    email: (val) => {
      if (!email_regex.test(val) && val) {
        return useNuxtApp().$i18n.t("validation.valid_email");
      }
      return true;
    },
    passowrd: (val) => {
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(
          val && val
        )
      ) {
        return useNuxtApp().$i18n.t("validation.password");
      }
      return true;
    },
    saudi_numbers: (val) => {
      if (!/^(\+966|00966|0)?5[0-9]{8}$/.test(val) && val) {
        return useNuxtApp().$i18n.t("validation.saudi_numbers");
      }
      return true;
    },
    phone: (val) => {
      if (val?.length != 10) {
        return useNuxtApp().$i18n.t("validation.phone");
      }
      return true;
    },
    saudi_ids: (val) => {
      if (val?.length != 10) {
        return useNuxtApp().$i18n.t("validation.saudi_ids");
      }
      return true;
    },
  };
};
