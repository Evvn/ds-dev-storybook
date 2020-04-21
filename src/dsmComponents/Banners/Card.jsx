import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const CardContainer = styled.div`
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.05),
    0 2px 10px 0 rgba(0, 0, 0, 0.05);
`;

class Card extends React.Component {
  render() {
    const { cardWidth, cardHeight, shadow } = this.props;
    const cardStyle = {
      width: cardWidth,
      height: cardHeight,
      boxShadow: !shadow && "none"
    };

    return <CardContainer style={cardStyle}></CardContainer>;
  }
}

export default withTheme(Card);
