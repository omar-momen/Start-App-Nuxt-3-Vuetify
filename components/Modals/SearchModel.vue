<template>
  <transition name="fadeIn">
    <div v-if="show" class="searchModel" @click="$emit('close')">
      <main @click.stop>
        <span @click.stop="$emit('close')" class="close"
          ><Icon name="fa:close"
        /></span>

        <v-form class="bg-transparent elevation-0" @submit.prevent="submit">
          <Logo class="mx-auto mt-6 mb-5" />

          <SearchInput aria-label="search" v-model="searchVal" />

          <v-container class="text-center">
            <v-row justify="center" dense>
              <v-col v-for="(shortcut, i) in shortcuts" :key="i" cols="auto">
                <v-card
                  :href="shortcut.href"
                  class="pa-4"
                  flat
                  rel="noopener noreferer"
                  target="_blank"
                  width="112"
                >
                  <v-avatar
                    :icon="shortcut.icon"
                    color="white"
                    variant="tonal"
                    class="mb-2"
                  ></v-avatar>

                  <div
                    class="text-caption text-truncate"
                    v-text="shortcut.title"
                  ></div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show"]);

const searchVal = ref(null);

const shortcuts = ref([
  {
    icon: "mdi-github",
    title: "Master ",
    href: "https://github.com/vuetifyjs/vuetify",
  },
  {
    icon: "mdi-github",
    title: "Dev",
    href: "https://github.com/vuetifyjs/vuetify/tree/dev",
  },
  {
    icon: "mdi-github",
    title: "Stable",
    href: "https://github.com/vuetifyjs/vuetify/tree/v2-stable",
  },
  {
    icon: "mdi-github",
    title: "My Pull Requests",
    href: "https://github.com/vuetifyjs/vuetify/pulls/johnleider",
  },
]);

const _show = computed(() => {
  return props.show;
});

watch(_show, (newVal) => {
  if (newVal) {
    document.querySelector("body").classList.add("noScroll");
  } else {
    document.querySelector("body").classList.remove("noScroll");
  }
});
</script>

<style lang="scss">
.searchModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #333333f2;
  background-position: center;
  background-size: cover;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    a.logo {
      text-align: center;
      display: block;
    }

    width: 600px;
    @media (max-width: 620px) {
      width: 98vw;
    }
  }

  .close {
    position: absolute;
    top: 15px;
    left: 15px;
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

body.rtl {
  .searchModel {
    .close {
      left: unset;
      right: 15px;
    }
  }
}
</style>
