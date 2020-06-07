import Header from "@/components/header/Header.vue";

import cvFile from "@/assets/files/CV.jpeg";
/*import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitchIcon from "@/assets/icons/twitch.svg";*/
import circleDownIcon from "@/assets/icons/circle-down.svg";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import profileImage from "@/assets/images/profile.png";

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
      circleDownIcon: circleDownIcon,
      githubIcon: githubIcon,
      linkedinIcon: linkedinIcon,
      cvFile: cvFile,
      profileImage: profileImage,
    };
  },
};
