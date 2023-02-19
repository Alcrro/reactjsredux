import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: 0,
  status: "idle",
  error: null,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    increment: (state) => {
      state.item += 1;
    },
  },
});

export const { increment, removeFromCart } = itemSlice.actions;

export default itemSlice.reducer;
