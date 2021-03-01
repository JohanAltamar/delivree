import { all } from "redux-saga/effects";
import watcherCart from "./cartSaga";
import watcherOrdersInfo from "./orderInfoSaga";
import watcherProducts from "./productsSaga";
import watcherUI from "./uiSaga";

export default function* rootSaga() {
  yield all([
    watcherProducts(),
    watcherCart(),
    watcherUI(),
    watcherOrdersInfo(),
  ]);
}
