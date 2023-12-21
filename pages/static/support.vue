<template>
  <div class="contactUs">
    <header class="header"></header>

    <ContactForm data-aos="fade-right" />

    <main class="main">
      <v-container>
        <div class="section_1" data-aos="fade-rght">
          <h3 class="h_3">{{ $t("pages.support.title1") }}</h3>
          <p class="para">{{ $t("pages.support.para1") }}</p>
        </div>
      </v-container>

      <v-container>
        <div class="section_2" data-aos="fade-left">
          <h3 class="h_3">{{ $t("pages.support.title2") }}</h3>
          <p class="para">{{ $t("pages.support.para2") }}</p>

          <div class="office_card">
            <NuxtImg
              preset="default"
              src="/images/office.svg"
              width="120"
              height="120"
              class="mb-8"
            />

            <h5 class="h_5">{{ $t("pages.support.city") }}</h5>
            <p class="para gray">{{ $t("pages.support.location") }}</p>
            <h6 class="h_6">920033232</h6>
            <a href="/google" class="underline text-subtitle-2">{{
              $t("pages.support.googleMap")
            }}</a>
          </div>
        </div>
      </v-container>

      <div class="section_3" data-aos="fade-up-right">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7">
              <h2 class="h_2">{{ $t("pages.support.title3") }}</h2>
              <p class="para">{{ $t("pages.support.para3") }}</p>
            </v-col>
            <v-col cols="12" md="5">
              <base-button class="with_icon animate_dark dark xl">
                920033232
                <Icon class="ms-2" size="20" color="#fff" name="mdi:phone" />
              </base-button>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Contact US",
});
</script>

<style lang="scss" scoped>
.contactUs {
  position: relative;

  .header {
    height: 80vh;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.414),
        rgba(0, 0, 0, 0.169)
      ),
      url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
  }

  main.main {
    padding: 50px 0;

    .section_1 {
      padding: 20px 0 80px 0;
      width: 50%;
      margin-inline-start: auto;

      @media (max-width: 1280px) {
        width: 100%;
        text-align: center;
      }
    }

    .section_2 {
      text-align: center;
      padding-block: 50px;

      .office_card {
        background: var(--main_bg);
        padding: 80px;
        box-shadow: 0px 10px 40px var(--shadow_1);
        width: fit-content;
        margin: 50px auto;
        border-radius: 10px;

        a {
          text-decoration: underline;
        }
      }
    }

    .section_3 {
      background: var(--main_bg);
      padding: 90px 0;
    }
  }
}
</style>
