import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "#FEAFFF",
  colorSecondary: "#2C3765",

  // UI
  appBg: "#1A1C23",
  appContentBg: "#fff",
  appBorderColor: "#fff",
  appBorderRadius: 0,

  // Typography
  fontBase: '"Helvetica", "Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#797B8D",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#fff",
  barSelectedColor: "#FEAFFF",
  barBg: "#1A1C23",

  // Form colors
  inputBg: "cyan",
  inputBorder: "#fff",
  inputTextColor: "#797B8D",
  inputBorderRadius: 0,

  brandTitle: "e v a n"
});
