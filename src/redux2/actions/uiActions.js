import types from "../types";

export const guestInfoModalAction = (state) => ({
  type: types.UI__GUEST_USER_INFO_MODAL_STATUS,
  payload: state,
});

export const startLoaderAction = () => ({ type: types.UI__START_LOADER });

export const stopLoaderAction = () => ({ type: types.UI__STOP_LOADER });
