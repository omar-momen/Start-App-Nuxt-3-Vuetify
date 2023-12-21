<template>
  <div class="homePage">
    <TheHeader />
  </div>
</template>

<script setup>
useSeoMeta({
  title: useNuxtApp().$i18n.t("pages.home.title"),
});

import { useGlobalStore } from "@/stores/global";
onMounted(() => {
  setTimeout(() => {
    useGlobalStore().init_tooltip(false);
  }, 500);
});
</script>

<style scoped lang="scss">
.homeSection {
  padding-block: 100px;
}
</style>
