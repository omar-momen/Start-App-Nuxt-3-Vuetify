<template>
  <div class="notification" @click.stop="show = !show">
    <v-tooltip
      theme="light"
      text="Notifications"
      location="bottom"
      aria-label="Notifications Icon"
    >
      <template v-slot:activator="{ props }">
        <v-badge
          color="primary"
          :content="
            useAuthStore().user
              ? useAuthStore().user.notificationLength || 0
              : 0
          "
        >
          <Icon
            size="30"
            v-bind="props"
            name="material-symbols:notifications"
          />
        </v-badge>
      </template>
    </v-tooltip>

    <NavDropdown :show="show" @close="show = false">
      <template v-slot>
        <div
          class="notification_drop_down"
          :class="{ no_Data: notifications.length === 0 }"
        >
          <ul class="items" v-show="notifications.length > 0">
            <li
              v-for="item in notifications"
              class="item"
              :key="item.id"
              @click.stop="show = false"
            >
              <div class="d-flex">
                <div class="image flex-shrink-0">
                  <nuxt-img
                    preset="default"
                    :src="item.image"
                    alt="Notification's Owner"
                    width="50px"
                    height="50px"
                    class="rounded-circle"
                  />
                </div>

                <div class="content">
                  <h6>{{ item.title }}</h6>
                  <p class="desc">{{ item.body.slice(0, 60) }}</p>
                </div>
              </div>

              <small>{{ item.date }}</small>
            </li>
          </ul>
          <div class="noData" v-show="notifications.length === 0">
            <nuxt-img
              preset="default"
              height="300"
              width="300"
              src="/images/empty/empty1.svg"
              alt="Notifications Empty Image"
            />
          </div>
        </div>
      </template>
    </NavDropdown>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const show = ref(false);

const notifications = ref([
  {
    id: 1,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 2,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 3,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 4,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 5,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 6,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 7,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 8,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 9,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 10,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
  {
    id: 11,
    image: "/images/avatars/nav.svg",
    title: "عمر مؤمن",
    body: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
    date: "2021-10-10",
  },
]);
</script>

<style lang="scss" scoped>
.notification {
  position: relative;

  @media (max-width: 800px) {
    position: unset;
  }

  .notification_drop_down {
    width: 500px;

    .items {
      max-height: 60vh;
      overflow-y: scroll;
      .item {
        padding: 20px 10px 10px;
        border-bottom: 1px solid vaR(--border);
        cursor: pointer;
        transition: all 0.2s linear;
        display: flex;
        justify-content: space-between;

        &:hover {
          background: var(--gray_hover);
        }

        .image {
          margin-inline-end: 10px;
        }

        .content {
          h6 {
            color: var(--main_txt);
            font-size: 15px;
          }
          p.desc {
            font-size: 14px;
          }
        }

        small {
          flex-shrink: 0;
        }
      }
    }

    .noData {
      overflow: hidden;
      height: 20vw;
      width: 20vw;

      @media (max-width: 800px) {
        width: 100%;
        height: 40vw;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }

    &.no_Data {
      .items {
        overflow: unset;
      }
    }
  }
}
</style>
