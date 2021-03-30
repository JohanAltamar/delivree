import { put, call, takeLatest } from 'redux-saga/effects';
import { failFecthOrderInfoAction, successFecthOrderInfoAction } from '../actions/ordersInfoAction';
import { stopLoaderAction } from '../actions/uiActions';
import { fecthOrderInfoApi } from '../api/ordersInfoApi';
import types from '../types';

function* fetchOrdersInfoSaga(action) {
  try {
    const orderInfo = yield call(fecthOrderInfoApi, action.payload);
    yield put(successFecthOrderInfoAction(orderInfo));
    yield put(stopLoaderAction())
  } catch (error) {
    yield put(failFecthOrderInfoAction(error.message));
  }
}

export default function* watcherOrdersInfo() {
  yield takeLatest(types.ORDERS__FETCH_INFO_START, fetchOrdersInfoSaga);
}