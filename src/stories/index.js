import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";

// component imports
import Colors from "../dsmComponents/Colors";
import TextStyles from "../dsmComponents/TextStyles";
import Icons from "../dsmComponents/Icons";
// component group imports
import { Buttons } from "./buttons.js";
import { SelectionControls } from "./selectionControls";
import { Inputs } from "./inputs";
import { InformationAndBanners } from "./informationAndBanners";
import { Navigation } from "./navigation";

storiesOf("Vault DSM Assets", module)
  .add("Colors", () => <Colors />)
  .add("Text Styles", () => <TextStyles />)
  .add("Icons", () => <Icons />);

Buttons();
SelectionControls();
Inputs();
InformationAndBanners();
Navigation();
