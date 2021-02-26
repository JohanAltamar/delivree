import types from "../types";

export const addProduct2CartAction = (payload) => ({
  type: types.CART__ADD_PRODUCT,
  payload,
});
