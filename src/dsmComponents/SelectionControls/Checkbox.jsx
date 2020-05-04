import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIconSvg } from "./CheckIcon.svg";

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const CheckIcon = styled.div`
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #737373;
  border-radius: 2px;
  transition: 200ms ease-in-out all;

  ${HiddenCheckbox}:focus:not(:disabled) + & {
    border-color: ${(props) => props.theme.colorCayenneActive};
  }

  ${HiddenCheckbox}:hover:not(:disabled) + & {
    background-color: ${(props) => props.theme.colorPaprika5};
  }

  ${CheckIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

class Checkbox extends React.Component {
  state = {
    checked: false,
  };

  handleCheckboxChange = (e) => {
    const { disabled } = this.props;
    !disabled && this.setState({ checked: e.target.checked });
  };

  render() {
    const { checked } = this.state;
    const { disabled } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <CheckboxContainer>
        <HiddenCheckbox
          checked={checked}
          onChange={this.handleCheckboxChange}
        />
        <StyledCheckbox checked={checked} style={style}>
          <CheckIcon>
            <CheckIconSvg />
          </CheckIcon>
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
}

export default Checkbox;
