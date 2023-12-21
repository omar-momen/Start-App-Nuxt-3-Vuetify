<template>
  <div class="default_layout">
    <TheNavbar />
    <div class="insideHomeView">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.insideHomeView {
  min-height: 500px;
}
</style>
