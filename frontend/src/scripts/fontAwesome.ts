// Node modules
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faFolderOpen,
  faHouseChimney,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

// Brands
library.add(faLinkedin);

/**
 * Note:
 * Add icons here and then VSCode will auto import them!
 */
// Solid
library.add(
  faCircleCheck,
  faFolderOpen,
  faLinkedin,
  faPlus,
  faSpinner,
  faHouseChimney
);

export default library;
