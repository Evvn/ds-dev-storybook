import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "#d83d03",
  colorSecondary: "#d83d03",

  // UI
  appBg: "#252525",
  appContentBg: "#fff",
  appBorderColor: "#fff",
  appBorderRadius: 3,

  // Typography
  fontBase: '"Muli", "Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#eeeeee",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#fff",
  barSelectedColor: "#d83d03",
  barBg: "#252525",

  // Form colors
  inputBg: "cyan",
  inputBorder: "#fff",
  inputTextColor: "#eeeeee",
  inputBorderRadius: 3,

  brandTitle: "Vault Design System",
});
