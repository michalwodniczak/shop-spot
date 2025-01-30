import { call, takeEvery, select } from "redux-saga/effects";
import { selectCart, addToCart, removeFromCart } from "./cartSlice";
import { saveItemInLocalStorage } from "./getItem";

function* saveItemInLocalStorageHandler() {
  const cart = yield select(selectCart);
  yield call(saveItemInLocalStorage, cart);
}

export function* watchFetchCartItem() {
  yield takeEvery(
    [addToCart.type, removeFromCart.type],
    saveItemInLocalStorageHandler
  );
}
