import types from "../types";

const initialState = {
  error: null,
};

const orderInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDERS__FETCH_INFO_SUCCESS:
      return { ...state, ...action.payload };
    case types.ORDERS__FETCH_INFO_FAIL:
      return { ...state, error: action.payload };
    case types.ORDERS__ERROR_RESET:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default orderInfoReducer;
