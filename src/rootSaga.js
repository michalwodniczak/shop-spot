import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./features/Products/productsSaga";
import { watchFetchProduct } from "./features/Product/productSaga";
import { watchFetchCartItem } from "./features/Cart/cartSaga";
import { watchFetchItems } from "./features/Category/categorySaga";

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
        watchFetchProduct(),
        watchFetchCartItem(),
        watchFetchItems(),
    ])
}