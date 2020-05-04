import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";
import RadioButton from "vault-ds/dist/SelectionControls/RadioButton";
import Checkbox from "vault-ds/dist/SelectionControls/Checkbox";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const SelectionControls = () => {
  return storiesOf("Selection Controls", module)
    .add(
      "radio button",
      () => (
        <Components>
          <RadioButton />
          <RadioButton disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5d6385f7722baa04785b3fbb" },
      }
    )
    .add(
      "checkbox",
      () => (
        <Components>
          <Checkbox />
          <Checkbox disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5d6383279a96eb6f77f7bc6b" },
      }
    );
};
