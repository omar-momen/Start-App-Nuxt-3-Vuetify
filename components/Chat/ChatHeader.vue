<template>
  <header>
    <v-card class="d-flex justify-space-between align-center py-2 px-3">
      <div class="user d-flex align-center flex-grow-1">
        <NuxtImg
          src="/Temp/slider_3.png"
          preset="default"
          class="rounded-circle me-2"
          width="55px"
          height="55px"
        />

        <div class="info">
          <h4>عاطف المرسي</h4>
          <p
            class="status text-subtitle-2"
            :class="{ online: chatObj.sender.online }"
          >
            متصل الآن
          </p>
        </div>
      </div>

      <base-button @click="showService = true" class="rounded-pill filled ok">
        <Icon name="clarity:cursor-hand-click-line" />
        <span v-if="!useHelpers().isSmallScreen()" class="ms-2">طلب خدمة</span>
      </base-button>
    </v-card>
  </header>

  <v-dialog
    v-model="showService"
    transition="dialog-top-transition"
    width="500"
  >
    <v-card class="pa-5 rounded-xl">
      <v-form @submit.prevent="requestAService">
        <h3 class="text-center mb-3">
          <Icon name="lets-icons:pin-alt-fill" /> طلب خدمة
        </h3>

        <h4>الخدمات</h4>
        <SelectInput
          v-model="service.selectedService"
          :staticItems="[
            { id: '1', name: 'خدمة 1' },
            { id: '2', name: 'خدمة 2' },
            { id: '3', name: 'خدمة 3' },
          ]"
          placeholder="اختر الخدمة"
        />

        <h4>اختر عنوان</h4>
        <ul class="mt-2">
          <li
            v-for="location in locations"
            :key="location.id"
            class="location_item d-flex align-center rounded-lg mb-4"
            :class="{ active: location.isChoosen }"
            @click="chooseLocaton(location)"
          >
            <span class="bg-primary pa-2 d-flex justify-center align-center">
              <Icon name="ic:sharp-location-on" />
            </span>

            <p class="px-2 py-1 ms-2 w-100">
              {{ location.name }}
            </p>
          </li>
        </ul>

        <h4>الكمية</h4>
        <base-input
          v-model="service.quntity"
          type="number"
          placeholder="حدد الكمية"
        />

        <h4>كوبون الخصم</h4>
        <base-input
          v-model="service.qoupon"
          type="text"
          placeholder="اكتب كوبون الخصم"
        />

        <h4>اجمالي السعر</h4>
        <base-input
          v-model="service.total"
          type="number"
          placeholder="الاجمالي"
        />

        <v-card-actions class="mt-1 d-flex justify-center ga-5 flex-wrap">
          <base-button
            type="submit"
            class="lg ok"
            aria-label="Choose Location"
            >{{ $t("form.send") }}</base-button
          >
          <base-button
            @click="showService = false"
            class="lg filled"
            aria-label="back"
            >{{ $t("form.cancel") }}</base-button
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  chatObj: {
    type: Object,
    required: true,
  },
});

const service = reactive({
  selectedService: null,
  quntity: null,
  qoupon: null,
  total: null,
  location: null,
});

const locations = reactive([
  {
    id: 1,
    name: "المدينة المنورة, شارع المدينة بناية 10 الدور الأول",
    isChoosen: false,
  },
  {
    id: 2,
    name: "الرياض, شارع الملك بناية 11 الدور الثالث",
    isChoosen: false,
  },
  {
    id: 3,
    name: "المدينة المنورة, شارع المدينة بناية 12 الدور التاسع",
    isChoosen: true,
  },
]);
const chooseLocaton = (location) => {
  locations.forEach((loc) => {
    loc.isChoosen = false;
  });
  location.isChoosen = true;
  service.location = location;
};

// Service Dialog
const showService = ref(false);
const requestAService = () => {
  showService.value = false;
};
</script>

<style lang="scss" scoped>
header {
  flex-shrink: 0;
  .status {
    margin-top: -5px;

    &.online {
      color: #00c853;
    }
    &.offline {
      color: #ff1744;
    }
  }
}
</style>
