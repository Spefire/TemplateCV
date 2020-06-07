import Header from "@/components/header/Header.vue";

import cvFile from "@/assets/files/CV.jpeg";
/*import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitchIcon from "@/assets/icons/twitch.svg";*/
import circleDownIcon from "@/assets/icons/circle-down.svg";
import githubIcon from "@/assets/icons/github.svg";
import envelopIcon from "@/assets/icons/envelop.svg";
import folderUploadIcon from "@/assets/icons/folder-upload.svg";
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
      circleDownIcon: circleDownIcon,
      githubIcon: githubIcon,
      linkedinIcon: linkedinIcon,
      envelopIcon: envelopIcon,
      folderUploadIcon: folderUploadIcon,
      cvFile: cvFile,
    };
  },
};
