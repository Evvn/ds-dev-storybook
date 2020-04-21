import * as actionTypes from "../stories/actions/actionTypes/actionTypes.js";
// eslint-disable-next-line
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

export function* getDsmStyles(action) {
  try {
    const res = yield axios
      // request does not work if the DEFAULT parameter of "&exportFormat=list" is included. Bug?
      // update - colors must exist within a subfolder of the main Colors folder.. weird
      .get(
        `https://vaultintel.invisionapp.com/dsm-export/vault-intel-dsm/vault-dsm/style-data.json?exportFormat=list&key=ryeijWNWB`
      )
      .then((response) => response);
    yield put({
      type: actionTypes.GET_DSM_STYLES_SUCCESS,
      res,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.GET_DSM_STYLES_FAILURE,
      error,
    });
  }
}

export function* actionWatcher() {
  yield takeLatest(actionTypes.GET_DSM_STYLES_REQUEST, getDsmStyles);
}
