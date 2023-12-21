<template>
  <div class="login">
    <h3 class="h_3 big text-center mb-1">{{ $t("auth.login.title") }}</h3>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.login.text") }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent="login">
      <div class="inputs">
        <base-input
          type="number"
          v-model="data.nationalId"
          :label="$t('labels.national_id_or_phone')"
          required
        ></base-input>

        <base-input
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          required
        ></base-input>
      </div>

      <div class="inputsFooter d-flex align-center">
        <div class="rememberMe me-auto">
          <v-checkbox
            v-model="data.rememberMe"
            :label="$t('auth.remember_me')"
            color="primary"
            hide-details
          ></v-checkbox>
        </div>

        <div class="fotgetPassword">
          <router-link to="/authentication/forget-password">
            {{ $t("auth.forget_password") }}</router-link
          >
        </div>
      </div>

      <footer class="authFooter">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled filled"
          >{{ $t("form.login") }}</base-button
        >
        <p class="mt-3 text-center">
          {{ $t("auth.login.footer") }}
          <button class="colored">
            <router-link to="/authentication/signup">{{
              $t("form.signup")
            }}</router-link>
          </button>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
useHead({
  title: nuxtApp.$i18n.t("pages.login"),
});
definePageMeta({
  layout: "auth",
});
import { useAuthStore } from "@/stores/auth";

const value = ref(3);

const loading = ref(false);
const data = ref({
  nationalId: null,
  password: null,
  rememberMe: null,
});

const form = ref(null);
const login = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  await useAuthStore().logIn(data);
  loading.value = false;
};
</script>
