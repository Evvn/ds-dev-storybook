import React from "react";
import styled from "styled-components";

const RadioContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
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

const RadioFill = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.colorPaprika};
`;

const StyledRadio = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  border: 1px solid #737373;
  transition: 200ms ease-in-out all;
  display: flex;
  justify-content: center;
  align-items: center;

  ${HiddenRadio}:focus:not(:disabled) + & {
    border-color: ${props => props.theme.colorCayenneActive};
  }

  ${HiddenRadio}:hover:not(:disabled) + & {
    background-color: ${props => props.theme.colorPaprika5};
  }

  ${RadioFill} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

class RadioButton extends React.Component {
  state = {
    checked: false
  };

  handleRadioChange = e => {
    const { disabled } = this.props;
    !disabled && this.setState({ checked: e.target.checked });
  };

  render() {
    const { checked } = this.state;
    const { disabled } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <RadioContainer>
        <HiddenRadio checked={checked} onChange={this.handleRadioChange} />
        <StyledRadio checked={checked} style={style}>
          <RadioFill />
        </StyledRadio>
      </RadioContainer>
    );
  }
}

export default RadioButton;
