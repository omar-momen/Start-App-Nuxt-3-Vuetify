<template>
  <main id="chat_view">
    <div class="notice">
      <span class="me-2"><Icon name="gridicons:notice-outline" /></span>
      <span>ننوه بأن المحادثة مراقبة من قبل لوحة التحكم</span>
    </div>
    <div class="location">
      <span class="me-2"><Icon name="ic:sharp-pin-drop" /></span>
      <span>المدينة المنورة</span>
    </div>

    <div class="chat_view">
      <div
        class="messageOwner"
        v-for="message in messages"
        :key="message.id"
        :class="{
          sender: message.position == 'me',
          receiver: message.position == 'other',
        }"
      >
        <NuxtImg
          preset="default"
          width="50px"
          height="50px"
          class="user_img rounded-circle"
          :src="message.sender.image"
        />
        <div class="content">
          <div
            class="media"
            v-if="
              message.type == 'image' ||
              message.type == 'video' ||
              message.type == 'document'
            "
          >
            <div v-if="message.type == 'image'" class="image">
              <NuxtImg :src="message.content" />
              <p v-if="message.descreption" class="descreption">
                {{ message.descreption }}
              </p>
            </div>

            <div v-if="message.type == 'video'" class="video">
              <video controls>
                <source :src="message.content" type="video/mp4" />
              </video>
              <p v-if="message.descreption" class="descreption">
                {{ message.descreption }}
              </p>
            </div>

            <div v-if="message.type == 'document'" class="document">
              <a
                class="file_preview"
                :href="message.content"
                download
                target="_blank"
              >
                <span class="icon"
                  ><Icon size="30" color="#fff" name="mdi:file-document"
                /></span>
                <div>
                  <span>{{
                    message.fileObj.name.toUpperCase().slice(0, 20)
                  }}</span>
                  <span>{{ message.fileObj.type }}</span>
                </div>
              </a>
              <p v-if="message.descreption" class="descreption">
                {{ message.descreption }}
              </p>
            </div>

            <div v-if="message.message_type == 'audio'" class="audio">
              <audio controls>
                <source :src="message.message" type="audio/ogg" />
              </audio>
            </div>
          </div>

          <p
            v-if="message.type == 'text'"
            v-html="message.content.replace(/(\n|\n|\r)/gm, '<br />')"
            class="text"
          ></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
main {
  flex-grow: 1;
  transition: all 0.3s ease-in-out;
  background: var(--main_bg);
  overflow-y: scroll;
  padding-top: 20px;

  .notice {
    background-color: #f9f3be;
    color: #000;
    padding: 7px;
    text-align: center;
    border-radius: 15px;
    margin-inline: auto;
    width: 85%;
  }

  .location {
    background-color: #d1d1d1;
    color: #000;
    padding: 7px 10px;
    text-align: center;
    border-radius: 15px;
    margin: 13px auto;
    width: fit-content;
    font-size: 16px;
  }

  .chat_view {
    background-size: contain;
    background-repeat: repeat;
    padding: 20px 0;

    .messageOwner {
      display: flex;
      margin-bottom: 10px;
      width: 100%;

      .user_img {
        margin-inline: 10px;
      }

      .content {
        max-width: 70vw;

        p.text {
          padding: 5px 15px;
          height: fit-content;
          border-radius: 10px;
          word-wrap: break-word;
          max-width: 100%;
          font-size: 15px;
        }

        .media {
          width: fit-content;
          border-radius: 10px;
          .video,
          .image {
            max-width: 400px;
            min-height: 200px;
            border-radius: 10px;
            line-height: 1;
            @media (max-width: 500px) {
              min-height: 150px;
            }

            img,
            video {
              width: 100%;
              min-height: 200px;
              max-height: 200px;
              object-fit: cover;
              border-radius: 10px 10px 0 0;
              cursor: pointer;
            }
          }

          .descreption {
            padding: 7px;
            margin: 0;
            border-radius: 0 0 10px 10px;
            text-align: center;
            background: #969696;
            color: #fff;
            border: 1px solid var(--border);
            font-size: 15px;
          }
        }
      }

      // ====> Sender
      &.sender {
        justify-content: flex-start;
        img {
          order: 1;
        }
        .content {
          order: 2;
          p.text {
            background: var(--primary);
            color: #000;
          }
        }
      }
      // ====> Receiver
      &.receiver {
        justify-content: flex-end;
        img {
          order: 2;
        }
        .content {
          order: 1;
          p.text {
            background: #d8d4e4;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
