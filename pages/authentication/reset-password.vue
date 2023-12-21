<template>
  <div class="confirm">
    <h2 class="h_2 mb-1 big text-center">
      {{ $t("auth.resetPassword.title") }}
    </h2>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.resetPassword.text") }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <confirm-password v-model="passwords" />
      </div>

      <footer class="authFooter">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: "Reset Password",
});
definePageMeta({
  layout: "auth",
});

const passwords = ref({
  password: null,
  confirm_password: null,
});

const loading = ref(false);

const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    navigateTo("/authentication/login");
  }, 1000);
};
</script>
