import * as constants from "./constants";

export const toggleMenu = () => {
  return {
    type: constants.TOGGLE_MENU,
  };
};

export const logState = () => ({
  type: constants.LOG_STATE
})

export const addToCart = (product, qty) => {
  return {
    type: constants.ADD_TO_CART,
    product,
    qty,
  };
};

export const removeFromCart = (product) => {
  return {
    type: constants.REMOVE_FROM_CART,
    product,
  };
};

export const emptyCart = () => {
  return {
    type: constants.EMPTY_CART,
  };
};

export const addUnit = () => {
  return {
    type: constants.ADD_UNIT,
  };
};

export const removeUnit = () => {
  return {
    type: constants.REMOVE_UNIT,
  };
};

export const resetUnits = () => {
  return {
    type: constants.RESET_UNITS,
  };
};

export const updateProductInCart = (index, op) => {
  return {
    type: constants.UPDATE_UNIT_PRODUCT_IN_CART,
    index,
    op,
  };
};

export const itemModalStatus = (status) => {
  return {
    type: constants.ITEM_MODAL,
    itemModal: status,
  };
};

export const itemAddedToCart = (itemAddedMsg) => {
  return {
    type: constants.ITEM_ADDED_TO_CART_MSG,
    itemAddedMsg,
  };
};

export const itemSelected = (product) => {
  return {
    type: constants.ITEM_SELECTED,
    product,
  };
};

export const orderSent = () => ({
  type: constants.ORDER_SENT,
});

export const orderSentMsg = (status) => ({
  type: constants.ORDER_SENT_MSG,
  status,
});

export const newUser = (name, value) => {
  return {
    type: constants.NEW_USER_FORM,
    name, value
  };
};

export const createUserFlag = (status) => ({
  type: constants.CREATE_USER_FLAG,
  status
})

export const loggedUser = (user) => ({
  type: constants.LOGGED_USER,
  user
});

export const userIsLogged = (status) =>({
  type: constants.USER_IS_LOGGED,
  status
})

export const updateUserInfoModalStatus = (status) =>({
  type: constants.UPDATE_USER_INFO_MODAL,
  status
})

export const updateUserInfo = (param, value) => ({
  type: constants.UPDATE_USER_INFO,
  param,
  value
})

export const deleteUserModalStatus = (status) => ({
  type: constants.DELETE_USER_MODAL,
  status
})

export const deletedUserTriggers = (status) => ({
  type: constants.DELETED_USER_TRIGGERS,
  status
})
