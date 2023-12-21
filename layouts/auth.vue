<template>
  <div class="auth_layout">
    <div class="_container custom_card">
      <logo class="mb-5" :big="false" />

      <div class="form">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth_layout {
  background: linear-gradient(
      0deg,
      rgba(51, 50, 51, 0.3),
      rgba(46, 45, 45, 0.3)
    ),
    url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center center;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 40px;

  ._container {
    width: 600px;

    @media (max-width: 610px) {
      width: 95%;
    }

    .logo {
      img {
        margin: 15px auto;
      }
    }

    .form {
      padding: 15px;
      box-shadow: 0 0 10px var(--main_shadow);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        margin-bottom: 15px !important;
      }
    }
  }
}
</style>
