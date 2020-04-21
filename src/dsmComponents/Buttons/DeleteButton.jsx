import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: white;
  background: none;
  background-color: ${props => props.theme.colorCayenneAlertTermination};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colorPaprika};
  padding: 11px 14px;
  transition: 200ms ease-in-out all;

  &:focus {
    outline: none;
    padding: 10px 13px;
    border: 2px solid ${props => props.theme.colorCayenneActive};
  }

  &:hover:not(:disabled) {
    padding: 11px 14px;
    border: 1px solid ${props => props.theme.colorCayenneHover};
    background-color: ${props => props.theme.colorCayenneHover};
  }

  &:active {
    padding: 11px 14px;
    background-color: ${props => props.theme.colorCayenneActive};
    border: 1px solid ${props => props.theme.colorCayenneActive};
  }
`;

class DeleteButton extends React.Component {
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

export default DeleteButton;
