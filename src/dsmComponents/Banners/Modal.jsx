import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 !important;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colorPeppercorn};
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.1), 0 2px 16px 0 rgba(0, 0, 0, 0.08);
  min-width: 372px;
  max-width: 813px;
  width: 60%;
  min-height: 225px;
`;

class Modal extends React.Component {
  render() {
    const { modalWidth, modalHeight } = this.props;
    const modalStyle = {
      width: modalWidth,
      height: modalHeight
    };

    return (
      <ModalOverlay>
        <ModalContainer style={modalStyle}>
          <h1>Modal header</h1>
        </ModalContainer>
      </ModalOverlay>
    );
  }
}

export default withTheme(Modal);
