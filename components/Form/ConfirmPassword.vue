<template>
  <div class="confirm_password">
    <v-row>
      <v-col cols="12" md="6">
        <base-input
          name="password"
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          :hint="$t('hints.password')"
          required
          :rules="[useInputRules().passowrd]"
        ></base-input>
      </v-col>
      <v-col cols="12" md="6">
        <base-input
          name="confirmPass"
          type="password"
          v-model="data.confirm_password"
          :label="$t('labels.confirm_password')"
          :hint="$t('hints.password')"
          required
          :rules="[useInputRules().passowrd, confirmPasswordMatch]"
        ></base-input>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const updateValue = (val) => {
  emits("update:modelValue", val);
};

const data = ref({
  password: null,
  confirm_password: null,
});
const confirmPasswordMatch = (val) => {
  if (val != data.value.password) {
    return useNuxtApp().$i18n.t("validation.passwords_not_match");
  }

  return true;
};

watch(
  data,
  (newVal) => {
    updateValue(newVal);
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
