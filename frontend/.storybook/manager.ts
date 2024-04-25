/**
 * About:
 * This is the theme manager for Storybook.
 * So our component viewer has the Scoutr brand style.
 */

// Node modules
import { addons } from "@storybook/manager-api";
import ScoutrTheme from "./ScoutrTheme";

addons.setConfig({ theme: ScoutrTheme });
