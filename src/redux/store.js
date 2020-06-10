import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { loadState } from "../localStorage";

const persistedState = loadState();

const logger = (store) => (next) => (action) => {
    console.log("Dispatching ", action.type);
    let result = next(action);
    console.log("next state", store.getState());
    console.log("--------------------------------")
    return result;
  };

export default createStore(reducer, persistedState, applyMiddleware(logger));
