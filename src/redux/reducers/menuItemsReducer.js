import * as actions from "../constants";

const initialState = {
  itemQty: 1,
  itemModalStatus: false,
  itemAddedMsg: false,
  itemSelected: {},
};

const menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_UNIT:
      return {
        ...state,
        itemQty: state.itemQty + 1,
      };
    case actions.REMOVE_UNIT:
      if (state.itemQty <= 1) {
        return state;
      } else {
        return {
          ...state,
          itemQty: state.itemQty - 1,
        };
      }
    case actions.RESET_UNITS:
      return {
        ...state,
        itemQty: initialState.itemQty,
      };
    case actions.ITEM_MODAL:
      return {
        ...state,
        itemModalStatus: action.itemModal,
      };
    case actions.ITEM_ADDED_TO_CART_MSG:
      return {
        ...state,
        itemAddedMsg: action.itemAddedMsg,
      };
    case actions.ITEM_SELECTED:
      return {
        ...state,
        itemSelected: action.product,
      };
    default:
      return state;
  }
};

export default menuItemsReducer;
