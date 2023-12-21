<template>
  <v-container class="resourse">
    <Breadcrumb :items="items" />

    <v-form class="my-5" @submit.prevent>
      <h2 class="mb-2">Models</h2>
      <BaseButton
        aria-label="Open base Model"
        type="button"
        @click="showModel1 = true"
        >Open base Model</BaseButton
      >
      ||
      <v-btn @click="showModel2 = true" color="primary">Open Image Model</v-btn>

      <h2 class="my-2">Google Map</h2>
      <GoogleMap @updateLocation="updateLocation" :location="location" />
      <h2 class="my-2">Address Map</h2>
      <div class="custom_card p-2">
        <GetAddress @updateLocation="updateLocation" :location="location" />
      </div>

      <h2>File Input</h2>
      <UplodeFile v-model="file" />

      <h2>File Input Multiple</h2>
      <UplodeFile label="Select Files" v-model="files" multiple />

      <h2>Uplode Image</h2>
      <UplodeImage v-model="image" data_src="/images/brands/appStore.png" />

      <h2>Uplode Video</h2>
      <UplodeVideo v-model="video" data_src="/videos/test_video.mp4" />

      <h2>Uplode Image Multiple</h2>
      <UplodeMultiple v-model="images" :data_src="images_srcs" />

      <h2>Uplode Video Multiple</h2>
      <UplodeMultiple v-model="videos" :data_src="videos_srcs" type="video" />

      <h2>Date picker</h2>
      <v-date-picker
        color="primary"
        class="mb-5"
        v-model="date"
        placholder="pick Date"
      ></v-date-picker>

      <h2>Time picker</h2>
      <v-text-field
        color="primary"
        type="time"
        placholder="Pick Time"
        v-model="time"
        class="mb-5"
      ></v-text-field>

      <h2>Text Input</h2>
      <base-input
        type="text"
        label="text input"
        v-model="textInput"
        class="ssss"
      ></base-input>

      <h2>Number Input</h2>
      <base-input
        type="number"
        label="number input"
        v-model="numberInput"
      ></base-input>

      <h2>Password Input</h2>
      <base-input
        type="password"
        label="set password"
        v-model="passwordInput"
        class="pssy"
      ></base-input>

      <h2>TextArea</h2>
      <base-input
        type="textarea"
        label="textarea input"
        v-model="textareaInput"
      ></base-input>

      <h2>static Selcet</h2>
      <select-input
        v-model="staticCity"
        :staticItems="staticCities"
        label="static City"
      />

      <h2>With Url Selcet</h2>
      <select-input
        v-model="withUrlCity"
        getUrl="cities"
        label="With Url City"
      />

      <h2>Bind Selects</h2>
      <select-input v-model="city" getUrl="cities" label="City" />
      <select-input
        v-model="area"
        :getUrl="`areas?city_id=${city?.id}`"
        :_sync="city"
        label="Area"
      />

      <RadioInput
        v-model="favBrowser"
        :items="radiosItems"
        label="Choose Browser"
      />

      <v-checkbox
        label="Do you agree to our terms?"
        color="primary"
        v-model="userAgreed"
      ></v-checkbox>

      <v-switch label="Switch" v-model="_switch" color="primary"></v-switch>
    </v-form>

    <BaseModel :show="showModel1" @close="showModel1 = false">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui placeat
        minima veniam, provident ipsam dignissimos doloremque perspiciatis
        corporis dolorum nam veritatis consectetur, nesciunt architecto quos
        explicabo minus eligendi officiis, excepturi debitis ex molestiae sed
        doloribus unde. Inventore eius minima earum autem, nulla cupiditate et,
        excepturi aperiam libero reprehenderit corrupti error doloremque tempora
        eligendi veritatis magni quas, rem beatae dolore ipsam. Maxime,
        cupiditate doloribus minus optio qui porro pariatur nostrum quibusdam
        officiis nemo amet reiciendis fugiat unde saepe voluptate tenetur? Quia,
        debitis eveniet officiis repellat nisi assumenda quisquam dolor,
        voluptates, accusamus molestias similique. Nemo recusandae minima,
        consequuntur deserunt earum fugit quaerat.
      </p>
    </BaseModel>
    <ImageModel
      :show="showModel2"
      @close="showModel2 = false"
      src="/images/brands/appStore.png"
    />
  </v-container>
</template>

<script setup>
useSeoMeta({
  title: "Resourses",
});

const showModel1 = ref(false);
const showModel2 = ref(false);

// ========= Breadcrump
const items = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "resources",
    href: "/resources",
  },
];

const location = ref({ lat: null, lng: null, address: null });
const updateLocation = (new_location) => {
  location.value = new_location;
};

const image = ref(null);
const video = ref(null);
const images = ref(null);
const videos = ref(null);
const file = ref(null);
const files = ref(null);

const images_srcs = ref([
  {
    id: 1,
    src: "/images/brands/appStore.png",
  },
  {
    id: 2,
    src: "/images/brands/googlePlay.png",
  },
]);
const videos_srcs = ref([
  {
    id: 1,
    src: "/videos/test_video.mp4",
  },
]);

const date = ref(null);
const time = ref(null);

const city = ref(null);
const area = ref(null);

const withUrlCity = ref(null);

const staticCity = ref(null);
const staticCities = [
  {
    id: 1,
    name: "Riyadh",
  },
  {
    id: 2,
    name: "Jeddah",
  },
  {
    id: 3,
    name: "Mecca",
  },
  {
    id: 4,
    name: "Medina",
  },
  {
    id: 5,
    name: "Ad Damm\u0101m",
  },
  {
    id: 6,
    name: "Al Huf\u016bf",
  },
  {
    id: 7,
    name: "Tab\u016bk",
  },
];

const textInput = ref(null);
const textareaInput = ref(null);
const numberInput = ref(null);
const passwordInput = ref(null);

const radiosItems = [
  {
    id: 1,
    name: "Chrome",
    value: "chrome",
  },
  {
    id: 2,
    name: "FireFox",
    value: "firefox",
  },
  {
    id: 3,
    name: "Edg",
    value: "edg",
  },
];
const favBrowser = ref(null);

const userAgreed = ref(false);

const _switch = ref(false);
</script>
