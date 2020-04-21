import { combineReducers } from "redux";
import sbReducer from "./stories/reducers/sbReducer.js";

export const makeRootReducer = () =>
  combineReducers({
    // Add sync reducers here
    // router: connectRouter(history),
    sb: sbReducer
  });

export default makeRootReducer;
