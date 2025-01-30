import { createSlice } from "@reduxjs/toolkit";
import { getItemInLocalStorage } from "./getItem";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getItemInLocalStorage(),
  },
  reducers: {
    addToCart: (state, { payload: product }) => {
      if (!product?.id) return;
      const isInCart = state.cart.some((item) => item.id === product.id);
      if (!isInCart) {
        state.cart.push(product);
      }
    },
    removeFromCart: (state, { payload: product }) => {
      state.cart = state.cart.filter((item) => item.id !== product.id);
    },
    removeAllProductFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart, removeFromCart, removeAllProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
