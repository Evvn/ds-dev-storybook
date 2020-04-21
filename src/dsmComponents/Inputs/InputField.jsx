import React from "react";
import styled from "styled-components";

const InputContainer = styled.div``;

const TextInput = styled.input`
  height: 36px;
  width: 300px;
  border: 1px solid #737373;
  border-radius: 3px;
  outline: none;
  padding: 8px;
  margin: 4px 0;
  transition: 200ms ease-in-out all;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colorPaprika5};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colorCayenneActive};
  }
`;

const InputLabel = styled.label.attrs({ className: "font-caption-1" })`
  display: block;
`;

const Error = styled.span.attrs({ className: "font-caption-1" })`
  display: block;
  color: ${props => props.theme.colorCayenneAlertTermination};
`;

class InputField extends React.Component {
  render() {
    const { disabled, labelText, errorMessage, placeholder, id } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <InputContainer style={style}>
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
        <TextInput id={id} placeholder={placeholder} disabled={disabled} />
        <Error>{errorMessage}</Error>
      </InputContainer>
    );
  }
}

export default InputField;
