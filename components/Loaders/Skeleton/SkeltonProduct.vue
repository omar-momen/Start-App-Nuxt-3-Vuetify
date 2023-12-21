<template>
  <div class="categories-loader-skelton">
    <v-row>
      <v-col cols="6" lg="3" md="4" v-for="item in 6" :key="item.id"
        ><v-skeleton-loader
          class="mx-auto border"
          max-width="300"
          type="image, article"
        ></v-skeleton-loader
      ></v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.categories-loader-skelton {
  .v-skeleton-loader__avatar {
    height: 100px !important;
    max-height: unset !important;
    width: 100px !important;
    max-width: unset !important;
  }
  .v-skeleton-loader__text {
    height: 30px !important;
  }
}
</style>
