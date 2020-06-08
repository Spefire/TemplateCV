import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  fixNavbar = false;
  opacNavbar = 1.0;

  handleScroll() {
    if (window.pageYOffset > window.innerHeight) {
      this.fixNavbar = true;
    } else {
      this.fixNavbar = false;
      this.opacNavbar =
        (window.innerHeight / 2 - window.pageYOffset) /
        (window.innerHeight / 2);
    }
  }

  created() {
    window.addEventListener("scroll", this.handleScroll);
  }

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
