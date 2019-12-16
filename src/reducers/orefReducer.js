import * as actionTypes from "./orefActionTypes";

const initialState = {
  viewName: "Live"
};

export const orefReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIEW_NAME:
      return { ...state, viewName: action.viewName };
    default:
      return state;
  }
};
