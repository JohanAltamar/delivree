import {combineReducers} from "redux";

import userInterface from "./uiReducer";
import cart from "./shoppingCartReducer";
import items from "./menuItemsReducer";
import order from "./orderReducer";
import user from "./userReducer";

export default combineReducers({
  userInterface,
  cart,
  items,
  order,
  user,
});
