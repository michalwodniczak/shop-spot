import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    id: "",
    description: [],
  },
  reducers: {
    setProductId: (state, { payload: id }) => {
      state.id = id;
    },
    fetchProduct: () => {},
    fetchProductSucces: (state, { payload: description }) => {
      state.description = description;
    },
  },
});

export const selectProduct = (state) => state.product;
export const { setProductId, fetchProduct, fetchProductSucces } =
  productSlice.actions;
export const selectProductId = (state) => selectProduct(state).id;

export default productSlice.reducer;
