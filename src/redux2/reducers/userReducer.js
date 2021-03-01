import types from "../types";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER__SET_INFO:
      return { ...state, ...action.payload };
    case types.USER__RESET_INFO:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
