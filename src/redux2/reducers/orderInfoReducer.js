import types from "../types";

const initialState = {
  error: null,
  loading: false,
};

const orderInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDERS__FETCH_INFO_START:
      return { ...state, loading: true };
    case types.ORDERS__FETCH_INFO_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case types.ORDERS__FETCH_INFO_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.ORDERS__ERROR_RESET:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default orderInfoReducer;
