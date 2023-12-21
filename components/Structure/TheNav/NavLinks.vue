<template>
  <ul class="links" :class="{ smallScreen: props.smallScreen }">
    <li class="link" v-for="link in navLinks">
      <nuxt-link :to="link.link">
        {{ link.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["navLinks", "smallScreen"]);
</script>

<style lang="scss" scoped>
nav.theNav {
  ul.links {
    align-items: center;

    li {
      &:not(:last-child) {
        margin-inline-end: 20px;
      }
      a {
        font-size: 15px;
        text-transform: uppercase;
        display: inline-block;
        padding: 10px 15px;
        position: relative;
        font-weight: 500;

        &:after {
          content: "";
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: var(--primary);
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }

        &:hover,
        &.router-link-active {
          &:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }

    &.smallScreen {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      li {
        width: 100%;
        border-radius: 0;
        padding: 10px 20px;
        border-right: 4px solid transparent;

        &:hover {
          background: #fef4f3;
          border-right: 4px solid var(--primary);
        }

        & > div {
          display: flex;
          justify-content: space-between;

          & > span {
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  &.stikyNav,
  &.static_nav {
    ul.links {
      li {
        div {
          color: var(--secondary);
        }
      }
    }
  }
}
</style>
