import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Test = () => {
  return storiesOf("Test", module).add("Test component", () => (
    <Components>
      <h2>Hi</h2>
    </Components>
  ));
};
