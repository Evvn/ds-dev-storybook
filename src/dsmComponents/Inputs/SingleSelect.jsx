import React from "react";
import styled from "styled-components";
import ChevronDown12 from "../Icons/chevron-down-12px.svg";

const SingleSelectContainer = styled.div``;

const Select = styled.select`
  height: 36px;
  width: 300px;
  border: 1px solid #737373;
  border-radius: 3px;
  outline: none;
  padding: 8px;
  margin: 4px 0;
  transition: 200ms ease-in-out all;
  appearance: none;
  background-color: #ffffff;
  background-image: url(${ChevronDown12});
  background-repeat: no-repeat;
  background-position: right 14px top 50%, 0 0;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colorPaprika5};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colorCayenneActive};
  }
`;

const SelectLabel = styled.label`
  display: block;
  color: ${props => props.theme.colorCardomomText};
`;

class SingleSelect extends React.Component {
  render() {
    const { disabled, options, labelText, id } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <SingleSelectContainer style={style}>
        <SelectLabel for={id} className="font-caption-1">
          {labelText}
        </SelectLabel>
        <Select id={id} disabled={disabled}>
          {options.map(option => {
            return <option value={option}>{option}</option>;
          })}
        </Select>
      </SingleSelectContainer>
    );
  }
}

export default SingleSelect;
