<template>
  <div class="search">
    <span class="d-flex align-center" @click="show = !show">
      <Icon class="me-1" name="ph:magnifying-glass-thin" />
      {{ $t("navbar.search") }}
    </span>

    <search-model
      :show="show"
      :closeIcon="false"
      @close="show = false"
    ></search-model>
  </div>
</template>

<script setup>
const props = defineProps(["url"]);
const show = ref(false);
</script>

<style lang="scss" scoped>
.search {
  border-radius: 20px;
  padding: 5px 16px;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--primary_2);
    color: #fff;
  }

  span {
    color: inherit;

    & > * {
      color: inherit;
    }
  }
}
</style>
