import * as constants from './constants';

export const toggleMenu = () => {
  return {
    type: constants.TOGGLE_MENU,
  };
};

export const setBeforeinstallpromptEventData = (data) => ({
  type: constants.BEFORE_INSTALL_PROMPT_EVENT_DATA,
  data,
});

export const showPWAInstallBanner = (status) => ({
  type: constants.PWA_INSTALL_BANNER_STATUS,
  status,
});

export const setPWAStatus = (status) => ({
  type: constants.SET_PWA_STATUS,
  status,
});

export const pwaInstallProcess = () => (dispatch, getState) => {
  const PWAStatus = getState().userInterface.PWAStatus !== 'dismissed';
  const beforeinstallpromptEventData =
    getState().userInterface.beforeinstallpromptEventData !== null;
  if (PWAStatus && beforeinstallpromptEventData) {
    dispatch({ type: constants.PWA_INSTALL_BANNER_STATUS, status: true });
  }
};

export const logState = () => ({
  type: constants.LOG_STATE,
});

export const addItemToCart = (product, qty) => (dispatch) => {
  Promise.resolve(dispatch({ type: constants.ADD_TO_CART, product, qty }))
    .then(
      dispatch({ type: constants.ITEM_ADDED_TO_CART_MSG, itemAddedMsg: true })
    )
    .then(dispatch({ type: constants.CLOSE_MENU_ITEM_MODAL }));
};

export const removeFromCart = (product) => {
  return {
    type: constants.REMOVE_FROM_CART,
    product,
  };
};

export const emptyCart = () => {
  return {
    type: constants.EMPTY_CART,
  };
};

export const addUnit = () => {
  return {
    type: constants.ADD_UNIT,
  };
};

export const removeUnit = () => {
  return {
    type: constants.REMOVE_UNIT,
  };
};

export const resetUnits = () => {
  return {
    type: constants.RESET_UNITS,
  };
};

export const updateProductInCart = (index, op) => {
  return {
    type: constants.UPDATE_UNIT_PRODUCT_IN_CART,
    index,
    op,
  };
};

export const chooseCartUserTrigger = (status) => ({
  type: constants.CHOOSE_CART_USER_TRIGGER,
  status,
});

export const guestCheckoutModalStatus = (status) => ({
  type: constants.GUEST_INFO_MODAL,
  status,
});

export const checkoutPaymentMethod = (paymentMethod) => ({
  type: constants.CHECKOUT_PAYMENT_METHOD,
  paymentMethod,
});

export const deleteOrderModalStatus = (status) => ({
  type: constants.DELETE_ORDER_MODAL_STATUS,
  status,
});

export const completeOrder = (extra) => ({
  type: constants.COMPLETE_ORDER,
  extra,
});

export const completedOrderModalStatus = (status) => ({
  type: constants.COMPLETED_ORDER_MODAL_STATUS,
  status,
});

/** THUNK */
export const confirmCustomerData = (customer) => (dispatch, getState) => {
  const userInfo =
    customer === 'guest'
      ? getState().user.guestCheckoutInfo
      : getState().user.loggedUser.information;
  dispatch({
    type: constants.CONFIRM_CUSTOMER_DATA,
    customerInfo: userInfo,
    customerID: customer,
  });
};

export const itemModalStatus = (status) => {
  return {
    type: constants.ITEM_MODAL,
    itemModal: status,
  };
};

export const itemAddedToCart = (itemAddedMsg) => {
  return {
    type: constants.ITEM_ADDED_TO_CART_MSG,
    itemAddedMsg,
  };
};

export const itemSelected = (product) => {
  return {
    type: constants.ITEM_SELECTED,
    product,
  };
};

// export const resetItemsState = () => ({
//   type: constants.RESET_ITEMS_STATE
// })
export const resetItemsState = () => (dispatch, getState) => {
  if (getState().items.itemAddedMsg || getState().items.itemModalStatus) {
    dispatch({ type: constants.RESET_ITEMS_STATE });
  }
};

export const openMenuItemModal = (product) => ({
  type: constants.OPEN_MENU_ITEM_MODAL,
  product,
});

export const closeMenuItemModal = () => ({
  type: constants.CLOSE_MENU_ITEM_MODAL,
});

export const orderSent = (status) => ({
  type: constants.ORDER_SENT,
  status,
});

export const orderSentMsg = (status) => ({
  type: constants.ORDER_SENT_MSG,
  status,
});

export const orderID = (value) => ({
  type: constants.ORDER_ID,
  value,
});

export const newUser = (name, value) => {
  return {
    type: constants.NEW_USER_FORM,
    name,
    value,
  };
};

export const createUserFlag = (status) => ({
  type: constants.CREATE_USER_FLAG,
  status,
});

export const loggedUser = (user) => ({
  type: constants.LOGGED_USER,
  user,
});

export const userIsLogged = (status) => ({
  type: constants.USER_IS_LOGGED,
  status,
});

export const logUserIn = (status, user) => (dispatch) => {
  Promise.resolve(dispatch({ type: constants.USER_IS_LOGGED, status })).then(
    dispatch({ type: constants.LOGGED_USER, user })
  );
};

export const updateUserInfoModalStatus = (status) => ({
  type: constants.UPDATE_USER_INFO_MODAL,
  status,
});

export const updateUserInfo = (param, value) => ({
  type: constants.UPDATE_USER_INFO,
  param,
  value,
});

export const deleteUserModalStatus = (status) => ({
  type: constants.DELETE_USER_MODAL,
  status,
});

export const deletedUserTriggers = (status) => ({
  type: constants.DELETED_USER_TRIGGERS,
  status,
});

export const guestCheckoutUser = (param, value) => ({
  type: constants.GUEST_CHECKOUT_USER,
  param,
  value,
});

export const setDeliveryValue = (delivery) => ({
  type: constants.SET_DELIVERY_VALUE,
  delivery,
});

export const addOrderToProfile = (newOrder) => ({
  type: constants.ADD_ORDER_TO_CUSTOMER_PROFILE,
  newOrder,
});
