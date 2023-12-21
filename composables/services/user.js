import { useLangStore } from "~/stores/lang";

export const userService = () => {
  const langStore = useLangStore();
  const nuxtApp = useNuxtApp();

  return {
    async login(loginData) {
      const { data: user, error } = await useMyFetch("/login", {
        method: "POST",
        body: loginData,
      });

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Welcome to Samh RealState"
            : "مرحبا بك في سمح العقارية",
        position: "topLeft",
      });
      return user;
    },

    async logout() {
      const { data, error } = await useMyFetch("/logout", {
        method: "POST",
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "You have been logged out successfully"
            : "تم تسجيل الخروج بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async signup(signupData) {
      const { data, error } = await useMyFetch("/signup", {
        method: "POST",
        body: { signupData },
      });

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Account created successfully, please login"
            : "تم انشاء الحساب بنجاح برجاء تسجيل الدخول",
        position: "topLeft",
      });
      return data;
    },

    async verifyWithNafaz(national_id) {
      const { data, error } = await useMyFetch("/verify_navaz", {
        method: "POST",
        body: { national_id },
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Verification code sent successfully"
            : "تم ارسال كود التحقق بنجاح",
        position: "topLeft",
      });

      return data;
    },

    async checkNavazNum(reandom_number) {
      const { data, error } = await useMyFetch("/check_navaz_num", {
        method: "POST",
        body: { reandom_number },
      });

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "number verified successfully"
            : "تم التأكيد من الرقم بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async verifyPhoneNumber(phone) {
      const { data, error } = await useMyFetch("/verify_phone_num", {
        method: "POST",
        body: { phone },
      });

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Verification code sent successfully"
            : "تم ارسال كود التحقق بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async confirmPhoneNumber(phone, code) {
      const { data, error } = await useMyFetch("/confirm_phone_num", {
        method: "POST",
        body: { phone, code },
      });

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "code verified successfully"
            : "تم التأكيد من الكود بنجاح",
        position: "topLeft",
      });
      return data;
    },
  };
};
