import { put, takeLatest, select } from "redux-saga/effects";
import types from "../types";
import { guestInfoModalAction } from "../actions/uiActions";
const uiState = (state) => state.ui;

function* guestInfoModalSaga() {
  const { guestInfoModal } = yield select(uiState);
  if (guestInfoModal) yield put(guestInfoModalAction(false));
}

export default function* watcherUI() {
  yield takeLatest(types.USER__SET_INFO, guestInfoModalSaga);
}
