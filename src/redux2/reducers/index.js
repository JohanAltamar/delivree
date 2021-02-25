import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import uiReducer from './uiReducer';


const reducers = combineReducers({
  ui: uiReducer,
  products: productsReducer,
});

export default reducers;