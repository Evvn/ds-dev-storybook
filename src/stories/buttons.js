import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import LinkButton from "vault-ds/dist/Buttons/LinkButton";
import PrimaryButton from "vault-ds/dist/Buttons/PrimaryButton";
import GhostButton from "vault-ds/dist/Buttons/GhostButton";
import DeleteButton from "vault-ds/dist/Buttons/DeleteButton";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Buttons = () => {
  return storiesOf("Buttons", module)
    .add(
      "link",
      () => (
        <Components>
          <LinkButton btnText={"Link Button"} />
          <LinkButton btnText={"Link Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91c9fecbfa474cbaecd64" },
      }
    )
    .add(
      "primary",
      () => (
        <Components>
          <PrimaryButton btnText={"Primary Button"} />
          <PrimaryButton btnText={"Primary Disabled"} disabled={true} />
          <PrimaryButton btnText={"Primary Full Width"} fullWidth={true} />
          <PrimaryButton
            btnText={"Primary Full Width Disabled"}
            disabled={true}
            fullWidth={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91cedd99993f9cce3247b" },
      }
    )
    .add(
      "ghost",
      () => (
        <Components>
          <GhostButton btnText={"Ghost Button"} />
          <GhostButton btnText={"Ghost Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91d0b09c87ddb5c66f9ef" },
      }
    )
    .add(
      "termination",
      () => (
        <Components>
          <DeleteButton btnText={"Delete Button"} />
          <DeleteButton btnText={"Delete Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91d37475508a183f5f042" },
      }
    );
};
