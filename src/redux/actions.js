import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_MENU } from "./constants";

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

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};
