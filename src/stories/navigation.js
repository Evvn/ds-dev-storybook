import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import StepTracker from "../dsmComponents/Navigation/StepTracker";
import Header from "../dsmComponents/Navigation/Header";
import Pagination from "../dsmComponents/Navigation/Pagination";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Navigation = () => {
  return storiesOf("Navigation", module)
    .add(
      "Header",
      () => (
        <Components>
          <Header navLinks={[]} />
          <Header navIcons={[]} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Step Tracker",
      () => (
        <Components>
          <StepTracker numberOfSteps={3} />
          <StepTracker numberOfSteps={5} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Pagination",
      () => (
        <Components>
          <Pagination numberOfPages={3} />
          <Pagination numberOfPages={10} />
          <Pagination numberOfPages={20} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
