import {
  TOGGLE_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_UNIT,
  REMOVE_UNIT,
  RESET_UNITS,
  UPDATE_UNIT_PRODUCT_IN_CART,
  ITEM_MODAL,
  ITEM_ADDED_TO_CART_MSG,
  ITEM_SELECTED,
  ORDER_SENT,
  ORDER_SENT_MSG,
  NEW_USER,
  LOGGED_USER,
  USER_IS_LOGGED,
  UPDATE_USER_INFO_MODAL,
  UPDATE_USER_INFO,
} from "./constants";

export const initialUser = {
  fullname:'',
  address:'',
  telephone:'',
  email:'',
  password:'',
  neighborhood:'',
  city:''
};

export const initialState = {
  cart: [],
  toggleMenu: false,
  itemQty: 1,
  itemModalStatus: false,
  itemAddedMsg: false,
  itemSelected: {},
  orderSent: false,
  orderSentMsg: false,
  newUser: initialUser,
  loggedUser: initialUser,
  userIsLogged: false,
  updateUserInfoModal: false,
  updateUserInfo: initialUser,
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

const removePassword = (userInformation) => {
  const info = userInformation
  delete info.information.password
  return info
}

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
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case UPDATE_UNIT_PRODUCT_IN_CART:
      return {
        ...state,
        cart: update_item(state.cart, action.index, action.op),
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
    case ITEM_SELECTED: {
      return {
        ...state,
        itemSelected: action.product,
      };
    }
    case ORDER_SENT: {
      return {
        ...state,
        orderSent: true,
      };
    }
    case ORDER_SENT_MSG: {
      return {
        ...state,
        orderSentMsg: action.status,
      };
    }
    /** USERS */
    case NEW_USER: {
      return{
        ...state,
        newUser: action.name === 'all' ? action.value : {...state.newUser, [action.name]: action.value}
      }
    }
    case LOGGED_USER:
      return{
        ...state,
        loggedUser: removePassword(action.user)
          // ...action.user,
          // information: {
          //   ...action.user.information,
          //   password: ''

        }
    case USER_IS_LOGGED: {
      return{
        ...state,
        loggedUser: !action.status ? initialUser : state.loggedUser,
        userIsLogged: action.status
      }
    }
    case UPDATE_USER_INFO_MODAL:{
      return{
        ...state,
        updateUserInfoModal: action.status
      }
    }
    case UPDATE_USER_INFO:{
      return{
        ...state,
        updateUserInfo: action.param === 'all' ?
          action.value :
          {
            ...state.updateUserInfo,
            [action.param]: action.value
          }
      }
    }
    default:
      return state;
  }
};
