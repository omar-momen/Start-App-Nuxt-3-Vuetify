<template>
  <div class="background">
    <img width="300px" height="300px" src="/Loaders/preloader.gif" alt="logo" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.background {
  inset: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--main_bg);
  border: 1px solid var(--border);
  box-shadow: 0 0 10px var(--shadow);
  transition: all 0.3s linear;
}
</style>
