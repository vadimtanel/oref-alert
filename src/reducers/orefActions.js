import * as actionTypes from "./orefActionTypes";

export const setViewName = viewName => {
  return {
    type: actionTypes.SET_VIEW_NAME,
    viewName
  };
};

export const setDataAlerts = dataAlerts => {
  return {
    type: actionTypes.SET_DATA_ALERTS,
    data: dataAlerts
  };
};

export const setSelectedAlert = alert => {
  return {
    type: actionTypes.SET_SELECTED_ALERT,
    alert
  };
};

export const setBusyStatus = isBusy => {
  return {
    type: actionTypes.SET_BUSY_STATUS,
    data: isBusy
  };
};
