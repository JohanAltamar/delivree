import { all } from "redux-saga/effects";
import watcherProducts from "./productsSaga";

export default function* rootSaga() {
  yield all([watcherProducts()]);
}
