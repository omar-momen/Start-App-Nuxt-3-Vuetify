<template>
  <div class="change_theme" @click="theme_store.switchTheme()">
    <v-tooltip
      theme="light"
      text="Switch Theme"
      location="bottom"
      aria-label="Switch Lang Icon"
    >
      <template v-slot:activator="{ props }">
        <Icon v-bind="props" name="mdi:theme-light-dark"></Icon>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/theme";
const theme_store = useThemeStore();
</script>

<style lang="scss" scoped>
.change_theme {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
