import types from "../types";

const initialState = {
  loading: false,
  toggleMenu: false,
  guestInfoModal: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case types.UI__TOGGLE_MENU:
      return { ...state, toggleMenu: !state.toggleMenu };
    case types.UI__GUEST_USER_INFO_MODAL_STATUS:
      return { ...state, guestInfoModal: action.payload };

    case types.UI__START_LOADER:
      return { ...state, loading: true };
    case types.UI__STOP_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
