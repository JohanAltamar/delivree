import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import uiReducer from "./uiReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  ui: uiReducer,
  products: productsReducer,
  shoppingCart: cartReducer,
  userInfo: userReducer,
});

export default reducers;
