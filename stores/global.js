import { useAuthStore } from "@/stores/auth";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const useGlobalStore = defineStore("global", () => {
  const nuxtApp = useNuxtApp();

  // Resize
  const currentWindowSize = ref(null);
  const screenSize = computed(() => {
    if (currentWindowSize.value > 0 && currentWindowSize.value < 600)
      return "xs";
    if (currentWindowSize.value > 600 && currentWindowSize.value < 960)
      return "sm";
    if (currentWindowSize.value > 960 && currentWindowSize.value < 1280)
      return "md";
    if (currentWindowSize.value > 1280 && currentWindowSize.value < 1920)
      return "lg";
    if (currentWindowSize.value > 1920) return "xl";
  });
  const isSmallScreen = computed(() => {
    return screenSize.value == "xs" || screenSize.value == "sm";
  });
  const handleResize = () => {
    currentWindowSize.value = window.innerWidth;
  };

  // Scroll
  const scrollDirection = ref(null);
  const handleScroll = (lastScrollTop) => {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop.value) {
      scrollDirection.value = "down";
    } else if (scrollTopPosition < lastScrollTop.value) {
      scrollDirection.value = "up";
    }
    lastScrollTop.value = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  };

  // Loading
  const AppInitLoading = ref(true);
  const pageLoading = ref(false);

  // Tooltip
  const init_tooltip = () => {
    const is_first_visit = useAuthStore().is_first_visit;
    const driverObj = driver({
      dir: "ltr",
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
        {
          element: ".v-step-0",
          popover: {
            title: "Add Property",
            description:
              "you can add property lorem ipsums dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
          },
        },
        {
          element: ".v-step-1",
          popover: { title: "Title", description: "Description" },
        },
        {
          element: ".v-step-2",
          popover: { title: "Title", description: "Description" },
        },
        {
          element: ".v-step-3",
          popover: { title: "Title", description: "Description" },
        },
      ],
    });

    if (is_first_visit) {
      driverObj.drive();
      nuxtApp.$encryptStorage.setItem("is_user_first_visit", is_first_visit);
    }
  };

  return {
    screenSize,
    isSmallScreen,
    handleResize,
    handleScroll,
    scrollDirection,
    AppInitLoading,
    pageLoading,
    init_tooltip,
  };
});
