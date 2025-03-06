import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../getProducts";
import {
  fetchProducts,
  fetchProductsFail,
  fetchProductsSuccess,
  setStatus,
} from "./productsSlice";

function* fetchProductsHandler() {
  try {
    yield put(setStatus("loading"));
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
    yield put(fetchProductsFail(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProducts.type, fetchProductsHandler);
}
