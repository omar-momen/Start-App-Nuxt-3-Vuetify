<template>
  <div class="forget_password">
    <h3 class="h_3 mb-3 text-center">
      {{ $t("auth.forgetPassword.title") }}
    </h3>
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <v-col cols="12">
          <base-input
            type="number"
            v-model="data.phone"
            :label="$t('labels.phone')"
            :hint="$t('hints.phone')"
            :rules="[useInputRules().phone]"
            required
          ></base-input>
        </v-col>
      </div>

      <footer class="authFooter">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
        <p class="mt-1 text-center">
          {{ $t("auth.forgetPassword.footer") }}
          <button class="colored">
            <router-link to="/authentication/login">{{
              $t("form.login")
            }}</router-link>
          </button>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: "Forget Pssword",
});
definePageMeta({
  layout: "auth",
});

const loading = ref(false);
const data = ref({
  phone: null,
});

import { useAuthStore } from "@/stores/auth";
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    useAuthStore().verify_phone_value = data.value.phone;
    useAuthStore().confirm_from_page_path = "/authentication/forget-password";
    useAuthStore().verify_code = 1111;
    navigateTo("/authentication/confirm");
  }, 1000);
};
</script>
