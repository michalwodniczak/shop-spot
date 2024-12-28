import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchProduct,
  fetchProductSucces,
  setProductId,
  setStatus,
} from "./productSlice";
import { getProduct } from "../../getProduct";

function* fetchProductHandler({ payload: id }) {
  try {
    yield put(setStatus("loading"))
    const product = yield call(getProduct, id);
    yield put(fetchProductSucces(product));
    yield put(setStatus("success"))
    yield put(setProductId(id));
  } catch {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchProduct() {
  yield takeLatest(fetchProduct.type, fetchProductHandler);
}
