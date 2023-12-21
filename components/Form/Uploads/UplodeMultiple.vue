<template>
  <div class="custom_card">
    <div class="uplodeFiles">
      <div class="chooseFiles">
        <div class="placholder">
          <span v-if="_files.length < 1">{{ title }}</span>
          <div class="icons" v-if="_files.length < 1">
            <Icon v-for="item in 3" :name="icon"></Icon>
          </div>
          <div class="icons" v-else>
            <Icon v-for="item in _files.length" :name="icon"></Icon>
          </div>
        </div>

        <input
          ref="uplode_file"
          class="file_input"
          type="file"
          multiple
          :accept="type == 'video' ? 'video/*' : 'image/*'"
          :name="title"
          @change="chooseFiles"
        />

        <div class="_overlay">
          <div class="icons" v-if="_files.length < 1">
            <Icon v-for="item in 3" :name="icon"></Icon>
          </div>
          <div class="icons" v-else>
            <Icon v-for="item in 3" :name="icon"></Icon>
          </div>
        </div>
      </div>

      <div class="showFiles">
        <transition name="fadeInUp" mode="out-in">
          <div class="files" v-if="_files.length > 0">
            <div class="file" v-for="file in _files" :key="file.id">
              <span class="close" @click="deleteFile(file)"
                ><Icon name="ant-design:close-outlined"></Icon
              ></span>
              <video v-if="type == 'video'" :src="file.src" controls></video>
              <nuxt-img
                v-else
                :src="file.src"
                alt="Uploded Image"
                preset="default"
                height="300"
                width="150"
              />
            </div>
          </div>
        </transition>
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
    default: () => [],
    required: false,
    type: Array,
  },
  title: {
    type: String,
    default: "Select Files",
  },
  type: {
    type: String,
    default: "img",
    required: false,
  },
});

const icon =
  props.type == "video"
    ? "ic:round-video-call"
    : "material-symbols:camera-enhance-rounded";

const filesToUplode = ref([]);
const _data_src = ref(props.data_src);

const _files = computed(() => {
  return [...filesToUplode.value, ..._data_src.value];
});

const chooseFiles = (e) => {
  let files = Array.from(e.target.files);

  if (files.length > 5) {
    alert("The max limit is 5 files at a time");
    return;
  }

  files.forEach((file) => {
    if (file) {
      let src = URL.createObjectURL(file);
      filesToUplode.value.push({
        file_obj: file,
        src: src,
        name: file.name,
        uniqeID: Math.random().toString(16).slice(2),
      });
    }

    e.target.value = null;
  });

  emits("update:modelValue", _files.value);
};

const deleteFile = (file) => {
  if (file.id) {
    _data_src.value = _data_src.value.filter((current_file) => {
      return file.id != current_file.id;
    });
  } else {
    filesToUplode.value = filesToUplode.value.filter((current_file) => {
      return file.uniqeID != current_file.uniqeID;
    });
    emits("update:modelValue", _files.value);
  }
};
</script>

<style lang="scss" scoped>
.uplodeFiles {
  margin-bottom: 15px;
  .chooseFiles {
    position: relative;
    text-align: center;
    cursor: pointer;
    margin: 10px auto;
    width: 300px;
    border: 1px solid var(--border);
    border-radius: 20px;

    &:hover {
      ._overlay {
        opacity: 1;

        .icons {
          svg.icon {
            transform: scale(5);
          }
        }
      }
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
      overflow: hidden;

      span {
        color: var(--main);
        display: block;
      }

      .icons {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        svg.icon {
          display: block;
          margin-inline: 5px;
          font-size: 40px;
        }
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

      .icons {
        display: flex;

        svg.icon {
          display: block;
          margin-inline: 35px;
          color: #fff;
          font-size: 15px;
          transition: all 0.2s linear;
          transform: scale(0);
        }
      }
    }
  }

  .showFiles {
    .files {
      display: flex;
      align-items: center;
      max-width: inherit;
      overflow-x: scroll;

      .file {
        position: relative;
        margin-inline: 5px;
        max-width: 200px;

        .close {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: crimson;
          font-size: 13px;
          color: #fff;
          z-index: 99;
        }

        img,
        video {
          margin: 10px;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 0 25px 0 25px;
        }
      }
    }
  }
}
</style>
