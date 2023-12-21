<template>
  <div ref="mapDiv" class="googleMap" style="width: 100%; height: 70vh"></div>
</template>

<script setup>
const mapDiv = ref(null);
const marker = ref(null);
const map = ref(null);

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

onMounted(async () => {
  await getCurrentLocation();

  map.value = new google.maps.Map(mapDiv.value, {
    center: _location.value,
    zoom: 8,
  });

  marker.value = new google.maps.Marker({
    position: _location.value,
    map: map.value,
    title: "Click to zoom",
  });

  map.value.addListener("click", (e) => {
    updateLocation(e);
  });

  //   map.addListener("center_changed", () => {
  //     window.setTimeout(() => {
  //       map.panTo(marker.getPosition());
  //     }, 3000);
  //   });
  //   marker.addListener("click", () => {
  //     map.setZoom(12);
  //     map.setCenter(marker.getPosition());
  //   });
});

const getAddressFromLatLng = async (lat, lng) => {
  // Create a geocoder object
  let geocoder = new google.maps.Geocoder();

  // Create a LatLng object with the provided latitude and longitude
  let latLng = new google.maps.LatLng(lat, lng);

  // Perform the geocoding request
  let { results } = await geocoder.geocode({ latLng: latLng });
  return results[0].formatted_address;
};

const updateMarkerPosition = (location) => {
  if (!marker.value) return;
  let latlng = new google.maps.LatLng(location.lat, location.lng);
  marker.value.setPosition(latlng);
  map.value.setCenter(latlng);
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

  updateMarkerPosition(_location);
  emits("updateLocation", _location);
};

const getCurrentLocation = () => {
  return new Promise((resolve) => {
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

        resolve(emits("updateLocation", currentLocation));
      });
    }
  });
};

const _location = computed(() => {
  return props.location;
});
watch(_location, (newVal) => {
  updateMarkerPosition(newVal);
});
</script>

<style lang="scss" scoped></style>
