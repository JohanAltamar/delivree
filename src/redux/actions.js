import {
  TOGGLE_MENU,
  LOG_STATE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
  UPDATE_UNIT_PRODUCT_IN_CART,
  ITEM_MODAL,
  ITEM_ADDED_TO_CART_MSG,
  ITEM_SELECTED,
  ORDER_SENT,
  ORDER_SENT_MSG,
  NEW_USER,
  LOGGED_USER,
  USER_IS_LOGGED,
  UPDATE_USER_INFO_MODAL,
  UPDATE_USER_INFO,
  DELETE_USER_MODAL,
} from "./constants";

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const logState = () => ({
  type: LOG_STATE
})

export const addToCart = (product, qty) => {
  return {
    type: ADD_TO_CART,
    product,
    qty,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const addUnit = () => {
  return {
    type: ADD_UNIT,
  };
};

export const removeUnit = () => {
  return {
    type: REMOVE_UNIT,
  };
};

export const resetUnits = () => {
  return {
    type: RESET_UNITS,
  };
};

export const updateProductInCart = (index, op) => {
  return {
    type: UPDATE_UNIT_PRODUCT_IN_CART,
    index,
    op,
  };
};

export const itemModalStatus = (status) => {
  return {
    type: ITEM_MODAL,
    itemModal: status,
  };
};

export const itemAddedToCart = (itemAddedMsg) => {
  return {
    type: ITEM_ADDED_TO_CART_MSG,
    itemAddedMsg,
  };
};

export const itemSelected = (product) => {
  return {
    type: ITEM_SELECTED,
    product,
  };
};

export const orderSent = () => ({
  type: ORDER_SENT,
});

export const orderSentMsg = (status) => ({
  type: ORDER_SENT_MSG,
  status,
});

export const newUser = (name, value) => {
  return {
    type: NEW_USER,
    name, value
  };
};

export const loggedUser = (user) => ({
  type: LOGGED_USER,
  user
});

export const userIsLogged = (status) =>({
  type: USER_IS_LOGGED,
  status
})

export const updateUserInfoModalStatus = (status) =>({
  type: UPDATE_USER_INFO_MODAL,
  status
})

export const updateUserInfo = (param, value) => ({
  type: UPDATE_USER_INFO,
  param,
  value
})

export const deleteUserModalStatus = (status) => ({
  type: DELETE_USER_MODAL,
  status
})
