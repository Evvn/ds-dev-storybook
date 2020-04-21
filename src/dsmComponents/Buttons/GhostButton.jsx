import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: ${props => props.theme.colorPaprika};
  background: none;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colorPaprika};
  padding: 12px 14px;
  transition: 200ms ease-in-out all;

  &:focus {
    outline: none;
    padding: 11px 13px;
    border: 2px solid ${props => props.theme.colorCayenneSelected};
  }

  &:hover:not(:disabled) {
    color: ${props => props.theme.colorPaprikaHover};
    background-color: ${props => props.theme.colorPaprika5};
    padding: 12px 14px;
    border: 1px solid ${props => props.theme.colorPaprikaHover};
  }

  &:active {
    padding: 12px 14px;
    background-color: ${props => props.theme.colorPaprika15};
    color: ${props => props.theme.colorPaprikaActive};
    border: 1px solid ${props => props.theme.colorPaprikaActive};
  }
`;

class GhostButton extends React.Component {
  render() {
    const { btnText, disabled } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <Btn style={style} disabled={disabled}>
        {btnText}
      </Btn>
    );
  }
}

export default GhostButton;
