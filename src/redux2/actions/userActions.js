import types from "../types";

export const setUserInfoAction = (payload) => ({
  type: types.USER__SET_INFO,
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
export const startCheckLoggedUserAction = () => ({
  type: types.USER__START_CHECK_LOGGED_USER,
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
