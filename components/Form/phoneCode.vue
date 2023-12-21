<template>
  <div class="phoneCode d-flex">
    <select-input
      class="me-1 select"
      v-model="data.countryKey"
      :staticItems="countryKeys"
      required
    />
    <base-input
      type="number"
      v-model="data.phone"
      :label="$t('labels.phone')"
      required
      class="phone"
    ></base-input>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const updateValue = (val) => {
  emits("update:modelValue", val);
};

const data = ref({
  countryKey: "050",
  phone: null,
});

watch(
  data,
  (newVal) => {
    updateValue(newVal);
  },
  { deep: true }
);

const countryKeys = [
  "1",
  "2",
  "3",
  "08",
  "058",
  "50",
  "050",
  "79",
  "978",
  "504",
];
</script>

<style lang="scss" scoped>
.phoneCode {
  .select {
    max-width: 80px;
  }
}
</style>
