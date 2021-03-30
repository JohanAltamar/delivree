import types from "../types";

export const addProduct2CartAction = (payload) => ({
  type: types.CART__ADD_PRODUCT,
  payload,
});

export const updateCartProductAction = (payload) => ({
  type: types.CART__UPDATE_PRODUCT,
  payload,
});

export const removeCartProductAction = (id) => ({
  type: types.CART__REMOVE_PRODUCT,
  payload: id,
});

export const startResetCartAction = () => ({
  type: types.CART__RESET_CART_START,
});

export const processResetCartAction = () => ({
  type: types.CART__RESET_CART_PROCESS,
});

export const startFinishOrderCartAction = (payload) => ({
  type: types.CART__START_FINISH_ORDER,
  payload,
});

export const processFinishOrderCartAction = () => ({
  type: types.CART__PROCESS_FINISH_ORDER,
});

export const moveUserInfoToCartAction = (payload) => ({
  type: types.CART__MOVE_USER_INFO_TO_CART,
  payload,
});

export const startRepeatOrderCartAction = (products) => ({
  type: types.CART__START_REPEAT_ORDER,
  payload: products,
});

export const processRepeatOrderCartAction = (products) => ({
  type: types.CART__PROCESS_REPEAT_ORDER,
  payload: products,
});
