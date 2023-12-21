<template>
  <section class="breadcrumb">
    <div class="d-flex">
      <v-breadcrumbs divider=">" :items="items">
        <template v-slot:item="{ item }">
          <router-link :class="{ disabled: !item.href }" :to="item.href">
            {{ item.text.toUpperCase() }}
          </router-link>
        </template>
      </v-breadcrumbs>
    </div>
  </section>
</template>

<script>
export default {
  props: ["items", "title"],
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding-inline: 30px;
  a {
    font-size: 15px;

    &.disabled {
      color: gray !important;
      pointer-events: none;
    }
  }
}
</style>
