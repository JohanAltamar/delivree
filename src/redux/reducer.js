import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_MENU } from "./constants";

export const initialState = {
  cart: [],
  toggleMenu: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    /** SHOPPING CART */
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.product),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.product.id),
      };
    /** UI COMPONENTS */
    case TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu
      }
    default:
      return state
  }
  // if (action.type === ADD_TO_CART) {
  // } else if (action.type === REMOVE_FROM_CART) {
  //   return {
  //     ...state,
  //     cart: state.cart.filter((product) => product.id !== action.product.id),
  //   };
  // }
  // return state;
};
