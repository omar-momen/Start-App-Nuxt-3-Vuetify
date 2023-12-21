<template>
  <div class="language" @click="switchLang">
    <v-tooltip
      theme="light"
      text="Switch Language"
      location="bottom"
      aria-label="Switch Lang Icon"
    >
      <template v-slot:activator="{ props }">
        <nuxt-img
          preset="default"
          width="30"
          height="30"
          v-bind="props"
          :src="langIcon"
          alt="Switch Lang Image"
        />
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";
const lang_store = useLangStore();

const langIcon = computed(() => {
  if (useHelpers().lang() == "en") {
    return "/icons/ar.png";
  } else {
    return "/icons/en.png";
  }
});

const switchLang = () => {
  lang_store.switchLang();
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
