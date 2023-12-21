<template>
  <div class="chat_view_wrapper">
    <ChatHeader :chatObj="chatObj" />

    <ChatView :messages="messages" />

    <ChatFooter :chatObj="chatObj" @send_message="send_message" />
  </div>
</template>

<script setup>
const props = defineProps({
  chatObj: {
    type: Object,
    required: true,
  },
  readOnly: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const messages = reactive([...props.chatObj.messages]);

const emits = defineEmits(["message"]);

const send_message = (message) => {
  messages.push(message);
};
</script>

<style lang="scss" scoped>
.chat_view_wrapper {
  height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
