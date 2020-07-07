import * as actions from "../constants";

export const initialUser = {
  fullname: "",
  address: "",
  telephone: "",
  email: "",
  password: "",
  neighborhood: "",
  city: "",
};

const initialState = {
  newUser: initialUser,
  createUserFlagStatus: false,
  loggedUser: {
    information: initialUser,
    orders: [],
    uid: "",
  },
  userIsLogged: false,
  updateUserInfoModal: false,
  updateUserInfo: initialUser,
  deleteUserModal: false,
  moveTrigger: false,
  removeTrigger: false,
  guestCheckoutInfo: initialUser,
};

const removePassword = (userInformation) => {
  const info = userInformation;
  delete info.information.password;
  return info;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_USER_FORM: {
      return {
        ...state,
        newUser:
          action.name === "all"
            ? action.value
            : { ...state.newUser, [action.name]: action.value },
      };
    }
    case actions.CREATE_USER_FLAG:
      return {
        ...state,
        createUserFlagStatus: action.status,
      };
    case actions.LOGGED_USER:
      return {
        ...state,
        loggedUser: removePassword(action.user),
        newUser: initialState.newUser,
        userIsLogged: true,
        createUserFlagStatus: false,
      };
    case actions.USER_IS_LOGGED:
      if (action.status !== state.userIsLogged) {
        return {
          ...state,
          loggedUser: !action.status
            ? initialState.loggedUser
            : state.loggedUser,
          userIsLogged: action.status,
        };
      } else {
        return state;
      }
    case actions.UPDATE_USER_INFO_MODAL: {
      return {
        ...state,
        updateUserInfoModal: action.status,
      };
    }
    case actions.UPDATE_USER_INFO: {
      return {
        ...state,
        updateUserInfo:
          action.param === "all"
            ? action.value
            : {
                ...state.updateUserInfo,
                [action.param]: action.value,
              },
      };
    }
    case actions.DELETE_USER_MODAL:
      return {
        ...state,
        deleteUserModal: action.status,
      };
    case actions.DELETED_USER_TRIGGERS:
      if (action.status === "deletedUser") {
        return {
          ...state,
          deleteUserModal: false,
          userIsLogged: false,
          loggedUser: initialState.loggedUser,
          moveTrigger: false,
          removeTrigger: false,
        };
      } else if (action.status === "moveToDeletedUsers") {
        return {
          ...state,
          moveTrigger: true,
          removeTrigger: false,
        };
      } else if (action.status === "removeFromUsers") {
        return {
          ...state,
          moveTrigger: false,
          removeTrigger: true,
        };
      }
      break;
    case actions.GUEST_CHECKOUT_USER:
      return {
        ...state,
        guestCheckoutInfo:
          action.param === "all"
            ? action.value
            : {
                ...state.guestCheckoutInfo,
                [action.param]: action.value,
              },
      };
    default:
      return state;
  }
};
export default userReducer;
