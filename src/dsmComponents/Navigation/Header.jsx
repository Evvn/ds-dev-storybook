import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colorPeppercorn};
`;

// const VaultLogo = styled.img.attr({ src: "" })``;

class Header extends React.Component {
  render() {
    const {} = this.props;

    return <HeaderContainer>{/* <VaultLogo /> */}</HeaderContainer>;
  }
}

export default withTheme(Header);
