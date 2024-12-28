import { call, takeEvery, select } from "redux-saga/effects";
import { selectCart } from "./cartSlice";
import { saveItemInLocalStorage } from "./getItem";
import { addToCart, removeFromCart } from "./cartSlice";

function* saveItemInLocalStorageHandler() {
  const cart = yield select(selectCart);
  yield call(saveItemInLocalStorage, cart, 15);
}

export function* watchFetchCartItem() {
  yield takeEvery(
    [addToCart.type, removeFromCart.type],
    saveItemInLocalStorageHandler
  );
}
