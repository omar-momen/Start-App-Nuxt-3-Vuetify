<template>
  <v-text-field
    outlined
    type="text"
    id="location_autocompleate"
    label="Search Location"
    @click="getAddressAr"
    v-model="address"
    prepend-inner-icon="mdi-map-marker"
  />
</template>

<script setup>
onMounted(() => {
  getCurrentLocation();
});

const emits = defineEmits(["updateLocation"]);

const props = defineProps({
  location: {
    type: Object,
    required: true,
  },
});

const address = ref("");

const _location = computed(() => {
  return props.location;
});
watch(_location, (newVal) => {
  address.value = newVal.address;
});

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
      address.value = results[0].formatted_address;

      emits("updateLocation", currentLocation);
    });
  }
};

const getAddressAr = async () => {
  let new_location = {};

  const input = document.getElementById("location_autocompleate");

  let searchBox = new google.maps.places.SearchBox(input);
  searchBox.addListener("places_changed", () => {
    let places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    new_location.address = places[0].formatted_address;
    new_location.lat = places[0].geometry.location.lat();
    new_location.lng = places[0].geometry.location.lng();
    emits("updateLocation", new_location);
  });
};
</script>

<style lang="scss" scoped></style>
