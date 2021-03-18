import { put, call, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";

import store from "../store";
import types from "../types";
import * as userApis from "../api/userApi";
import * as userActions from "../actions/userActions";
import { startLoaderAction, stopLoaderAction } from "../actions/uiActions";

const errorAlert = (error) => {
  console.log(error);
  Swal.fire("Error", error.message, "error").then(() =>
    store.dispatch(userActions.errorResetAction())
  );
};

const requestPasswordAlert = async () => {
  const { value: password } = await Swal.fire({
    title: "Ingrese la contraseña",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Digite su contraseña",
    inputAttributes: {
      minlength: 6,
      maxlength: 116,
      autocapitalize: "off",
      autocorrect: "off",
    },
  });

  if (password) {
    await userApis.deleteUser(password);
    Swal.fire(`Usuario Eliminado.`);
    window.location.assign(`${window.location.origin}/login`);
  }
};

function* recoverPasswordSaga(action) {
  try {
    yield call(userApis.recoverPasswordApi, action.payload);
    yield put(userActions.successPasswordRecoverAction());
    Swal.fire("Éxito", "verifica el correo electrónico", "success");
  } catch (error) {
    yield put(userActions.failPasswordRecoverAction(error.message));
    errorAlert(error);
  }
}

function* createUserSaga(action) {
  try {
    yield call(userApis.createUserApi, action.payload);
    yield put(userActions.successCreateNewUserAction());
    Swal.fire("Éxito", "Usuario creado", "success");
  } catch (error) {
    yield put(userActions.failCreateNewUserAction(error.message));
    errorAlert(error);
  }
}

function* loginUserSaga(action) {
  try {
    const userInfo = yield call(userApis.loginUserApi, action.payload);
    yield put(userActions.setUserInfoAction({ ...userInfo, logged: true }));
  } catch (error) {
    errorAlert(error);
  }
}

function* fetchUserInfoSaga(action) {
  try {
    const userInfo = yield call(userApis.fetchUserInfoApi, action.payload);
    yield put(userActions.setUserInfoAction({ ...userInfo, logged: true }));
    yield put(stopLoaderAction());
  } catch (error) {
    errorAlert(error);
    yield put(stopLoaderAction());
  }
}

function* logoutUserSaga() {
  try {
    yield Swal.fire({
      title: `Desea cerrar la sesión?`,
      showDenyButton: true,
      confirmButtonText: `Salir`,
      denyButtonText: `Volver`,
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return await userApis.logoutUserApi();
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        store.dispatch(userActions.resetUserInfoAction());
      }
    });
  } catch (error) {
    errorAlert(error);
  }
}

function* fetchUserLatestOrdersSaga(action) {
  try {
    yield put(startLoaderAction())
    const orders = yield call(
      userApis.fetchUserLatestOrdersApi,
      action.payload
    );
    yield put(userActions.successFetchUserLatestOrdersAction(orders));
    yield put(stopLoaderAction());
  } catch (error) {
    errorAlert(error);
  }
}

function* editUserInfoSaga(action) {
  try {
    const userInfo = { ...action.payload };

    yield call(userApis.updateInfo, userInfo);

    if (action.payload.newPassword) {
      yield call(
        userApis.updatePassword,
        userInfo.password,
        userInfo.newPassword
      );
    }

    delete userInfo.password;
    delete userInfo.newPassword;
    yield put(userActions.setUserInfoAction(userInfo));
    Swal.fire("Éxito", "Información actualizada", "success");
  } catch (error) {
    errorAlert(error);
  }
}

function* deleteUserSaga() {
  try {
    yield requestPasswordAlert();
  } catch (error) {
    errorAlert(error);
  }
}

export default function* watcherUser() {
  yield takeLatest(types.USER__START_PASSWORD_RECOVER, recoverPasswordSaga);
  yield takeLatest(types.USER__START_CREATE_NEW_USER, createUserSaga);
  yield takeLatest(types.USER__START_LOGGIN, loginUserSaga);
  yield takeLatest(types.USER__START_FETCH_USER_INFO, fetchUserInfoSaga);
  yield takeLatest(types.USER__LOGOUT, logoutUserSaga);
  yield takeLatest(types.USER__EDIT_INFO, editUserInfoSaga);
  yield takeLatest(types.USER__DELETE_USER, deleteUserSaga);
  yield takeLatest(
    types.USER__START_FETCH_LATEST_ORDERS,
    fetchUserLatestOrdersSaga
  );
}
