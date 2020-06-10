import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
} from "./constants";

export const initialState = {
  cart: [],
  toggleMenu: false,
  itemQty: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    /** UI COMPONENTS */
    case TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
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
    /** MENU ITEMS */
    case ADD_UNIT:
      return {
        ...state,
        itemQty: state.itemQty + 1,
      };
    case REMOVE_UNIT:
      if (state.itemQty <= 1) {
        return state;
      } else {
        return {
          ...state,
          itemQty: state.itemQty - 1,
        };
      }
    case RESET_UNITS:
      return {
        ...state,
        itemQty: initialState.itemQty,
      };

    default:
      return state;
  }
};
