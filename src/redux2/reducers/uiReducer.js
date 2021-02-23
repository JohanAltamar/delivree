import types from "../types";

const initialState = {
  loading: false,
  toggleMenu: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case types.UI__TOGGLE_MENU:
      return { ...state, toggleMenu: !state.toggleMenu };
    default:
      return state;
  }
}
