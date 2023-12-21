<template>
  <div class="text-center social_auth">
    <h4 class="mb-3">{{ $t("auth.social.title") }}</h4>
    <ul class="socials mb-6 d-flex align-center justify-center ga-4">
      <li class="twitter">
        <a aria-label="twitter link" href="https://github.com/omar-momen"
          ><Icon name="bi:twitter"
        /></a>
      </li>
      <li class="facebook">
        <a aria-label="facebook link" href="https://github.com/omar-momen"
          ><Icon name="ri:facebook-fill"
        /></a>
      </li>
      <li class="google">
        <a aria-label="google link" href="https://github.com/omar-momen"
          ><Icon name="ri:google-fill"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul.socials {
  li {
    margin-bottom: 3px;
    cursor: pointer;
    transition: color 0.2s linear;

    svg.icon {
      color: var(--main);
      font-size: 32px;
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      &.facebook {
        svg.icon {
          color: var(--facebook);
        }
      }
      &.twitter {
        svg.icon {
          color: var(--twitter);
        }
      }
      &.google {
        svg.icon {
          color: var(--google);
        }
      }
    }
  }
}
</style>
