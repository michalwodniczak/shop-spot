import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
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

const selectProduct = (state) => state.product;
export const selectDescription = (state) => selectProduct(state).description;

export const { setProductId, fetchProduct, fetchProductSucces } =
  productSlice.actions;

export default productSlice.reducer;
