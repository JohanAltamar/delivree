import { put, call, takeLatest } from "redux-saga/effects";
import * as productsActions from "../actions/productsActions";
import * as productsApi from "../api/productsApi";
import types from "../types";

function* fetchCategoriesSaga() {
  try {
    const categories = yield call(productsApi.fetchCategoriesApi);
    yield put(productsActions.categoriesFetchSuccess(categories));
  } catch (error) {
    yield put(productsActions.startError(error.message));
  }
}

function* fetchProductsByCategorySaga(action) {
  try {
    const products = yield call(
      productsApi.fetchProductsByCategoryApi,
      action.payload
    );
    yield put(productsActions.productsByCategoriesFetchSuccess(products));
  } catch (error) {
    yield put(productsActions.startError(error.message));
  }
}

export default function* watcherProducts() {
  yield takeLatest(types.PRODUCTS__FETCH_CATEGORIES_START, fetchCategoriesSaga);
  yield takeLatest(
    types.PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START,
    fetchProductsByCategorySaga
  );
}
