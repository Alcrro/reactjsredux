import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItem: 0,
  status: "idle",
  error: null,
};

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartItem += 1;
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
