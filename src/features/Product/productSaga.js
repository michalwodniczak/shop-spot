import { call, put, takeLatest, select } from "redux-saga/effects";
import { getProduct } from "../../getProduct";
import { selectProductId, setProductId } from "./productSlice";

function* fetchProductHandler() {
  try {
    const productId = yield select(selectProductId);
    const product = yield call(getProduct);
    yield put(setProductId(productId));
  } catch {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchProduct() {
  yield takeLatest(setProductId.type, fetchProductHandler);
}
