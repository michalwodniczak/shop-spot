import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    fetchProducts: () => {},

    fetchProductsSuccess: (state, { payload: products }) => {
      state.products = products;
    },
  },
});

export const { fetchProducts, fetchProductsSuccess } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;