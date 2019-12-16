import * as actionTypes from "./orefActionTypes";

export const setViewName = viewName => {
  return {
    type: actionTypes.SET_VIEW_NAME,
    viewName
  };
};
