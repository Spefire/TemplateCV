import { Component, Vue } from "vue-property-decorator";

import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Skills extends Vue {
  skillList = [
    {
      name: "University of Life",
      value: 30,
    },
    {
      name: "University of Test",
      value: 50,
    },
  ];
}
