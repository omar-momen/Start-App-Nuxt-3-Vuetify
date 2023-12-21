<template>
  <div class="navAuth v-step-1">
    <base-button
      v-if="!useHelpers().isSmallScreen() && !useAuthStore().user"
      link
      to="/authentication/login"
      class="flat with_icon"
      aria-label="Login/Signup"
      ><span><Icon class="me-1" name="ic:outline-account-circle" /> </span>
      {{ $t("form.login_signup") }}
    </base-button>
    <v-tooltip
      v-else
      theme="light"
      text="Login/Signup"
      location="bottom"
      aria-label="Sign Up Icon"
    >
      <template v-slot:activator="{ props }">
        <nuxt-link to="/authentication/login">
          <v-btn
            v-bind="props"
            class="d-flex justify-center align-center pa-5"
            color="primary"
            aria-label="login/signup"
            density="compact"
            icon="mdi-account-plus"
          ></v-btn>
        </nuxt-link>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const props = defineProps({
  stikyNav: Boolean,
});
</script>
