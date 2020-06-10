import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
  ITEM_MODAL,
  ITEM_ADDED_TO_CART_MSG,
  ITEM_SELECTED,
} from "./constants";

export const initialState = {
  cart: [],
  toggleMenu: false,
  itemQty: 1,
  itemModalStatus: false,
  itemAddedMsg: false,
  itemSelected: {}
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
      const product = action.product;
      product.qty = action.qty;
      return {
        ...state,
        cart: state.cart.concat(product),
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
    case ITEM_MODAL:
      return {
        ...state,
        itemModalStatus: action.itemModal,
      };
    case ITEM_ADDED_TO_CART_MSG:
      return {
        ...state,
        itemAddedMsg: action.itemAddedMsg,
      };
    case ITEM_SELECTED:{
      return{
        ...state,
        itemSelected: action.product
      }
    }
    default:
      return state;
  }
};
