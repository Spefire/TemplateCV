import Header from "@/components/header/Header.vue";

/*import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitchIcon from "@/assets/icons/twitch.svg";*/
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      /*facebookIcon: facebookIcon,
      twitterIcon: twitterIcon,
      instagramIcon: instagramIcon,
      twitchIcon: twitchIcon,*/
      githubIcon: githubIcon,
      linkedinIcon: linkedinIcon,
    };
  },
};
