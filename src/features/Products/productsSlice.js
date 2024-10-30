import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    fetchProducts: () => {},
  },
});

export const { fetchProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
