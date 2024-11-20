import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    id: "",
    description:[],
  },
  reducers: {
    setProductId: (state, { payload: id }) => {
      state.id = id;
    },
  },
});

export const selectProduct =  state => state.product;
export const { setProductId } = productSlice.actions;
export const selectProductId = (state) => state.product.id;


export default productSlice.reducer;
