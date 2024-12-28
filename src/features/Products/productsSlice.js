import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "N/A",
  },
  reducers: {
    fetchProducts: () => {},

    fetchProductsSuccess: (state, { payload: items }) => {
      state.items = items;
    },

    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

const selectProducts = (state) => state.products;
export const selectItems = (state) => selectProducts(state).items;
export const selectStatus = (state) => selectProducts(state).status;
export const { fetchProducts, fetchProductsSuccess, setStatus } =
  productsSlice.actions;

export default productsSlice.reducer;
