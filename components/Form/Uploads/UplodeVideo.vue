<template>
  <div class="uplodeVideo text-center">
    <label class="coloredSpan font-weight-bold">{{ title }}</label>
    <div class="chooseVideo">
      <span
        v-if="video.video_src || _data_src"
        @click.stop="clearVideo"
        class="clear"
      >
        <Icon name="ant-design:close-outlined"></Icon>
      </span>

      <transition name="fadeIn" mode="out-in">
        <video v-if="video.video_src" :src="video.video_src" controls></video>
        <video v-else-if="_data_src" :src="_data_src" controls></video>
        <div v-else class="placholder">
          <span>{{ title }}</span>
          <span class="icon"><Icon :name="icon" /></span>
        </div>
      </transition>

      <input
        v-if="!video.video_src && !_data_src"
        ref="uplode_file"
        class="file_input"
        type="file"
        accept="video/*"
        name="videoToUplode"
        @change="chooseVideo"
      />

      <div v-if="!video.video_src && !_data_src" class="_overlay">
        <span class="icon"><Icon :name="icon" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    required: true,
  },
  data_src: {
    default: null,
    required: false,
  },
  title: {
    type: String,
    default: "Main video",
    required: false,
  },
  icon: {
    type: String,
    default: "ic:round-video-call",
    required: false,
  },
});

const uplodeDisabled = ref(false);

const video = ref({
  video_file: null,
  video_src: "",
});

const _data_src = ref(props.data_src);

const outsideVideo = computed(() => {
  return props.modelValue;
});
watch(outsideVideo, (newVal) => {
  if (newVal == null) {
    video.value = {
      video_file: null,
      video_src: "",
    };
    return;
  }

  video.value = newVal;
});

const chooseVideo = (e) => {
  video.value.video_file = e.target.files[0];

  if (video.value.video_file) {
    video.value.video_src = URL.createObjectURL(video.value.video_file);
    uplodeDisabled.value = false;
  }

  emits("update:modelValue", video.value);

  e.target.value = null;
};

const clearVideo = () => {
  emits("update:modelValue", null);
  _data_src.value = null;
};
</script>

<style lang="scss" scoped>
.uplodeVideo {
  margin-block: 20px;

  video {
    width: 300px;
    height: 250px;
  }
  .chooseVideo {
    position: relative;
    text-align: center;
    cursor: pointer;
    margin: 10px auto;
    width: 300px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border);
    border-radius: 20px;

    @media (max-width: 400px) {
      width: 200px;
    }

    .clear {
      position: absolute;
      top: 10px;
      left: 10px;
      cursor: pointer;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      border-radius: 50%;
      z-index: 99;
      color: #fff;

      svg.icon {
        color: #fff;
        font-size: 15px;
      }
    }

    &:hover {
      ._overlay {
        opacity: 1;

        span.icon {
          transform: scale(5);
        }
      }
    }

    img {
      position: relative;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 150px;
      display: inline-block;
      font-size: 15px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 20px;
    }

    .placholder {
      position: relative;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 150px;
      padding: 6px 0;
      display: inline-block;
      font-size: 15px;
      text-transform: uppercase;
      border-radius: 20px;
      background: var(--main_bg);
      border: 1px solid var(--border);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      span {
        display: block;
        margin-inline: 5px;
      }
    }

    .file_input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: inline-block;
      opacity: 0;
      cursor: pointer;
    }

    ._overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.2s linear;
      opacity: 0;

      span {
        display: block;
        margin-inline: 35px;
        font-size: 15px;
        transition: all 0.2s linear;
        transform: scale(0);
        margin-top: -30px;

        svg.icon {
          color: #fff;
        }
      }
    }
  }
}
</style>
