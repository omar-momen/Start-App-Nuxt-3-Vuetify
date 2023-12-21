<template>
  <div class="confirm">
    <h2 class="h_2 mb-1 big text-center">
      {{ $t("auth.confirm.title") }}
    </h2>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.confirm.text") + phone }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent>
      <div class="inputs">
        <v-otp-input
          v-model="data.code"
          :length="4"
          placeholder="*"
          @finish="onFinish"
          :loading="OTPLoading"
        ></v-otp-input>
      </div>

      <footer class="authFooter">
        <p class="mb-2">
          {{ $t("auth.confirm.footer") }}
          <button class="colored">{{ $t("form.resend") }}</button>
        </p>
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
      </footer>
    </v-form>

    <v-snackbar v-model="OTPsnackbar" :color="OTPsnackbarColor" :timeout="1000">
      {{ OTPMessage }}
    </v-snackbar>
  </div>
</template>

<script setup>
useHead({
  title: "Confirm Code",
});

definePageMeta({
  layout: "auth",
  // middle ware to redirect to home if the phone is null
  middleware: [
    function (to, from) {
      if (from.fullPath == "/authentication/confirm") {
        return navigateTo("/");
      }
    },
  ],
});

import { useAuthStore } from "@/stores/auth";
const phone = useAuthStore().verify_phone_value;
const confirm_from_page_path = useAuthStore().confirm_from_page_path;

const data = ref({
  code: "",
});

const loading = ref(false);
const OTPLoading = ref(false);
const OTPsnackbar = ref(false);
const OTPsnackbarColor = ref(null);
const expectedOtp = ref(useAuthStore().verify_code);
const OTPMessage = ref(null);

const onFinish = () => {
  OTPLoading.value = true;
  loading.value = true;

  setTimeout(async () => {
    OTPsnackbarColor.value =
      +data.value.code === +expectedOtp.value ? "success" : "warning";
    OTPMessage.value = `Processed OTP with "${data.value.code}" (${OTPsnackbarColor.value})`;
    OTPsnackbar.value = true;

    OTPLoading.value = false;
    loading.value = false;
    if (OTPsnackbarColor.value == "success") {
      setTimeout(() => {
        if (confirm_from_page_path === "/authentication/forget-password") {
          return navigateTo("/authentication/reset-password");
        } else if (
          confirm_from_page_path === "/authentication/register-step-three"
        ) {
          return navigateTo("/authentication/signup?step=4");
        }
      }, 1000);
    }
  }, 1500);
};
</script>
