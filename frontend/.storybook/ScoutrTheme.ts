import { create } from "@storybook/theming/create";

export default create({
  // Base theme
  base: "light",

  // Typography
  fontBase: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: '"Menlo", "Monaco", monospace',

  // Brand
  brandImage: "./logo-scoutr-for-storybook.svg",
  brandTarget: "_self",
  brandUrl: "https://scoutr-style-guide.web.app",

  // Colors
  appBg: "#E6E9EB", // Scoutr Ink black light
  appBorderColor: "#A9A9A9", // Scoutr Silver gray
  barTextColor: "#212529", // Scoutr Ink black
  colorSecondary: "#2A639B", // Scoutr Ocean blue
  textColor: "#212529", // Scoutr Ink black

  // Form colors
  inputBg: "#E6E9EB", // Scoutr Ink black light
  inputBorder: "#E6E9EB", // Scoutr Ink black light
  inputTextColor: "#212529", // Scoutr Ink black
});
