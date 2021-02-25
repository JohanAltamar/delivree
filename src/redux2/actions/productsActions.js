import types from "../types";

export const startError = () => ({
  type: types.PRODUCTS__FETCH_CATEGORIES_FAIL,
});

export const categoriesFetchStart = () => ({
  type: types.PRODUCTS__FETCH_CATEGORIES_START,
});

export const categoriesFetchSuccess = (payload) => ({
  type: types.PRODUCTS__FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const productsByCategoriesFetchStart = (categoryName) => {
  return {
    type: types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START,
    payload: categoryName,
  };
};

export const productsByCategoriesFetchSuccess = (payload) => ({
  type: types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload,
});
