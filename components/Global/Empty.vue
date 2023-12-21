<template>
  <div class="empty_data">
    <h2>{{ text }}</h2>
    <nuxt-img
      :src="image"
      preset="default"
      height="50vh"
      sizes="sm:300 md:600"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "No Data",
  },
  image: {
    type: String,
    default: "/images/empty/products.png",
  },
});
</script>

<style lang="scss" scoped>
.empty_data {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
