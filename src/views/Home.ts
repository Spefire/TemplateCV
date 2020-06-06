import Header from "@/components/header/Header.vue";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitchIcon from "@/assets/icons/twitch.svg";
import wallpaper from "@/assets/images/background01.jpg";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      facebookIcon: facebookIcon,
      twitterIcon: twitterIcon,
      instagramIcon: instagramIcon,
      twitchIcon: twitchIcon,
      wallpaper: wallpaper,
    };
  },
};
