// Node modules
import type { Preview } from "@storybook/react";

// Project files
import ScoutrTheme from "./ScoutrTheme";

// Global imports
import "../src/scripts/fontAwesome";
import "../src/styles/style.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: ScoutrTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
