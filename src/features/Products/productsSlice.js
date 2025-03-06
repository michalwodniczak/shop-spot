import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "N/A",
    error: null,
  },
  reducers: {
    fetchProducts: () => {},

    fetchProductsSuccess: (state, { payload: items }) => {
      state.items = items;
    },

    fetchProductsFail: (state, { payload: error }) => {
      state.error = error;
    },

    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

const selectProducts = (state) => state.products;
export const selectItems = (state) => selectProducts(state).items;
export const selectStatus = (state) => selectProducts(state).status;
export const selectError = (state) => selectProducts(state).error;
export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  setStatus,
} = productsSlice.actions;

export default productsSlice.reducer;
