import { put, call, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";

import store from "../store";
import types from "../types";
import {
  createUserApi,
  recoverPasswordApi,
  loginUserApi,
} from "../api/userApi";
import * as userActions from "../actions/userActions";

const errorAlert = (error) => {
  Swal.fire("Error", error.message, "error").then(() =>
    store.dispatch(userActions.errorResetAction())
  );
};

function* recoverPasswordSaga(action) {
  try {
    yield call(recoverPasswordApi, action.payload);
    yield put(userActions.successPasswordRecoverAction());
    Swal.fire("Éxito", "verifica el correo electrónico", "success");
  } catch (error) {
    yield put(userActions.failPasswordRecoverAction(error.message));
    errorAlert(error);
  }
}

function* createUserSaga(action) {
  try {
    yield call(createUserApi, action.payload);
    yield put(userActions.successCreateNewUserAction());
    Swal.fire("Éxito", "Usuario creado", "success");
  } catch (error) {
    yield put(userActions.failCreateNewUserAction(error.message));
    errorAlert(error);
  }
}

function* loginUserSaga(action) {
  try {
    const userInfo = yield call(loginUserApi, action.payload);
    yield put(userActions.setUserInfoAction({ ...userInfo, logged: true }));
  } catch (error) {}
}

export default function* watcherUser() {
  yield takeLatest(types.USER__START_PASSWORD_RECOVER, recoverPasswordSaga);
  yield takeLatest(types.USER__START_CREATE_NEW_USER, createUserSaga);
  yield takeLatest(types.USER__START_LOGGIN, loginUserSaga);
}
