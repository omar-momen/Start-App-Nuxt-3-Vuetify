<template>
  <header class="modalHeader">
    <h4 class="h_4">{{ title }}</h4>
    <span @click="$emit('close')" class="close"
      ><Icon name="mdi:window-close"
    /></span>
  </header>
</template>

<script setup>
const emits = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.modalHeader {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 30px;

  // h2 {
  //   font-size: 25px;
  //   font-weight: 500;
  // }

  .close {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    border-radius: 50%;
    transition: all 0.2s linear;

    svg.icon {
      color: #000 !important;
      font-size: 17px;
    }

    &:hover {
      background: var(--primary_2);
      color: #fff;
      svg.icon {
        color: #fff !important;
      }
    }
  }
}
</style>
