<template>
  <div class="NavMenu" @click="show = !show">
    <Icon name="heroicons:bars-3-center-left" />

    <side-menu
      :title="$t('navbar.sideMenu_lg.title')"
      :show="show"
      @close="show = false"
    >
      <div>
        <ul class="d-flex flex-column">
          <li @click="show = !show" v-for="realton in realtons">
            <nuxt-link :to="realton.url">{{ realton.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </side-menu>
  </div>
</template>

<script setup>
const props = defineProps(["realtons"]);

const show = ref(false);
</script>

<style lang="scss" scoped>
nav.theNav {
  h2 {
    padding: 20px 15px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 30px;
  }

  ul {
    li {
      a {
        display: block;
        width: 100%;
        padding: 12px 20px;
        transition: all 0.3s ease;
        border-right: 4px solid transparent;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;

        &:hover {
          border-right: 4px solid var(--primary);
          background: #9393931f;
          color: var(--primary);
        }
      }
    }
  }
  .NavMenu {
    svg.icon {
      font-size: 25px;
      color: var(--main_txt);
    }
  }
}
</style>
