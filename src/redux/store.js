import { createStore, applyMiddleware, compose } from "redux";
// import { reducer } from "./reducer";
import reducer from "./reducers/index"
import thunk from 'redux-thunk';
import { loadState } from "../localStorage";

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, persistedState, composeEnhancers(applyMiddleware(thunk)));
