<template>
  <SelectInput
    @input="input"
    :staticItems="items"
    class="flex-full-width"
    density="comfortable"
    item-props
    menu-icon=""
    placeholder="Search Our App "
    append-inner-icon="mdi-magnify"
    rounded
    variant="solo"
  >
    <template #appendInner>
      <slot name="appendInner"> </slot>
    </template>
  </SelectInput>
</template>

<script setup>
const items = ref([
  {
    prependIcon: "mdi-clock-outline",
    title: "recipe with chicken",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "best hiking trails near me",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "how to learn a new language",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "DIY home organization ideas",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "latest fashion trends",
  },
]);

const input = (e) => {};
</script>

<style lang="scss" scoped></style>
