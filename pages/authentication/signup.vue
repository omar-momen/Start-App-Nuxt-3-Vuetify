<template>
  <div class="signup">
    <h4 class="h_4 mb-1 text-center">{{ $t("auth.register.title") }}</h4>

    <v-stepper
      v-model="step"
      color="primary"
      :mobile="useHelpers().isSmallScreen()"
    >
      <v-stepper-header color="primary">
        <v-stepper-item color="primary" value="1" :complete="+step > 1">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item color="primary" value="2" :complete="+step > 2">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item color="primary" value="3" :complete="+step > 3">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item color="primary" value="4" :complete="+step > 4">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item color="primary" value="5"> </v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item :key="`${1}-content`" value="1">
          <RegisterStepOne @nextStep="step = '2'" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${2}-content`" value="2">
          <RegisterStepTow @nextStep="step = '3'" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${3}-content`" value="3">
          <RegisterStepThree @nextStep="step = '4'" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${4}-content`" value="4">
          <RegisterStepFour @nextStep="step = '5'" />
        </v-stepper-window-item>
        <v-stepper-window-item :key="`${5}-content`" value="5">
          <RegisterStepFive />
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>
  </div>
</template>

<script setup>
useHead({
  title: "Sign Up",
});
definePageMeta({
  layout: "auth",
});

const step = ref("1");
</script>

<style scoped lang="scss">
.v-sheet {
  box-shadow: unset !important;

  .v-stepper-header {
    box-shadow: unset !important;
  }
}
</style>
