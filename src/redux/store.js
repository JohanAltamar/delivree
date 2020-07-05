import { createStore, applyMiddleware, compose } from "redux";
// import { reducer } from "./reducer";
import reducer from "./reducers/index"
import { loadState } from "../localStorage";

const persistedState = loadState();

const logger = (store) => (next) => (action) => {
    // console.log("Dispatching ", action.type);
    let result = next(action);
    // console.log("next state", store.getState());
    // console.log("--------------------------------")
    return result;
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, persistedState, composeEnhancers(applyMiddleware(logger)));
