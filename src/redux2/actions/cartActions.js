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
