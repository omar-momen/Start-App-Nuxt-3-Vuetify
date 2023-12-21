import { useLangStore } from "./lang";

export const useAuthStore = defineStore("auth", () => {
  const nuxtApp = useNuxtApp();
  const langStore = useLangStore();

  const is_first_visit = ref(false);

  const verify_code = ref(null);
  const verify_phone_value = ref(null);

  const confirm_from_page_path = ref(null);

  // ======== Verify Navaz
  const nafaz_verify_num = ref(null);
  const verifyWithNafaz = async (national_id) => {
    // const data = await userService().verifyWithNafaz(national_id);
    // if (data) {
    //   nafaz_verify_num.value = data;
    // }
    // return data;

    await new Promise((resolve) => setTimeout(resolve, 500));
    const random_number = Math.floor(Math.random() * 100);
    nafaz_verify_num.value = random_number;
    return true;
  };
  const checkNavazNum = async (reandom_number) => {
    // const data = await userService().checkNavazNum(reandom_number);
    // return data;

    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  };

  // ======== Verify Phone
  const verifyPhoneNumber = async (phone) => {
    // const data = await userService().verifyPhoneNumber(phone);
    // if (data) {
    //   verify_phone_value.value = data;
    // }
    // return data;

    await new Promise((resolve) => setTimeout(resolve, 500));
    verify_phone_value.value = phone;
    return true;
  };
  const confirmPhoneNumber = async (phone, code) => {
    // const data = await userService().confirmPhoneNumber(code);
    // if (data) {
    //   verify_code.value = data;
    // }
    // return data;

    await new Promise((resolve) => setTimeout(resolve, 500));
    verify_code.value = "1111";
    return true;
  };

  // ======== Storage
  const user = ref(null);
  const setStorage = (loginData) => {
    user.value = { ...loginData };
    nuxtApp.$encryptStorage.setItem("blank_App_User", loginData);
    nuxtApp.$encryptStorage.setItem(
      "is_user_first_visit",
      loginData.is_first_visit || false
    );
    is_first_visit.value = loginData.is_first_visit || false;
  };
  const clearStorage = () => {
    user.value = null;
    nuxtApp.$encryptStorage.removeItem("blank_App_User");
  };

  // ======== Main Actions
  const logIn = async (loginData) => {
    // const user = await userService().login(loginData);
    // if (user) {
    //   setStorage(user);
    //   navigateTo("/");
    // }
    // return user;

    await new Promise((resolve) => setTimeout(resolve, 500));
    const user = {
      id: 5,
      userType: "user",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "omar",
      phone: "01009867150",
      email: "tugrp@example.com",
      token: "asdwascascsadfggf fgh fghgfh fgh fgh hfghd cascsacascasasc",
      cartLength: 0,
      notificationLength: 0,
      is_first_visit: false,
    };
    setStorage(user);
    nuxtApp.$iziToast.success({
      message:
        langStore.current_lang == "en"
          ? "Welcome to Samh RealState"
          : "مرحبا بك في سمح العقارية",
      position: "bottomCenter",
    });
    navigateTo("/");
  };
  const logOut = async () => {
    // const data = await userService().logout();
    // if (data) {
    //   clearStorage();
    //   navigateTo("/");
    // }

    await new Promise((resolve) => setTimeout(resolve, 500));
    clearStorage();
    nuxtApp.$iziToast.success({
      message:
        langStore.current_lang == "en"
          ? "You have been logged out successfully"
          : "تم تسجيل الخروج بنجاح",
      position: "topCenter",
    });
    navigateTo("/");
  };

  const signup = async (signupData) => {
    // const user = await userService().signup(loginData);
    // return user;

    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  };

  return {
    verifyWithNafaz,
    checkNavazNum,

    verifyPhoneNumber,
    confirmPhoneNumber,

    logIn,
    logOut,

    signup,

    user,
    nafaz_verify_num,
    verify_phone_value,
    verify_code,
    confirm_from_page_path,
    is_first_visit,
  };
});
