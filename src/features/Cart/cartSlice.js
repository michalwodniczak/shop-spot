import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, { payload: product }) => {
      if (!product?.id) return;
      const isInCart = state.cart.some((item) => item.id === product.id);
      if (!isInCart) {
        state.cart.push(product);
      }
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
