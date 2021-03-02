import types from "../types";

export const setUserInfoAction = (payload) => ({
  type: types.USER__SET_INFO,
  payload,
});

export const resetUserInfoAction = () => ({
  type: types.USER__RESET_INFO,
});

export const startCheckLoggedUserAction = () => ({
  type: types.USER__START_CHECK_LOGGED_USER,
});

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

export const errorResetAction = () => ({
  type: types.USER__ERROR_RESET
})