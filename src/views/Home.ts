/*import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitchIcon from "@/assets/icons/twitch.svg";*/
import circleDownIcon from "@/assets/icons/circle-down.svg";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";

import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";

import About from "@/views/about/About.vue";
import Contact from "@/views/contact/Contact.vue";
import Education from "@/views/education/Education.vue";
import Experiences from "@/views/experiences/Experiences.vue";
import Hobbies from "@/views/hobbies/Hobbies.vue";
import Languages from "@/views/languages/Languages.vue";
import Skills from "@/views/skills/Skills.vue";

export default {
  name: "Home",
  components: {
    About,
    Contact,
    Education,
    Experiences,
    Footer,
    Header,
    Hobbies,
    Languages,
    Skills,
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
      name: "Cécile Blin",
      description:
        "Je travaille dans le domaine du <b>Marketing et du Social media</b>.<br/>Faisons défiler la page pour en apprendre plus sur moi.",
    };
  },
};
