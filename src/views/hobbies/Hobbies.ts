import { Component, Vue } from "vue-property-decorator";

import accessibilityIcon from "@/assets/icons/accessibility.svg";
import airplaneIcon from "@/assets/icons/airplane.svg";
import bookIcon from "@/assets/icons/book.svg";
import pacmanIcon from "@/assets/icons/pacman.svg";
import videoCameraIcon from "@/assets/icons/video-camera.svg";

import HobbieState from "@/components/hobbie-state/HobbieState.vue";

@Component({
  components: {
    HobbieState,
  },
})
export default class Hobbies extends Vue {
  hobbieList = [
    {
      name: "Voyage",
      image: airplaneIcon,
    },
    {
      name: "Cinéma",
      image: videoCameraIcon,
    },
    {
      name: "Littérature",
      image: bookIcon,
    },
    {
      name: "Jeux vidéo",
      image: pacmanIcon,
    },
    {
      name: "Exercices physiques",
      image: accessibilityIcon,
    },
  ];
}
