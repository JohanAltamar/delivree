import { all } from "redux-saga/effects";
import watcherCart from "./cartSaga";
import watcherProducts from "./productsSaga";
import watcherUI from "./uiSaga";

export default function* rootSaga() {
  yield all([watcherProducts(), watcherCart(), watcherUI()]);
}
