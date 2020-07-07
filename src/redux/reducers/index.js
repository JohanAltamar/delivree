import {combineReducers} from "redux";

import userInterface from "./uiReducer";
import shoppingCart from "./shoppingCartReducer";
import items from "./menuItemsReducer";
import user from "./userReducer";

export default combineReducers({
  userInterface,
  shoppingCart,
  items,
  user,
});
