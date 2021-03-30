import types from "../types";

const initialState = {
  selectedProduct: null,
  products: [],
  categories: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS__FETCH_CATEGORIES_START:
      return { ...state, loading: true };
    case types.PRODUCTS__FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case types.PRODUCTS__FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START:
      return { ...state, loading: true };
    case types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.PRODUCTS__SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: { ...action.payload, qty: 1, notes: "" },
      };
    case types.PRODUCTS__UPDATE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case types.PRODUCTS__CLEAR_SELECTED_PRODUCT:
      return { ...state, selectedProduct: null };
    case types.PRODUCTS__ERROR_RESET:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default productsReducer;
