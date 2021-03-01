import { toast } from "react-toastify";
import { put, takeLatest, select, call } from "redux-saga/effects";
import Swal from "sweetalert2";

import store from "../store";
import types from "../types";
import { clearSelectedProduct } from "../actions/productsActions";
import {
  moveUserInfoToCartAction,
  processResetCartAction,
} from "../actions/cartActions";
import { resetUserInfoAction } from "../actions/userActions";
import { placeOrderCartApi } from "../api/cartApi";

function* addProduct2CartSaga() {
  yield put(clearSelectedProduct());
  toast.success("Producto agregado al carrito.");
}

function* resetCartSaga() {
  yield Swal.fire({
    title: "Estás seguro?",
    text: "No podrás deshacerlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00d000",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, elimínala!",
    cancelButtonText: "No, salgamos!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrada!", "La orden ha sido eliminada.", "success");
      store.dispatch(processResetCartAction());
      store.dispatch(resetUserInfoAction());
      window.location.assign(`${window.location.origin}`);
    }
  });
  // toast.success("Orden eliminada con éxito");
}

function* placeOrderCartSaga() {
  const getUserInfo = (state) => state.userInfo;
  const getShoppingCartInfo = (state) => state.shoppingCart;

  const userInfo = yield select(getUserInfo);
  yield put(moveUserInfoToCartAction(userInfo));

  const shoppingCartInfo = yield select(getShoppingCartInfo);

  try {
    const orderID = yield call(placeOrderCartApi, shoppingCartInfo);

    yield Swal.fire({
      title: `Orden Enviada. Desea hacerle seguimiento?`,
      showDenyButton: true,
      confirmButtonText: `Seguir pedido`,
      denyButtonText: `Volver al inicio`,
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch(processResetCartAction());
        store.dispatch(resetUserInfoAction());
        window.location.assign(`${window.location.origin}/orders/${orderID}`);
      } else if (result.isDenied) {
        store.dispatch(processResetCartAction());
        store.dispatch(resetUserInfoAction());
        window.location.assign(`${window.location.origin}/`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* watcherCart() {
  yield takeLatest(types.CART__ADD_PRODUCT, addProduct2CartSaga);
  yield takeLatest(types.CART__RESET_CART_START, resetCartSaga);
  yield takeLatest(types.CART__START_FINISH_ORDER, placeOrderCartSaga);
}
