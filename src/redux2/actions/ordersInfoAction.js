import types from "../types";

export const startFecthOrderInfoAction = (payload) => ({
  type: types.ORDERS__FETCH_INFO_START,
  payload,
});

export const successFecthOrderInfoAction = (payload) => ({
  type: types.ORDERS__FETCH_INFO_SUCCESS,
  payload,
});

export const failFecthOrderInfoAction = (payload) => ({
  type: types.ORDERS__FETCH_INFO_FAIL,
  payload,
});
