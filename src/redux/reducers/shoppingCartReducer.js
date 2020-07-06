import * as actions from "../constants";

export const initialUser = {
  fullname: "",
  address: "",
  telephone: "",
  email: "",
  password: "",
  neighborhood: "",
  city: "",
};

const initialState = {
  /** ShoppingCartReducer */
  cart: [],
  chooseCartUserTrigger: false,
  guestInfoModalStatus: false,
  /** OrderReducer */
  order: {
    cart: [],
    paymentMethod: "cash",
    userInfo: initialUser,
    delivery: "",
  },
  deleteOrderModalStatus: false,
  completedOrderModalStatus: false,
  /**orderReducer */
  orderSent: false,
  orderSentMsg: false,
  orderID: "",
  /**userReducer */
  loggedUser: {
    information: initialUser,
    orders: [],
    uid: "",
  },
  guestCheckoutInfo: initialUser,
};

const update_item = (array, item, operation) => {
  const newArray = array.slice();
  if (operation === "add") {
    newArray[item].qty = newArray[item].qty + 1;
  } else {
    if (newArray[item].qty > 1) {
      newArray[item].qty = newArray[item].qty - 1;
    }
  }
  return newArray;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const product = action.product;
      product.qty = action.qty;
      return {
        ...state,
        cart: state.cart.concat(product),
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.product.id),
      };
    case actions.EMPTY_CART:
      return {
        ...state,
        cart: [],
        order: {
          paymentMethod: "cash",
        },
        guestCheckoutInfo: initialState.guestCheckoutInfo,
        completedOrderModalStatus: false,
        orderSent: false,
      };
    case actions.UPDATE_UNIT_PRODUCT_IN_CART:
      return {
        ...state,
        cart: update_item(state.cart, action.index, action.op),
      };
    case actions.CHOOSE_CART_USER_TRIGGER:
      return {
        ...state,
        chooseCartUserTrigger: action.status,
      };
    case actions.GUEST_INFO_MODAL:
      return {
        ...state,
        guestInfoModalStatus: action.status,
      };
    case actions.CHECKOUT_PAYMENT_METHOD:
      return {
        ...state,
        order: {
          ...state.order,
          paymentMethod: action.paymentMethod,
        },
      };
    case actions.DELETE_ORDER_MODAL_STATUS:
      return {
        ...state,
        deleteOrderModalStatus: action.status,
      };
    case actions.COMPLETE_ORDER:
      return {
        ...state,
        order: {
          ...state.order,
          ...action.extra,
          cart: state.cart,
          status: "pending for restaurant confirmation",
        },
        orderSent: true,
        completedOrderModalStatus: true,
      };
    case actions.COMPLETED_ORDER_MODAL_STATUS:
      return {
        ...state,
        completedOrderModalStatus: action.status,
        orderSent: false,
      };
    case actions.CONFIRM_CUSTOMER_DATA:
      return {
        ...state,
        order: {
          ...state.order,
          userInfo: action.customer
        },
      };
    /** ORDERS */
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

export default cartReducer;
