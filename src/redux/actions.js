import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
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