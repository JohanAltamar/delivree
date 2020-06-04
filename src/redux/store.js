import { createStore, applyMiddleware } from "redux";

import { reducer, initialState } from "./reducer";

const logger = (store) => (next) => (action) => {
    console.log("Dispatching ", action.type);
    let result = next(action);
    console.log("next state", store.getState());
    console.log("--------------------------------")
    return result;
  };

export default createStore(reducer, initialState, applyMiddleware(logger));
