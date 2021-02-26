import { all } from "redux-saga/effects";
import watcherCart from "./cartSaga";
import watcherProducts from "./productsSaga";

export default function* rootSaga() {
  yield all([watcherProducts(), watcherCart()]);
}
