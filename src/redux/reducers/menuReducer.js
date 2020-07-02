import * as actions from "../constants";

const initialState = {
  toggleMenu: false,
}

export default const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    default:
      return state
  }
}
