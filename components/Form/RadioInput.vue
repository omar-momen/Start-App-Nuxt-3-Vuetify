<template>
  <v-radio-group
    color="primary"
    v-bind:="$attrs"
    inline
    class="align-center radio_input"
    @change="updateValue($event)"
    :label="label"
    :rules="[useInputRules().required]"
  >
    <v-radio
      v-for="radio in items"
      class="radio"
      :key="radio.id"
      :label="radio.name"
      :value="radio.value"
    ></v-radio>
  </v-radio-group>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  label: {
    required: true,
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss">
.radio_input {
  .v-input__details {
    .v-messages {
      & > div:first-child {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
