import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InputField from "vault-ds/dist/Inputs/InputField";
import SegmentControl from "vault-ds/dist/Inputs/SegmentControl";
import SingleSelect from "vault-ds/dist/Inputs/SingleSelect";
import MultiSelect from "vault-ds/dist/Inputs/MultiSelect";
import DateTimeInput from "vault-ds/dist/Inputs/DateTimeInput";
import DateInput from "vault-ds/dist/Inputs/DateInput";
import TimeInput from "vault-ds/dist/Inputs/TimeInput";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Inputs = () => {
  return storiesOf("Inputs", module)
    .add(
      "Input Field",
      () => (
        <Components>
          <InputField
            labelText={"Label"}
            placeholder={"Value"}
            errorMessage={"error message"}
            id={"i1"}
            disabled={false}
          />
          <InputField
            labelText={"Label"}
            placeholder={"Value"}
            id={"i2"}
            errorMessage={""}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91dfdd999932ba4e324b3" },
      }
    )
    .add(
      "Segment Control",
      () => (
        <Components>
          <SegmentControl
            segments={["Left", "Center", "Right"]}
            groupName={"firstGroup"}
          />
          <SegmentControl
            segments={["Left", "Right"]}
            groupName={"secondGroup"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" },
      }
    )
    .add(
      "Single Select",
      () => (
        <Components>
          <SingleSelect
            labelText={"Label"}
            options={["Select 1", "Select 2", "Select 3"]}
            id={"ss1"}
            groupName={"firstGroup"}
          />
          <SingleSelect
            labelText={"Label"}
            options={["Select 1", "Select 2"]}
            id={"ss2"}
            groupName={"secondGroup"}
          />
          <SingleSelect
            labelText={"Label"}
            options={["Select 1", "Select 2"]}
            id={"ss3"}
            groupName={"thirdGroup"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5db91e7fd999937812e324d0" },
      }
    )
    .add(
      "Multi Select",
      () => (
        <Components>
          <MultiSelect
            labelText={"Label"}
            options={[
              "A Seed",
              "Two Seeds",
              "Tres Seeds",
              "Four And",
              "Five Seeds",
            ]}
            id={"ss1"}
            groupName={"firstGroup"}
          />
          <MultiSelect
            labelText={"Label"}
            options={[
              "A Seed",
              "Two Seeds",
              "Tres Seeds",
              "Four And",
              "Five Seeds",
            ]}
            id={"ss3"}
            groupName={"thirdGroup"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5de4b37cac0a7d710e394a8b" },
      }
    )
    .add(
      "Date/Time Picker",
      () => (
        <Components>
          <DateTimeInput
            labelText={"Date Time Label"}
            startTime={"11:00"}
            endTime={"13:30"}
            minuteInterval={30}
            id={"dt1"}
          />
          <DateInput
            labelText={"Date Label"}
            startTime={"11:00"}
            endTime={"13:30"}
            minuteInterval={30}
            id={"dt2"}
          />
          <TimeInput
            labelText={"Time Label"}
            startTime={"11:00"}
            endTime={"13:30"}
            minuteInterval={30}
            id={"dt3"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5e20f6ffa4a5311757b896d9" },
      }
    );
};
