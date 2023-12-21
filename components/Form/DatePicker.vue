<template>
  <div class="date_picker">
    <base-input
      :value="modelValue ? useHelpers().formatDate(modelValue) : ''"
      :placeholder="$t('labels.date_of_birth')"
      @click="date_dialog = true"
    ></base-input>

    <v-dialog eager v-model="date_dialog" class="date_picker">
      <v-date-picker
        color="primary"
        class="rounded-lg"
        @update:modelValue="updateValue"
        :modelValue="_modelValue"
        v-bind:="$attrs"
        :title="$t('labels.pick_date')"
      ></v-date-picker>
    </v-dialog>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const date_dialog = ref(false);

const props = defineProps({
  modelValue: {
    required: true,
  },
  rules: {
    required: false,
    type: Array,
    default: () => [],
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const _modelValue = computed(() => {
  return new Date(props.modelValue);
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  date_dialog.value = false;
  emits("update:modelValue", useHelpers().formatDate(e));
};
</script>

<style lang="scss" scoped></style>
