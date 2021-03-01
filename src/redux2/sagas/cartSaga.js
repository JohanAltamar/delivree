import { toast } from "react-toastify";
import { put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";

import store from "../store";
import types from "../types";
import { clearSelectedProduct } from "../actions/productsActions";
import { processResetCartAction } from "../actions/cartActions";
import { resetUserInfoAction } from "../actions/userActions";


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
      Swal.fire("Borrada!", "La ha sido eliminada.", "success");
      store.dispatch(processResetCartAction());
      store.dispatch(resetUserInfoAction());
    }
  });
  // toast.success("Orden eliminada con éxito");
}

export default function* watcherCart() {
  yield takeLatest(types.CART__ADD_PRODUCT, addProduct2CartSaga);
  yield takeLatest(types.CART__RESET_CART_START, resetCartSaga);
}
