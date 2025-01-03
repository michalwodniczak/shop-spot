import { call, put, takeLatest } from "redux-saga/effects";
import { getCategory } from "../../getCategory";
import {
  fetchItemsError,
  fetchItemsSuccess,
  setStatus,
  fetchItems,
} from "./categorySlice";

function* fetchItemsHandler(action) {
  try {
    yield put(setStatus("loading"));
    const products = yield call(getCategory, action.payload);
    yield put(fetchItemsSuccess(products));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
    yield put(fetchItemsError(error.message));
  }
}

export function* watchFetchItems() {
  yield takeLatest(fetchItems.type, fetchItemsHandler);
}
