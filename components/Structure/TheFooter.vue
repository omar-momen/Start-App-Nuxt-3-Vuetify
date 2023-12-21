<template>
  <footer class="theFooter">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <Logo fixed_theme="light" />
          <div class="contact mt-8">
            <div class="mt-4">
              <p>{{ $t("footer.cutomerServiceNum") }}</p>
              <a href="tel:+966112456403">966112456403</a>
            </div>
            <div class="mt-4">
              <p>{{ $t("footer.cutomerServicemail") }}</p>
              <a href="mailto:info@samh.com.sa">info@samh.com.sa</a>
            </div>
          </div>

          <div class="mt-10">
            <h4 class="h_4 mb-0">{{ $t("footer.apps") }}</h4>
            <div class="apps">
              <div class="app mt-3">
                <a href="https://facebook.com">
                  <Icon size="35" name="mdi:apple" />
                  <p>
                    <span>{{ $t("footer.downloadApp") }}</span>
                    <span>{{ $t("footer.appleStore") }}</span>
                  </p>
                </a>
              </div>
              <div class="app mt-3">
                <a href="https://facebook.com">
                  <Icon size="30" name="bi:google-play" />
                  <p>
                    <span>{{ $t("footer.getItIn") }}</span>
                    <span>{{ $t("footer.googlePlay") }}</span>
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-15">
            <h5 class="h_5">{{ $t("footer.followUs") }}</h5>
            <ul class="socials">
              <li>
                <a href="https://facebook.com">
                  <Icon size="18" name="ri:facebook-fill" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <Icon size="18" name="ion:logo-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <Icon size="18" name="bi:twitter" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <Icon size="18" name="bi:youtube" />
                </a>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="mb-10">
            <h5 class="h_5 mb-2">{{ $t("footer.upToDate") }}</h5>
            <div class="mail">
              <base-input
                v-model="email"
                name="email"
                variant="solo"
                single-line
                type="email"
                :label="$t('footer.email')"
                class="flex-grow-1"
              >
                <template #appendInner>
                  <base-button class="animate filled" aria-label="SUBSCRIBE">{{
                    $t("footer.subscribe")
                  }}</base-button>
                </template>
              </base-input>
            </div>
          </div>

          <v-row justify="center" class="row_links">
            <v-col cols="12" md="4" sm="6">
              <div>
                <h5 class="h_5 mb-6">{{ $t("footer.companyInfo") }}</h5>
                <ul class="links">
                  <li><nuxt-link to="/">Apartment for Rent</nuxt-link></li>
                  <li><nuxt-link to="/">Apartment Low to hide</nuxt-link></li>
                  <li><nuxt-link to="/">Offices for Buy</nuxt-link></li>
                  <li><nuxt-link to="/">Offices for Rent</nuxt-link></li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <div>
                <h5 class="h_5 mb-6">{{ $t("footer.quickLinks") }}</h5>
                <ul class="links">
                  <li><nuxt-link to="/">Terms of Use</nuxt-link></li>
                  <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link to="/">Pricing Plans</nuxt-link></li>
                  <li><nuxt-link to="/">Our Services</nuxt-link></li>
                  <li><nuxt-link to="/">Contact Support</nuxt-link></li>
                  <li><nuxt-link to="/">FAQs</nuxt-link></li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <div>
                <h5 class="h_5 mb-6">{{ $t("footer.discover") }}</h5>
                <ul class="links">
                  <li><nuxt-link to="/">Miami</nuxt-link></li>
                  <li><nuxt-link to="/">Los Angeles</nuxt-link></li>
                  <li><nuxt-link to="/">Chicago</nuxt-link></li>
                  <li><nuxt-link to="/">New York</nuxt-link></li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="copyright">
        <div class="text">{{ $t("footer.copyrights") }} ©</div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
const email = ref(null);
</script>

<style lang="scss">
.theFooter {
  background: #181a20;
  min-height: 300px;
  color: #fff;
  padding: 40px 0 15px;

  @media (max-width: 960px) {
    padding: 40px 0 50px;
  }

  .contact {
    display: flex;
    flex-wrap: wrap;

    & > div:first-child {
      margin-inline-end: 40px;
    }

    p {
      margin-bottom: 5px;
      font-size: 15px;
      color: #bebdbd;
    }
    a {
      color: #fff;
      font-size: 16px;
      font-weight: 600;

      transition: all 0.4s linear;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
  }

  .apps {
    display: flex;
    flex-wrap: wrap;

    & > div:first-child {
      margin-inline-end: 40px;
    }

    .app {
      a {
        display: flex;
        align-items: center;
        padding-block: 10px;
        padding-inline-end: 30px;
        padding-inline-start: 20px;
        flex-grow: 1;
        background: #ffffff0a;
        border-radius: 20px;
        transition: all 0.3s linear;

        p {
          display: flex;
          flex-direction: column;

          span:first-child {
            font-size: 13px;
            font-weight: 300;
            color: #bebdbd;
          }
          span:last-child {
            font-size: 14px;
            font-weight: 600;
            color: #fff;
          }
        }

        svg.icon {
          margin-inline-end: 12px;
          color: #fff;
        }

        &:hover {
          background: var(--primary);
          p {
            span {
              color: #fff;
            }
          }
        }
      }
    }
  }

  ul.socials {
    display: flex;
    align-items: center;

    li {
      margin-inline: 8px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #bebdbd;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        transition: all 0.2s linear;

        &:hover {
          background: #ffffff0d;
          color: #fff;
        }
      }
    }
  }

  .mail {
    display: flex;

    .v-field {
      padding-inline-end: 0 !important;
      border-radius: 16px 0 0 16px !important;
    }

    button {
      height: 100%;
      border-radius: 15px 0 0 15px;
      min-width: 130px;
    }
  }

  ul.links {
    li {
      margin-bottom: 8px;

      a {
        color: #bebdbd;
        font-size: 15px;
        transition: all 0.4s linear;

        &:hover {
          text-decoration: underline;
          color: #fff;
        }
      }
    }
  }

  .copyright {
    margin-top: 50px;
    padding: 30px 0 0 0;
    border-top: 1px solid #ffffff1a;
    color: #bebdbd;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
      padding-top: 10px;

      & > div {
        width: fit-content;
      }
    }
  }
}

body.ltr {
  footer.theFooter {
    .mail {
      .v-field {
        border-radius: 0 16px 16px 0 !important;
      }

      button {
        border-radius: 0 15px 15px 0;
      }
    }
  }
}
</style>
