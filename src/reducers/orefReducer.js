import * as actionTypes from "./orefActionTypes";

const initialState = {
  viewName: "Live",
  data: [],
  selectedAlert: {},
  isBusy: false
};

export const orefReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIEW_NAME:
      return { ...state, viewName: action.viewName };
    case actionTypes.SET_DATA_ALERTS:
      return { ...state, data: action.data };
    case actionTypes.SET_SELECTED_ALERT:
      return { ...state, selectedAlert: action.alert };
    case actionTypes.SET_BUSY_STATUS:
      return { ...state, isBusy: action.data };
    default:
      return state;
  }
};
