<template>
  <footer class="footer">
    <v-card class="py-2 px-3">
      <v-form @submit.prevent="send_message">
        <v-textarea
          v-model.trim="data.message_text"
          type="text"
          rows="1"
          hide-details
          variant="solo"
          class="rounded-pill custom_input"
          placeholder="أكتب رسالة..."
          @keydown.enter="send_message"
        >
          <template #append>
            <base-button type="submit" class="py-1 px-2">
              <Icon class="sendButton" size="35" color="#fff" name="mdi:send" />
            </base-button>
          </template>

          <template #append-inner>
            <ChatUploads @fileUploded="upload_file" />
          </template>
        </v-textarea>
      </v-form>
    </v-card>
  </footer>

  <v-dialog width="auto" v-model="showUplode">
    <div class="media mb-5">
      <div v-if="data.message_image_src" class="image">
        <NuxtImg
          preset="default"
          class="me-2 rounded-lg"
          width="400px"
          height="300px"
          :src="data.message_image_src"
        />
      </div>
      <div v-if="data.message_video_src" class="video">
        <video controls>
          <source :src="data.message_video_src" type="video/mp4" />
        </video>
      </div>
      <div v-if="data.message_document_src" class="document">
        <a class="file_preview" :href="data.message_document_src" download>
          <span class="icon"
            ><Icon size="30" color="#fff" name="mdi:file-document"
          /></span>
          <div>
            <span>{{
              data.message_document_obj.name.toUpperCase().slice(0, 20)
            }}</span>
            <span>{{ data.message_document_obj.type }}</span>
          </div>
        </a>
      </div>
    </div>

    <!-- <v-card class="pa-3"> -->
    <v-form @submit.prevent="send_message()">
      <v-textarea
        v-model.trim="data.message_descreption"
        rows="1"
        hide-details
        variant="solo"
        class="rounded-pill custom_input"
        placeholder="أكتب كابشن..."
        @keydown.enter="send_message"
      >
        <template #append>
          <base-button type="submit" class="py-1 px-2">
            <Icon size="35" color="#fff" name="mdi:send" />
          </base-button>
        </template>
      </v-textarea>
    </v-form>
    <!-- </v-card> -->
  </v-dialog>
</template>

<script setup>
const emit = defineEmits(["send_message"]);

const chatView = ref(null);
onMounted(async () => {
  chatView.value = document.querySelector("#chat_view");
  ScrollToBottomOfChat();
});

const data = reactive({
  message_text: ref(null),

  message_document_obj: ref(null),
  message_document_src: ref(null),

  message_image_obj: ref(null),
  message_image_src: ref(null),

  message_video_obj: ref(null),
  message_video_src: ref(null),

  message_descreption: ref(null),
});

const handleNewLine = (e) => {
  if (e) {
    if ((e.ctrlKey && e.key === "Enter") || (e.shiftKey && e.key === "Enter")) {
      e.target.style.height = e.target.scrollHeight + "px";
      return false;
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  return true;
};

const validation = () => {
  if (
    !data.message_text &&
    !data.message_document_obj &&
    !data.message_image_obj &&
    !data.message_video_obj
  ) {
    return false;
  }

  return true;
};

const detect_message_type = () => {
  if (data.message_document_obj) {
    return "document";
  } else if (data.message_image_obj) {
    return "image";
  } else if (data.message_video_obj) {
    return "video";
  } else {
    return "text";
  }
};

const detect_message_content = () => {
  if (data.message_document_obj) {
    return data.message_document_src;
  } else if (data.message_image_obj) {
    return data.message_image_src;
  } else if (data.message_video_obj) {
    return data.message_video_src;
  } else {
    return data.message_text;
  }
};

const create_message = () => {
  let messageType = detect_message_type();
  let messageContent = detect_message_content();
  let messageFileObj = null;

  if (messageType == "document") {
    messageFileObj = data.message_document_obj;
  } else if (messageType == "image") {
    messageFileObj = data.message_image_obj;
  } else if (messageType == "video") {
    messageFileObj = data.message_video_obj;
  }

  return {
    position: "me",
    type: messageType,
    content: messageContent,
    descreption: data.message_descreption,
    fileObj: messageFileObj,
    sender: {
      image: "/Temp/slider_3.png",
    },
  };
};

const ScrollToBottomOfChat = async () => {
  await nextTick();
  chatView.value.scrollTop = chatView.value.scrollHeight;
};

const reseatData = (e) => {
  data.message_text = null;
  data.message_document_obj = null;
  data.message_document_src = null;
  data.message_image_obj = null;
  data.message_image_src = null;
  data.message_video_obj = null;
  data.message_video_src = null;
  data.message_descreption = null;

  showUplode.value = false;

  if (e?.target?.tagName == "TEXTAREA") {
    e.target.style.height = 56 + "px";
  }
};

const showUplode = ref(false);
const upload_file = (e, type) => {
  if (type == "image") {
    data.message_image_obj = e.target.files[0];
    data.message_image_src = URL.createObjectURL(data.message_image_obj);
  } else if (type == "video") {
    data.message_video_obj = e.target.files[0];
    data.message_video_src = URL.createObjectURL(data.message_video_obj);
  } else if (type == "document") {
    data.message_document_obj = e.target.files[0];
    data.message_document_src = URL.createObjectURL(data.message_document_obj);
  }
  e.target.value = null;
  showUplode.value = true;
};

const send_message = async (e) => {
  if (!handleNewLine(e)) {
    return;
  }

  if (!validation()) {
    return;
  }

  const message = create_message();

  emit("send_message", message);

  ScrollToBottomOfChat();

  new Audio("/sounds/message_sent.mp3").play();

  reseatData(e);
};
</script>

<style lang="scss" scoped>
footer.footer {
  flex-shrink: 0;
}
.sendButton {
  transform: rotate(180deg);
}

body.ltr {
  .sendButton {
    transform: rotate(0deg);
  }
}
</style>
