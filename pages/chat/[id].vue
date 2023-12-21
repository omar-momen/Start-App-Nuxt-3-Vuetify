<template>
  <div class="chat">
    <ChatContent :chatObj="chatObj" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "chat",
});

const messages = [
  {
    id: 1,
    content: "/Temp/slider_1.png",
    type: "image",
    position: "me",
    sender: {
      image: "/Temp/slider_1.png",
    },
  },
  {
    id: 2,
    content: "hello",
    type: "text",
    position: "other",
    sender: {
      image: "/Temp/slider_3.png",
    },
  },
  {
    id: 3,
    content: "How are you?",
    type: "text",
    position: "me",
    sender: {
      image: "/Temp/slider_1.png",
    },
  },
  {
    id: 4,
    content: "I'm good, thanks!",
    type: "text",
    position: "other",
    sender: {
      image: "/Temp/slider_3.png",
    },
  },
  {
    id: 5,
    content: "/videos/test_video.mp4",
    type: "video",
    position: "me",
    sender: {
      image: "/Temp/slider_1.png",
    },
  },
];
const chatObj = {
  messages: messages,
  sender: {
    online: true,
  },
};
</script>
