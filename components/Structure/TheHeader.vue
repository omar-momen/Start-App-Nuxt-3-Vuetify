<template>
  <header class="header pt-100">
    <div class="content"></div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header.header {
  background: linear-gradient(180deg, rgb(0 0 0 / 80%), rgb(0 0 0 / 70%)),
    url(https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .content {
    position: relative;
    width: 95%;
    text-align: center;
    @media (min-width: 1200px) {
      width: 1000px;
    }
    & > .text {
      color: #fff;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
}
</style>
