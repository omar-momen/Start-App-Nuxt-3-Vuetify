<template>
  <div>
    <h1>Profile</h1>
    <base-button class="animate_primary_filled" @click="logOut">
      LogOut
    </base-button>
  </div>
</template>

<script setup>
const { logOut } = useAuthStore();
</script>
