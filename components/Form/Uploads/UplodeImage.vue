<template>
  <div class="uplodeImage text-center">
    <label class="coloredSpan font-weight-bold">{{ title }}</label>
    <div class="chooseImage">
      <span
        v-if="image.img_src || _data_src"
        @click.stop="clearImage"
        class="clear"
      >
        <Icon name="ant-design:close-outlined"></Icon>
      </span>

      <transition name="fadeIn" mode="out-in">
        <nuxt-img
          v-if="image.img_src"
          :src="image.img_src"
          alt="Uploded Image"
          preset="default"
          height="300"
          width="150"
        />
        <nuxt-img
          v-else-if="_data_src"
          :src="_data_src"
          alt="Uploded Image"
          preset="default"
          height="300"
          width="150"
        />
        <div v-else class="placholder">
          <span>{{ title }}</span>
          <span class="icon"><Icon :name="icon" /></span>
        </div>
      </transition>

      <input
        ref="uplode_file"
        class="file_input"
        type="file"
        accept="image/*"
        :name="title"
        @change="chooseImage"
      />

      <div class="_overlay">
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
    default: "Main Image",
    required: false,
  },
  icon: {
    type: String,
    default: "material-symbols:camera-enhance-rounded",
    required: false,
  },
});

const uplodeDisabled = ref(false);

const image = ref({
  img_file: null,
  img_src: "",
});

const _data_src = ref(props.data_src);

const outsideImage = computed(() => {
  return props.modelValue;
});
watch(outsideImage, (newVal) => {
  if (newVal == null) {
    image.value = {
      img_file: null,
      img_src: "",
    };
    return;
  }

  image.value = newVal;
});

const chooseImage = (e) => {
  image.value.img_file = e.target.files[0];

  if (image.value.img_file) {
    image.value.img_src = URL.createObjectURL(image.value.img_file);
    uplodeDisabled.value = false;
  }

  emits("update:modelValue", image.value);

  e.target.value = null;
};

const clearImage = () => {
  emits("update:modelValue", null);
  _data_src.value = null;
};
</script>

<style lang="scss" scoped>
.uplodeImage {
  margin-block: 20px;
  .chooseImage {
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
