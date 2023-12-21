export const lookupsService = () => {
  return {
    async getRegions() {
      const { data: regions, error } = await useMyFetch("/regions");

      if (error.value) {
        console.log(error.value);
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return regions;
    },
  };
};
