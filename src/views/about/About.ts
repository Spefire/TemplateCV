import { Component, Vue } from "vue-property-decorator";

import cvFile from "@/assets/files/CV.jpeg";
import folderUploadIcon from "@/assets/icons/folder-upload.svg";
import usersIcon from "@/assets/icons/users.svg";

@Component
export default class About extends Vue {
  aboutText =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.";

  cvFile = cvFile;
  folderUploadIcon = folderUploadIcon;
  usersIcon = usersIcon;
}
