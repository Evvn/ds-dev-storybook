import { configure, addDecorator, addParameters } from "@storybook/react";
import { initDsm } from "@invisionapp/dsm-storybook";
import evans_storybook from "./theme.js";
import { withProvider } from "./decorators.js";
import { withA11y } from "@storybook/addon-a11y";
import React from "react";
import { ThemeProvider } from "styled-components";
const Theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../src/_dsmStyles.scss');

// Option defaults.
addParameters({
  options: {
    appBg: "white",
    theme: evans_storybook,
  },
});

addDecorator(withProvider);
addDecorator(withA11y);
addDecorator((story) => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(loadStories, module),
});

function loadStories() {
  require("../src/stories");
}
