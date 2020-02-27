import * as actionTypes from "./orefActionTypes";

const initialState = {
  viewName: "Live",
  data: [],
  selectedAlert: {}
};

export const orefReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIEW_NAME:
      return { ...state, viewName: action.viewName };
    case actionTypes.SET_DATA_ALERTS:
      return { ...state, data: action.data };
    case actionTypes.SET_SELECTED_ALERT:
      return { ...state, selectedAlert: action.alert };
    default:
      return state;
  }
};
