import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../stories/actions/actions.js";
import { withTheme } from "styled-components";

const Container = styled.div`
  font-family: sans-serif;
`;

const Palette = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ColorCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 40px;
`;

const ColorSwatch = styled.div`
  width: 130px;
  height: 80px;
  border-radius: 3px;
`;

const ColorLabel = styled.span`
  margin-top: 10px;
`;

class Colors extends React.Component {
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

    // let allColors = [];
    // console.log(
    //   Object.keys(theme).forEach((themePropKey) => {
    //     let colorObj = {};
    //     colorObj[themePropKey] = theme[themePropKey];
    //     themePropKey.slice(0, 5) === "color" && allColors.push(colorObj);
    //   })
    // );

    // console.log(allColors);

    return (
      <Container>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>Colors</h1>
            {dsmRes &&
              dsmRes.colors.map((colorGroup, index) => (
                <div key={`ColorsCont-${index}`}>
                  <h2>{colorGroup.name}</h2>
                  <Palette className="colors-cont">
                    {colorGroup.colors.map((colorItem, index) => (
                      <ColorCont key={`ColorGroupCont-${index}`}>
                        <ColorSwatch
                          style={{ backgroundColor: colorItem.value }}
                        />
                        <ColorLabel>{colorItem.value}</ColorLabel>
                        <ColorLabel>{colorItem.name}</ColorLabel>
                      </ColorCont>
                    ))}
                  </Palette>
                </div>
              ))}
          </>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
  dsmRes: state.sb.dsmRes,
  isLoading: state.sb.isLoading,
});

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Colors));
