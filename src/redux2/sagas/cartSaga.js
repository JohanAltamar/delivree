import { put, takeLatest } from "redux-saga/effects";
import { clearSelectedProduct } from "../actions/productsActions";
import types from "../types";

function* addProduct2CartSaga() {
  yield put(clearSelectedProduct());
}

export default function* watcherCart() {
  yield takeLatest(types.CART__ADD_PRODUCT, addProduct2CartSaga);
}
