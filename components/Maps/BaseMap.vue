<template>
  <!-- Not Ready Yet -->
  <section class="baseMap">
    <GoogleMap
      api-key="AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA"
      v-if="location"
      @click="updateLocation"
      :center="location"
      :zoom="zoom"
      :options="mapStyle"
      :style="{ width: '100%', height: height + 'px' }"
    >
      <CustomMarker
        :options="{ position: location, anchorPoint: 'BOTTOM_CENTER' }"
      >
        <div style="text-align: center">
          <!-- <nuxt-image
            src="https://vuejs.org/images/logo.png"
            width="50"
            height="50"
            style="margin-top: 8px"
          ></nuxt-image> -->
          <nuxt-img
            src="https://vuejs.org/images/logo.png"
            preset="default"
            width="30"
            height="30"
            style="margin-top: 8px"
          />
        </div>
      </CustomMarker>
    </GoogleMap>

    <div class="disabledMap" v-else></div>
  </section>
</template>

<script setup>
import { GoogleMap, CustomMarker } from "vue3-google-map";

const emits = defineEmits(["updateLocation"]);

const props = defineProps({
  zoom: {
    type: Number,
    default: 12,
    required: false,
  },
  readOnly: {
    type: Boolean,
    default: true,
    required: false,
  },
  path: {
    type: Array,
    required: false,
  },
  strokeColor: {
    type: String,
    required: false,
    default: "#1A73E8",
  },
  height: {
    type: String,
    required: false,
    default: "500",
  },
  location: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  getCurrentLocation();
});

const mapStyle = {};

const getAddressFromLatLng = async (lat, lng) => {
  // Create a geocoder object
  let geocoder = new google.maps.Geocoder();

  // Create a LatLng object with the provided latitude and longitude
  let latLng = new google.maps.LatLng(lat, lng);

  // Perform the geocoding request
  let { results } = await geocoder.geocode({ latLng: latLng });
  return results[0].formatted_address;
};

const updateLocation = async (e) => {
  if (!props.readOnly) return;

  const lat = e.latLng.lat();
  const lng = e.latLng.lng();

  let _location = {
    lat: lat,
    lng: lng,
    address: await getAddressFromLatLng(lat, lng),
  };

  emits("updateLocation", _location);
};

const getCurrentLocation = () => {
  let currentLocation = {};

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      currentLocation.lat = position.coords.latitude;
      currentLocation.lng = position.coords.longitude;

      // Create a geocoder object
      let geocoder = new google.maps.Geocoder();

      // Create a LatLng object with the current latitude and longitude
      let latLng = new google.maps.LatLng(
        currentLocation.lat,
        currentLocation.lng
      );

      // Perform the geocoding request
      let { results } = await geocoder.geocode({ latLng: latLng });
      currentLocation.address = results[0].formatted_address;

      emits("updateLocation", currentLocation);
    });
  }
};
</script>

<style lang="scss">
.baseMap {
  position: relative;
  width: 100%;
  margin: 15px auto;
  margin: 0;

  .feature.map {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    iframe {
      height: 100%;
      width: 100%;
      border: 0;
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 10+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
      -webkit-backface-visibility: hidden; /* Fix for transition flickering */
    }
  }
  .vue-map-container {
    height: 100%;
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    .vue-map {
      border-radius: 10px;
    }

    .customeMarker {
      position: relative;

      .img {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100;
          border-radius: 50%;
          object-fit: contain;
        }
      }

      .markerWindow {
        position: absolute;
        top: -106px;
        background: #333;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #fff;
        border-radius: 15px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in;
        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}

.disabledMap {
  width: 100%;
  margin: 15px auto;
  height: 500px;
  background: #e5e3df;
}
</style>
