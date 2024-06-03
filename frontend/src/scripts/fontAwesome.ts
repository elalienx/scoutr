// Node modules
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faFolderOpen,
  faHourglassHalf,
  faHouseChimney,
  faPlus,
  faSpinner,
  faUserSecret,
  faXmark,
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
  faHouseChimney,
  faCircleExclamation,
  faCheck,
  faXmark,
  faHourglassHalf,
  faUserSecret,
);

export default library;
