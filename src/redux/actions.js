import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
  ITEM_MODAL,
  ITEM_ADDED_TO_CART_MSG,
  ITEM_SELECTED,
  ORDER_SENT,
  ORDER_SENT_MSG,
} from "./constants";

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const addToCart = (product, qty) => {
  return {
    type: ADD_TO_CART,
    product,
    qty
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
    type: EMPTY_CART
  }
}

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
    type: ITEM_ADDED_TO_CART_MSG,
    itemAddedMsg
  }
}

export const itemSelected = (product) => {
  return {
    type: ITEM_SELECTED,
    product
  }
}

export const orderSent = () => ({
  type: ORDER_SENT
})

export const orderSentMsg = (status) => ({
  type: ORDER_SENT_MSG,
  status
})