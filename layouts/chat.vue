<template>
  <div class="chat_layout">
    <TheNavbar />

    <div class="insideHomeView">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" class="chatFriends d-none d-lg-block">
            <ChatFriends :chats="chats" />
          </v-col>

          <v-col cols="12" lg="8" class="chatContent">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
const chats = reactive([
  {
    id: 1,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 2,
    sender: {
      id: 1,
      name: "عاطف المرسي",
      image: "/Temp/slider_3.png",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 3,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 4,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 5,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 6,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
  {
    id: 7,
    sender: {
      id: 1,
      name: "عمر مؤمن",
      image: "/images/avatars/nav.svg",
    },
    body: {
      last_message:
        "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي, هذه النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي ",
      last_message_date: "2021-10-10",
    },
  },
]);
</script>

<style lang="scss" scoped></style>
