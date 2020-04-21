import React from "react";
import styled from "styled-components";

const SegmentControlContainer = styled.div`
  border: 1px solid #737373;
  border-radius: 3px;
  height: 36px;
  display: inline-flex;
`;

const SegmentLabel = styled.label`
  color: ${props => props.theme.colorCardomomText};
  width: 110px;
  padding: 9px 17px;
  text-align: center;
  font-size: 14px;

  &:nth-of-type(1) {
    border-right: 1px solid #737373;
  }

  &:nth-of-type(3) {
    border-left: 1px solid #737373;
  }
`;

const SegmentControlButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  width: 0;
  margin: 0;

  &:checked + ${SegmentLabel} {
    color: white;
    background-color: ${props => props.theme.colorPaprika};
    border-color: ${props => props.theme.colorPaprika};
  }

  /* &:focus + ${SegmentLabel} {
    outline: 1px solid blue;
  } */
`;

class SegmentControl extends React.Component {
  printSegments = (segments, groupName) => {
    return segments.map(segment => {
      return (
        <>
          <SegmentControlButton
            name={groupName}
            value={segment}
            id={segment + groupName}
          />
          <SegmentLabel className="input-label" htmlFor={segment + groupName}>
            {segment}
          </SegmentLabel>
        </>
      );
    });
  };

  render() {
    const { disabled, segments, groupName } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <SegmentControlContainer style={style}>
        {this.printSegments(segments, groupName)}
      </SegmentControlContainer>
    );
  }
}

export default SegmentControl;
