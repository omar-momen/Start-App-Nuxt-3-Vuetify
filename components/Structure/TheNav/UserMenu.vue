<template>
  <NuxtLink to="/profile" name="Profile Page">
    <v-tooltip
      theme="light"
      text="Profile"
      location="top"
      aria-label="User Icon"
    >
      <template v-slot:activator="{ props }">
        <!-- <Icon v-bind="props" name="solar:user-linear" /> -->
        <v-avatar :image="image" size="43"></v-avatar>
      </template>
    </v-tooltip>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["image"]);
</script>

<style lang="scss" scoped>
svg.icon {
  color: var(--main);
}
</style>
