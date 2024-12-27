import { call, takeLatest, put, delay } from "redux-saga/effects";
import { fetchProduct, fetchProductSucces, setProductId } from "./productSlice";
import { getProduct } from "../../getProduct";

function* fetchProductHandler({ payload: id }) {
  try {
    const product = yield call(getProduct, id);
    yield put(fetchProductSucces(product));
    yield put(setProductId(id));
  } catch {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchProduct() {
  yield takeLatest(fetchProduct.type, fetchProductHandler);
}
