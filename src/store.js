import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "././features/Products/productsSlice";
import productReducer from "././features/Product/productSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
