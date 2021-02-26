import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import uiReducer from "./uiReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  ui: uiReducer,
  products: productsReducer,
  shoppingCart: cartReducer,
});

export default reducers;
