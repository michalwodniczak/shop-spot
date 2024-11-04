import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../getProducts";
import { fetchProducts, fetchProductsSuccess } from "./productsSlice";

function* fetchProductsHandler() {
  try {
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProducts.type, fetchProductsHandler);
}
