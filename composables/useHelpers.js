import { useLangStore } from "@/stores/lang";
import { useThemeStore } from "@/stores/theme";
import { useGlobalStore } from "@/stores/global";

export const useHelpers = () => {
  const route = useRoute();
  const router = useRouter();

  return {
    scrollToElement: (sectionId) => {
      if (route.path == "/") {
        const el = document.querySelector(`${sectionId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        new Promise((resolve, reject) => {
          resolve(router.push("/"));
        }).then((res) => {
          setTimeout(() => {
            const el = document.querySelector(`${sectionId}`);
            el.scrollIntoView({ behavior: "smooth" });
          }, 2000);
        });
      }
    },

    shuffle: (array) => {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },

    formatDate(inputDate) {
      const dateObject = new Date(inputDate);

      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0");
      const day = String(dateObject.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },

    getSubRandomArr: (arr) => {
      const shuffledArray = arr.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray.slice(
        0,
        Math.floor(Math.random() * shuffledArray.length - 1)
      );
    },

    dir: () => {
      return useLangStore().current_lang === "ar" ? "rtl" : "ltr";
    },

    lang: () => {
      return useLangStore().current_lang;
    },

    theme: () => {
      return useThemeStore().current_theme;
    },

    isSmallScreen: () => {
      return useGlobalStore().isSmallScreen;
    },

    screen: () => {
      return useGlobalStore().screenSize;
    },

    scrollDirection: () => {
      return useGlobalStore().scrollDirection;
    },
  };
};
