export const useLookupsStore = defineStore("lookups", () => {
  const nuxtApp = useNuxtApp();

  const regions = ref([]);
  const cities = ref([]);
  const districts = ref([]);

  const getRegions = async () => {
    const data = lookupsService().getRegions();
    if (data) {
      regions.value = data;
    }
  };

  return {
    getRegions,
  };
});
