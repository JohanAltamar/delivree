import * as actions from "../constants";

const initialState = {
  orderSent: false,
  orderSentMsg: false,
  orderID: "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDER_SENT: {
      return {
        ...state,
        orderSent: action.status,
      };
    }
    case actions.ORDER_SENT_MSG: {
      return {
        ...state,
        orderSentMsg: action.status,
      };
    }
    case actions.ORDER_ID:
      return {
        ...state,
        orderID: action.value,
      };
    default:
      return state;
  }
};

export default orderReducer;
