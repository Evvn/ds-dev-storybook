import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: white;
  background: none;
  border: 2px solid ${props => props.theme.colorPaprika};
  border-radius: 3px;
  background-color: ${props => props.theme.colorPaprika};
  padding: 11px 14px;
  transition: 200ms ease-in-out all;

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colorPaprikaActive};
    background-color: ${props => props.theme.colorPaprika};
  }

  &:active {
    background-color: ${props => props.theme.colorPaprikaActive};
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colorPaprikaHover};
  }
`;

class PrimaryButton extends React.Component {
  render() {
    const { btnText, fullWidth, disabled } = this.props;
    const style = {};
    fullWidth && (style["width"] = "100%");
    disabled && (style["opacity"] = ".5");

    return (
      <Btn style={style} disabled={disabled}>
        {btnText}
      </Btn>
    );
  }
}

export default PrimaryButton;
