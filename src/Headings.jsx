import React from "react";
import styled from "styled-components";

const FilledHeading = styled.p`
  font-family: sans-serif;
  color: pink;
  font-weight: bold;
  font-size: 113px;
  margin: 0;
  line-height: 1;
  letter-spacing: -1;

  transition: 0.3s ease all;
  :hover {
    color: cyan;
  }
`;

const OutlinedHeading = styled.p`
  font-family: sans-serif;
  color: #212121;
  -webkit-text-stroke: 1px pink;
  font-weight: bold;
  font-size: 113px;
  margin: 0;
  line-height: 1;
  letter-spacing: -1;

  transition: 0.3s ease all;
  :hover {
    -webkit-text-stroke: 1px cyan;
  }
`;

class ExampleComponent extends React.Component {
  render() {
    return (
      <>
        <FilledHeading>новая система проектирования</FilledHeading>
        <OutlinedHeading>новая система проектирования</OutlinedHeading>
        <FilledHeading>новая система проектирования</FilledHeading>
        <OutlinedHeading>новая система проектирования</OutlinedHeading>
      </>
    );
  }
}

export default ExampleComponent;
