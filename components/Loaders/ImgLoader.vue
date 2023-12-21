<template>
  <div class="lazy_image" :class="{ loaded: img_loaded }">
    <nuxt-img
      @load="imageLoaded"
      class="lazyImage"
      v-bind="$attrs"
      loading="lazy"
      preset="default"
      :src="props.src"
    />
    <SpinnerLoader />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});

const img_loaded = ref(false);
const imageLoaded = () => {
  img_loaded.value = true;
};
</script>

<style lang="scss" scoped>
.lazy_image {
  position: relative;
  height: 350px;

  &.notActive {
    display: none;
  }

  @media (max-width: 500px) {
    height: 200px;
  }

  @media (min-width: 1920px) {
    height: 400px;
  }

  img {
    border-radius: 10px;
    height: 100%;
    width: 100%;

    &:hover {
      transition: transform 0.3s linear;
      transform: scale(1.2);
    }
  }

  &.loaded {
    .spinner {
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>
