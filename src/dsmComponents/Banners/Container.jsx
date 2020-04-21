import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const ContainerContainer = styled.div`
  border-radius: 3px;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.1), 0 2px 16px 0 rgba(0, 0, 0, 0.08);
`;

class Container extends React.Component {
  render() {
    const { containerWidth, containerHeight } = this.props;
    const containerStyle = {
      width: containerWidth,
      height: containerHeight
    };

    return <ContainerContainer style={containerStyle}></ContainerContainer>;
  }
}

export default withTheme(Container);
