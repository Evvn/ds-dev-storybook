import React from "react";
import styled from "styled-components";
import ChevronDown12 from "../Icons/chevron-down-12px.svg";
import ChevronUp12 from "../Icons/chevron-up-12px.svg";
import CloseClear12 from "../Icons/close-clear-12px.svg";

const MultiSelectContainer = styled.div``;

const MultiSelectBtn = styled.button`
  min-height: 36px;
  width: 300px;
  border: 1px solid #737373;
  border-radius: 3px;
  outline: none;
  padding: 4px 24px 0px 4px;
  /* margin: 4px 0; */
  transition: 200ms ease-in-out all;
  appearance: none;
  background-color: #ffffff;
  background-image: url(${ChevronDown12});
  background-repeat: no-repeat;
  background-position: right 14px top 14px, 0 0;
  text-align: left;
  white-space: pre-wrap;
  transition: background-image 0s;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colorPaprika5};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colorCayenneActive};
  }
`;

const MultiSelectDropdown = styled.div`
  margin-top: 4px;
  border-radius: 3px;
  width: 300px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.05),
    0 2px 10px 0 rgba(0, 0, 0, 0.05);
`;

const MultiSelectOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background-color: none;
  border: 1px solid transparent;
  padding: 8px;

  &:focus {
    outline: none;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colorPaprikaActive};
  }

  &:hover {
    background-color: ${props => props.theme.colorSalt};
  }

  &:active {
    border: none;
    background-color: ${props => props.theme.colorFlour};
  }
`;

const MultiSelectLabel = styled.label`
  display: block;
  color: ${props => props.theme.colorCardomomText};
`;

const Seed = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.colorSalt};
  padding: 4px 24px 4px 4px;
  margin: 0px 4px 4px 4px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-image: url(${CloseClear12});
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: right 8px top 50%, 0 0;

  &:focus,
  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colorCayenne15};
    cursor: pointer;
  }
`;

class MultiSelect extends React.Component {
  state = {
    dropdownOpen: false,
    seeds: []
  };

  toggleMultiSelect = e => {
    const { dropdownOpen } = this.state;
    let chevronStyle = {};
    if (e.target.classList.contains("multiSelectBtn")) {
      if (!dropdownOpen) {
        // set chevron up
        chevronStyle = { backgroundImage: `url(${ChevronUp12})` };
      }
      this.setState({ dropdownOpen: !dropdownOpen, chevronStyle });
    }
  };

  addSeed = option => {
    const { seeds } = this.state;
    let addedSeed = seeds.concat(option);
    let chevronStyle = { backgroundImage: `url(${ChevronDown12})` };
    this.setState({ dropdownOpen: false, chevronStyle, seeds: addedSeed });
  };

  render() {
    const { disabled, options, labelText, id } = this.props;
    const { dropdownOpen, chevronStyle, seeds } = this.state;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <MultiSelectContainer style={style}>
        <MultiSelectLabel for={id} className="font-caption-1">
          {labelText}
        </MultiSelectLabel>
        <MultiSelectBtn
          className="multiSelectBtn"
          id={id}
          disabled={disabled}
          onClick={e => this.toggleMultiSelect(e)}
          style={chevronStyle}
        >
          {seeds.map((seed, i) => {
            return (
              <Seed
                className="font-body-1"
                disabled={disabled}
                onClick={() => {
                  seeds.splice(i, 1);
                  this.setState({ seeds });
                }}
              >
                {seed}
              </Seed>
            );
          })}
        </MultiSelectBtn>
        {dropdownOpen && (
          <MultiSelectDropdown>
            {options.map(option => {
              if (seeds.indexOf(option) === -1) {
                return (
                  <MultiSelectOption
                    className="font-body-1"
                    onClick={() => this.addSeed(option)}
                  >
                    {option}
                  </MultiSelectOption>
                );
              } else {
                return "";
              }
            })}
          </MultiSelectDropdown>
        )}
      </MultiSelectContainer>
    );
  }
}

export default MultiSelect;
