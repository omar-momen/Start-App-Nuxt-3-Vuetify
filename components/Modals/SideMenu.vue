<template>
  <div class="sideMenu menu_container">
    <Transition name="fadeIn">
      <div v-if="show" class="backdrop"></div>
    </Transition>
    <Transition :name="`slide-${direction}`">
      <main
        v-if="show"
        @click.stop
        class="main_body sideMenu"
        :class="{ left: direction == 'left', right: direction == 'right' }"
      >
        <ModalHeader :title="props.title" @close="$emit('close')" />
        <slot></slot>
      </main>
    </Transition>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["close"]);

const direction = useLangStore().current_lang == "ar" ? "right" : "left";
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
.sideMenu.menu_container {
  .backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    cursor: auto;
  }

  main.main_body:not(.insideMenu) {
    overflow: hidden;
    width: 400px;
    position: fixed;
    top: 0;
    background: var(--main_bg);
    height: 100%;
    overflow-y: scroll;
    transition: all 0.2s linear;
    z-index: 999;
    cursor: auto;

    &.left {
      right: 0;
    }
    &.right {
      left: 0;
    }

    @media (max-width: 300px) {
      width: 100%;
    }
  }
}
</style>
