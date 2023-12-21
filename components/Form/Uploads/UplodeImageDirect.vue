<template>
  <!-- Not Ready Yet -->
  <v-col cols="12" :md="col">
    <div class="uplodeImageDirect">
      <div class="chooseImage">
        <transition name="fadeInUp" mode="out-in">
          <nuxt-img
            v-if="image.img_src"
            :src="image.img_src"
            alt="Uploded Image"
            preset="default"
            height="300"
            width="150"
          />
          <nuxt-img
            v-else-if="data_src"
            :src="data_src"
            alt="Uploded Image"
            preset="default"
            height="300"
            width="150"
          />
          <div v-else class="placholder">
            <span>{{ title }}</span>
            <i :class="placholderIcon"></i>
          </div>
        </transition>

        <input
          ref="uplode_file"
          class="file_input"
          type="file"
          accept="image/*"
          name="imageToUplode"
          @change="chooseImage"
        />

        <div class="_overlay">
          <i :class="placholderIcon"></i>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  emits: ["imageUploded"],

  props: {
    data_src: {
      type: String,
      default: null,
      required: false,
    },
    postUrl: {
      type: String,
      default: "/",
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    title: {
      default: "Main Image",
      required: false,
    },
    placholderIcon: {
      type: String,
      default: "fad fa-photo-video",
      required: false,
    },
    col: {
      required: false,
      type: String,
      default: "12",
    },
  },

  data() {
    return {
      // Loading
      loading: false,

      image: {
        img_file: null,
        img_src: "",
      },

      showModel: false,
    };
  },

  methods: {
    chooseImage(e) {
      this.image.img_file = e.target.files[0];

      if (this.image.img_file) {
        const imgSrc = URL.createObjectURL(this.image.img_file);

        this.$swal({
          title: "Are you sure?",
          text: "make sure it's appropriate photo :D",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            this.sentImage(imgSrc);
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.cancelSent();
          }
        });
      }

      e.target.value = null;
    },

    sentImage(src) {
      this.loading = true;

      const data = new FormData();
      data.append("file", this.image.img_file);
      data.append("attachment_type", "image");
      data.append("model", this.model);

      useMyFetch(this.postUrl, {
        method: "POST",
        body: data,
      })
        .then((res) => {
          this.image.img_src = src;
          this.$swal({
            title: "The Photo Is Safe 😃",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Close",
          });
          this.$emit("imageUploded", res.data.data);
          this.loading = false;
        })
        .catch((err) => {
          this.$iziToast.error({
            title: this.$t("validation.image"),
            message: err.response.data.message,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },

    cancelSent() {
      this.image.img_file = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.uplodeImageDirect {
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

    &:hover {
      ._overlay {
        opacity: 1;

        i {
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
      height: 200px;
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
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      span {
        color: #333;
        display: block;
      }

      .icons {
        display: flex;
        justify-content: space-between;

        i {
          display: block;
          margin-inline: 5px;
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

      i {
        display: block;
        margin-inline: 35px;
        color: #eee;
        font-size: 15px;
        transition: all 0.2s linear;
        transform: scale(0);
      }
    }
  }
}
</style>
