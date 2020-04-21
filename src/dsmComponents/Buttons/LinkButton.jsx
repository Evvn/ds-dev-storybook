import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: ${props => props.theme.colorPaprika};
  background: none;
  border: none;
  transition: 200ms ease-in-out all;

  &:focus,
  &:active {
    outline: none;
    text-decoration: underline;
    color: ${props => props.theme.colorPaprikaActive};
  }

  &:hover:not(:disabled) {
    text-decoration: underline;
    color: ${props => props.theme.colorPaprikaHover};
  }
`;

class LinkButton extends React.Component {
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

export default LinkButton;
