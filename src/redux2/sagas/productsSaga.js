import { put, call, takeLatest } from "redux-saga/effects";
import { categoriesFetchSuccess, startError } from "../actions/productsActions";
import { fetchCategoriesApi } from "../api/productsApi";
import types from "../types";

function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategoriesApi);
    yield put(categoriesFetchSuccess(categories));
  } catch (error) {
    yield put(startError());
  }
}

export default function* watcherProducts() {
  yield takeLatest(types.PRODUCTS__FETCH_CATEGORIES_START, fetchCategoriesSaga);
}
