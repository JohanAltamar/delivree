import types from "../types";

const initialState = {
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
      
    case types.PRODUCTS__ERROR_RESET:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default productsReducer;
