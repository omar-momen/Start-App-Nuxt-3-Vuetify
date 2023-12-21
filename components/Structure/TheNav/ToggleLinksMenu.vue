<template>
  <div class="toggleMenu" @click="show = !show">
    <Icon name="mdi:format-list-bulleted" />

    <side-menu title="" :show="show" @close="show = false">
      <Links :navLinks="navLinks" :smallScreen="true" @click="show = !show" />
    </side-menu>
  </div>
</template>

<script setup>
const props = defineProps(["navLinks"]);
const show = ref(false);
</script>

<style lang="scss">
nav.theNav {
  .toggleMenu {
    display: none;
  }
}
</style>
