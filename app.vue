<template>
  <v-app class="app">
    <AppLoader v-show="globaleStore.AppInitLoading" />
    <NuxtLayout :key="useHelpers().lang()">
      <div class="h-100">
        <PageLoader v-if="globaleStore.pageLoading" />
        <div class="h-100">
          <NuxtPage />
        </div>
        <NuxtLoadingIndicator />
      </div>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";
import { useThemeStore } from "@/stores/theme";

const globaleStore = useGlobalStore();
const themeStore = useThemeStore();

const htmlClass = computed(() => {
  if (themeStore.current_theme == "dark") return "dark";
  else if (themeStore.current_theme == "light") return "light";
  else return themeStore.default_theme;
});

const route = useRoute();
const dynamicPadding = computed(() => {
  return route.path == "/" || route.path.includes("authentication")
    ? "pt-0"
    : "body-padding";
});

const nuxtApp = useNuxtApp();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${nuxtApp.$i18n.t("app.title")}`
      : nuxtApp.$i18n.t("app.title");
  },
  meta: [
    {
      name: "charset",
      content: "utf-8",
    },
    {
      name: "description",
      content:
        "Get offers from providers (workers) Browse and discover thousands of workers. Read customer reviews and find top sellers. discounted rates. Wide variety of services. Fast delivery. ",
    },
    {
      name: "author",
      content: "Omar Momen",
    },
    {
      name: "keywords",
      content: "SALE, BYE, Workers, DISCOUNT",
    },
    {
      property: "og:title",
      content: "مقاولات",
    },
    {
      property: "og:descreption",
      content:
        "Get offers from providers (workers) Browse and discover thousands of workers. Read customer reviews and find top sellers. discounted rates. Wide variety of services. Fast delivery. ",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      property: "og:url",
      content: "https://moqwalat.vercel.app/",
    },

    {
      property: "twitter:title",
      content: "مقاولات",
    },
    {
      property: "twitter:descreption",
      content:
        "Get offers from providers (workers) Browse and discover thousands of workers. Read customer reviews and find top sellers. discounted rates. Wide variety of services. Fast delivery. ",
    },
    {
      property: "twitter:type",
      content: "website",
    },
    {
      property: "twitter:image",
      content:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      property: "twitter:url",
      content: "https://moqwalat.vercel.app/",
    },
  ],
  htmlAttrs: {
    class: htmlClass,
  },
  bodyAttrs: {
    class: dynamicPadding,
  },
});

// Handling App
nuxtApp.hook("app:suspense:resolve", async () => {
  globaleStore.AppInitLoading = false;
});
</script>
