<template>
  <div class="chatFriends">
    <v-card class="pa-5 d-flex flex-column h-100">
      <v-form class="w-100" @submit.prevent>
        <base-input
          density="compact"
          variant="solo"
          :label="$t('form.search')"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="search"
          v-model="searchVal"
        ></base-input>
      </v-form>

      <ul class="chats mt-10 flex-grow-1">
        <li
          v-for="chat in _chats"
          class="chat"
          :key="chat.id"
          @click.stop="setCurrentChat(chat)"
          :class="{ active: current_chat_id == chat.id }"
        >
          <div class="d-flex">
            <div class="image flex-shrink-0">
              <nuxt-img
                preset="default"
                :src="chat.sender.image"
                alt="Notification's Owner"
                width="50px"
                height="50px"
                class="rounded-circle"
              />
            </div>

            <div class="content">
              <h6>{{ chat.sender.name }}</h6>
              <p class="desc">{{ chat.body.last_message.slice(0, 60) }}</p>
            </div>
          </div>

          <small>{{ chat.body.last_message_date }}</small>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script setup>
onMounted(() => {
  ScrollToBottomOfChat();
});

const props = defineProps({
  chats: {
    type: Array,
    required: true,
  },
});

const searchVal = ref("");
const _chats = computed(() => {
  if (searchVal.value) {
    const filteredChats = props.chats.filter((chat) => {
      return chat.sender.name.includes(searchVal.value);
    });
    return filteredChats;
  } else {
    return props.chats;
  }
});

const route = useRoute();
const current_chat_id = route.params.id;
const setCurrentChat = (chat) => {
  navigateTo(`/chat/${chat.id}`);
};

const ScrollToBottomOfChat = async () => {
  await nextTick();
  const activeChat = document.querySelector("li.chat.active");
  if (activeChat) {
    const chatsContainer = document.querySelector("ul.chats");
    chatsContainer.scrollTop = activeChat.offsetTop;
  }
};
</script>

<style lang="scss" scoped>
.chatFriends {
  height: 80vh;
  .chats {
    overflow-y: scroll;
    .chat {
      padding: 20px 10px 10px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: all 0.2s linear;
      display: flex;
      justify-content: space-between;

      &:hover,
      &.active {
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
}
</style>
