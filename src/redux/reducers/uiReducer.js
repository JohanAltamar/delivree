import * as actions from "../constants";

const initialState = {
  toggleMenu: false,
  beforeinstallpromptEventData: null,
  PWAInstallBanner: false,
  PWAStatus: "first_time",
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
      };
    case actions.SET_PWA_STATUS:
      return{
        ...state,
        PWAStatus: action.status
      }
    case actions.BEFORE_INSTALL_PROMPT_EVENT_DATA:
      return{
        ...state,
        beforeinstallpromptEventData: action.data
      }
    default:
      return state;
  }
};
export default uiReducer;
