const types = {
  UI__TOGGLE_MENU: "UI__TOGGLE_MENU",
  UI__GUEST_USER_INFO_MODAL_STATUS: "UI__GUEST_USER_INFO_MODAL_STATUS",
  // ======================================================================
  // Products types
  // ======================================================================
  PRODUCTS__ERROR_RESET: "PRODUCTS__ERROR_RESET",
  PRODUCTS__SET_SELECTED_PRODUCT: "PRODUCTS__SET_SELECTED_PRODUCT",
  PRODUCTS__UPDATE_SELECTED_PRODUCT: "PRODUCTS__UPDATE_SELECTED_PRODUCT",
  PRODUCTS__CLEAR_SELECTED_PRODUCT: "PRODUCTS__CLEAR_SELECTED_PRODUCT",

  PRODUCTS__FETCH_CATEGORIES_START: "PRODUCTS__FETCH_CATEGORIES_START",
  PRODUCTS__FETCH_CATEGORIES_SUCCESS: "PRODUCTS__FETCH_CATEGORIES_SUCCESS",
  PRODUCTS__FETCH_CATEGORIES_FAIL: "PRODUCTS__FETCH_CATEGORIES_FAIL",

  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START",
  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS",
  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_FAIL:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_FAIL",
  // ======================================================================
  // ShoppingCart types
  // ======================================================================
  CART__ADD_PRODUCT: "CART__ADD_PRODUCT",
  CART__UPDATE_PRODUCT: "CART__UPDATE_PRODUCT",
  CART__REMOVE_PRODUCT: "CART__REMOVE_PRODUCT",
  // ======================================================================
  // User types
  // ======================================================================
  USER__SET_INFO: "USER__SET_INFO",
};

export default types;
