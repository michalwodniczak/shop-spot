import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    description: [],
    cart: [],
  },
  reducers: {
    setProductId: (state, { payload: id }) => {
      state.id = id;
    },

    fetchProduct: () => {},

    fetchProductSucces: (state, { payload: description }) => {
      state.description = description;
    },

    addToCart: (state, { payload: product }) => {
     if(!product?.id) return;
      const isInCart = state.cart.some((item) => item.id === product.id);
      if(!isInCart){
        state.cart.push(product)
      }
      },
    },
});

const selectProduct = (state) => state.product;
export const selectDescription = (state) => selectProduct(state).description;
export const selectCart = (state) => selectProduct(state).cart;

export const { setProductId, fetchProduct, fetchProductSucces, addToCart } =
  productSlice.actions;

export default productSlice.reducer;
