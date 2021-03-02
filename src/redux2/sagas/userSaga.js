import { put, call, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";

import store from '../store'
import types from "../types";
import { recoverPasswordApi } from "../api/userApi";
import { successPasswordRecoverAction, failPasswordRecoverAction, errorResetAction } from "../actions/userActions";

function* recoverPasswordSaga(action) {
  try {
    yield call(recoverPasswordApi, action.payload);
    yield put(successPasswordRecoverAction());
    Swal.fire("Éxito", "verifica el correo electrónico", "success");
  } catch (error) {
    yield put(failPasswordRecoverAction(error.message));
    Swal.fire("Error", error.message, "error").then(
      store.dispatch(errorResetAction())
    );
  }
}

export default function* watcherUser() {
  yield takeLatest(types.USER__START_PASSWORD_RECOVER, recoverPasswordSaga);
}
