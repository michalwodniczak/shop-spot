import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../getProducts";
import { fetchProducts, fetchProductsSuccess, setStatus } from "./productsSlice";

function* fetchProductsHandler() {
  try {
    yield put(setStatus("loading"));
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
    yield put(setStatus("success"))
  } catch {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProducts.type, fetchProductsHandler);
}
