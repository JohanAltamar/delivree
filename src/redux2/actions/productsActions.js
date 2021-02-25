import types from "../types";

export const startError = () => ({
  type: types.PRODUCTS__FETCH_CATEGORIES_FAIL,
});

export const categoriesFetchSuccess = (payload) => ({
  type: types.PRODUCTS__FETCH_CATEGORIES_SUCCESS,
  payload,
});
