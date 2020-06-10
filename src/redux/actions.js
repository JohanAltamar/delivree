import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
  ITEM_MODAL,
  ITEM_ADDED_TO_CART,
  ITEM_SELECTED
} from "./constants";

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
};

export const addUnit = () => {
  return {
    type: ADD_UNIT
  }
}

export const removeUnit = () => {
  return {
    type: REMOVE_UNIT
  }
}

export const resetUnits = () => {
  return {
    type: RESET_UNITS
  }
}

export const itemModalStatus = (status) => {
  return {
    type: ITEM_MODAL,
    itemModal: status
  }
}

export const itemAddedToCart = (itemAddedMsg) => {
  return{
    type: ITEM_ADDED_TO_CART,
    itemAddedMsg
  }
}

export const itemSelected = (product) => {
  return {
    type: ITEM_SELECTED,
    product
  }
}