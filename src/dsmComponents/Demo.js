import React from "react";
import styled from "styled-components";
import InputField from "./Inputs/InputField";
import PrimaryButton from "./Buttons/PrimaryButton";
import GhostButton from "./Buttons/GhostButton";

const FormCont = styled.form`
  & > * {
    margin: 10px;
  }
`;

class DemoForm extends React.Component {
  render() {
    return (
      <FormCont>
        <InputField placeholder="First name" />
        <InputField placeholder="Last name" />
        <GhostButton btnText="Cancel" />
        <PrimaryButton btnText="Submit" />
      </FormCont>
    );
  }
}

export default DemoForm;
