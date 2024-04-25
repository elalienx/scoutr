// Project files
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default interface PageState {
  /** The URL of the image to illustrate the state. */
  image_url: string;

  /** The image alt description for screen readers. */
  image_alt: string;

  /** An array containing the paragrapgs describing the state. */
  messages: string[];

  /** The label of the action available to the state. */
  button_label: string;

  /** The icon for button. */
  button_icon: IconName;
}
