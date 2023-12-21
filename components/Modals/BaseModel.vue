<template>
  <transition name="fadeIn">
    <div v-if="show" class="baseModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <ModalHeader @close="$emit('close')" :title="props.title" />
        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show", "closeIcon", "title"]);

const isSmallScreen = true;

const _show = computed(() => {
  return props.show;
});

watch(_show, (newVal) => {
  if (newVal) {
    document.querySelector("body").classList.add("noScroll");
  } else {
    document.querySelector("body").classList.remove("noScroll");
  }
});
</script>

<style lang="scss" scoped>
.baseModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: #333333d4;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    max-width: 50vw;
    max-height: 95vh;
    overflow-y: scroll;
    background: var(--main_bg);
    position: relative;
    border-radius: 15px;
    padding: 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 992px) {
      max-width: 95vw;
      height: 75vh;
      min-width: unset;
    }
  }
}
</style>
