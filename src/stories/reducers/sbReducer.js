import * as actionTypes from "../actions/actionTypes/actionTypes.js";

const initialState = {
  isLoading: false,
  dsmRes: false
};

function sbReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_DSM_STYLES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_DSM_STYLES_SUCCESS:
      let dsmColors = {};
      action.res.data.list.colors.forEach(colorGroup => {
        dsmColors[colorGroup.name] = {};
        colorGroup.colors.forEach(color => {
          dsmColors[colorGroup.name][color.name] = color.value;
        });
      });

      return {
        ...state,
        isLoading: false,
        dsmRes: action.res.data.list,
        dsmColors
      };
    case actionTypes.GET_DSM_STYLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        dsmRes: action.error
      };
    default:
      return state;
  }
}

export default sbReducer;
