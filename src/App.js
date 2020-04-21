import React from "react";
import "./App.scss";
import Colors from "./dsmComponents/Colors";
import TextStyles from "./dsmComponents/TextStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./stories/actions/actions.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Colors />
        <TextStyles />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  dsmRes: state.dsmRes,
  isLoading: state.sb.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
