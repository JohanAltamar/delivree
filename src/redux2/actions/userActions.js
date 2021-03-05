import types from "../types";

export const setUserInfoAction = (payload) => ({
  type: types.USER__SET_INFO,
  payload,
});

export const editUserInfoAction = (payload) => ({
  type: types.USER__EDIT_INFO,
  payload,
});

export const resetUserInfoAction = () => ({
  type: types.USER__RESET_INFO,
});

export const errorResetAction = () => ({
  type: types.USER__ERROR_RESET,
});

// ==========================================================
// ==========================================================
export const startFecthUserInfoAction = (userID) => ({
  type: types.USER__START_FETCH_USER_INFO,
  payload: userID,
});

// ==========================================================
// Password Recovery
// ==========================================================
export const startPasswordRecoverAction = (email) => ({
  type: types.USER__START_PASSWORD_RECOVER,
  payload: email,
});

export const successPasswordRecoverAction = () => ({
  type: types.USER__SUCCESS_PASSWORD_RECOVER,
});

export const failPasswordRecoverAction = (message) => ({
  type: types.USER__FAIL_PASSWORD_RECOVER,
  payload: message,
});

// ==========================================================
// Create new user
// ==========================================================
export const startCreateNewUserAction = (userInfo) => ({
  type: types.USER__START_CREATE_NEW_USER,
  payload: userInfo,
});

export const successCreateNewUserAction = () => ({
  type: types.USER__SUCCESS_CREATE_NEW_USER,
});

export const failCreateNewUserAction = (message) => ({
  type: types.USER__FAIL_CREATE_NEW_USER,
  payload: message,
});

// ==========================================================
// Login user
// ==========================================================
export const startLoginUserAction = (userInfo) => ({
  type: types.USER__START_LOGGIN,
  payload: userInfo,
});

export const successLoginUserAction = () => ({
  type: types.USER__SUCCESS_LOGGIN,
});

export const failLoginUserAction = (message) => ({
  type: types.USER__FAIL_LOGGIN,
  payload: message,
});

// ==========================================================
// Logout user
// ==========================================================
export const logoutUserAction = () => ({ type: types.USER__LOGOUT });

export const startFetchUserLatestOrdersAction = (userID) => ({
  type: types.USER__START_FETCH_LATEST_ORDERS,
  payload: userID,
});

export const successFetchUserLatestOrdersAction = (latestOrders) => ({
  type: types.USER__SUCCESS_FETCH_LATEST_ORDERS,
  payload: latestOrders,
});
