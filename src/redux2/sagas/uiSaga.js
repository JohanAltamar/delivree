import { put, takeLatest, select } from "redux-saga/effects";
import types from "../types";
import {
  guestInfoModalAction,
  startLoaderAction,
} from "../actions/uiActions";
const uiState = (state) => state.ui;

function* guestInfoModalSaga() {
  const { guestInfoModal } = yield select(uiState);
  if (guestInfoModal) yield put(guestInfoModalAction(false));
}

function* startLoaderSaga() {
  yield put(startLoaderAction());
}

// function* stopLoaderSaga() {
//   yield put(stopLoaderAction());
// }

export default function* watcherUI() {
  yield takeLatest(types.USER__SET_INFO, guestInfoModalSaga);
  yield takeLatest(types.USER__START_CHECK_LOGGED_USER, startLoaderSaga);
  // yield takeLatest(types.USER__START_FETCH_LATEST_ORDERS, startLoaderSaga);
}
