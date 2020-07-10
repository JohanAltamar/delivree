import * as actions from "../constants";

const initialState = {
  toggleMenu: false,
  PWAInstallBanner: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    case actions.PWA_INSTALL_BANNER_STATUS:
      return{
        ...state,
        PWAInstallBanner: action.status
      }
    default:
      return state;
  }
};
export default uiReducer;
