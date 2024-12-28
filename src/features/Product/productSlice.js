import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    description: [],
    status: "N/A",
  },
  reducers: {
    fetchProduct: () => {},

    fetchProductSucces: (state, { payload: description }) => {
      state.description = description;
    },
    setProductId: (state, { payload: id }) => {
      state.id = id;
    },

    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

const selectProduct = (state) => state.product;
export const selectDescription = (state) => selectProduct(state).description;
export const selectStatus = (state) => selectProduct(state).status;

export const { setProductId, fetchProduct, fetchProductSucces, setStatus } =
  productSlice.actions;

export default productSlice.reducer;
