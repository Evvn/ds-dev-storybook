import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../stories/actions/actions.js";

const TextStylesCont = styled.div`
  font-family: sans-serif;
  letter-spacing: 0.25px;
`;

const TextStyle = styled.div`
  padding: 15px;
`;

const StyleName = styled.span`
  font-size: 16px;
  padding-right: 10px;
`;

const StyleProps = styled.span`
  padding-left: 10px;
  font-size: 10px;
`;

const StylePreview = styled.p`
  padding: 10px 0;
  margin: 30px 0;
  border-top: 1px solid #e1e1e1;
`;

class TextStyles extends React.Component {
  checkDsmRes() {
    const { dsmRes, getDsmStyles } = this.props;
    if (!dsmRes) {
      getDsmStyles();
    }
  }

  componentDidMount() {
    this.checkDsmRes();
  }

  render() {
    const { isLoading, dsmRes } = this.props;

    return (
      <>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <TextStylesCont>
            {dsmRes &&
              dsmRes.typeStyles.map((typeStyle, index) => (
                <TextStyle key={`text-style-${index}`}>
                  <StylePreview style={typeStyle}>
                    Pack my box with five dozen liquor jugs.
                  </StylePreview>
                  <StyleName>{typeStyle.name}</StyleName>
                  <StyleProps>size: {typeStyle.fontSize}</StyleProps>
                  <StyleProps>family: {typeStyle.fontFamily}</StyleProps>
                  <StyleProps>style: {typeStyle.fontStyle}</StyleProps>
                  <StyleProps>weight: {typeStyle.fontWeight}</StyleProps>
                  <StyleProps>line height: {typeStyle.lineHeight}</StyleProps>
                  <StyleProps>align: {typeStyle.textAlign}</StyleProps>
                  <StyleProps>
                    {typeStyle.textTransform
                      ? `transform: ${typeStyle.textTransform}`
                      : ``}
                  </StyleProps>
                  <StyleProps>
                    letter spacing: {typeStyle.letterSpacing}
                  </StyleProps>
                </TextStyle>
              ))}
          </TextStylesCont>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
  dsmRes: state.sb.dsmRes,
  isLoading: state.sb.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TextStyles);
