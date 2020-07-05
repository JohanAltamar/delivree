import {combineReducers} from "redux";

import userInterface from "./uiReducer";
import shoppingCart from "./shoppingCartReducer";
import items from "./menuItemsReducer";
import order from "./orderReducer";
import user from "./userReducer";

export default combineReducers({
  userInterface,
  shoppingCart,
  items,
  order,
  user,
});
