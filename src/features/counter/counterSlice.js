//! CREATE A REDUX STATE SLICE
//Import createSlice from "@reactjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

// The initial state value for this slice of state
const initialState = {
  value: 0,
};

//Q: What is "createSlice"?
//A: A function that accepts and object of reducer functions, a slice name,
//   and an initial state value, and automatically generates a slice reducer with corresponding
//   action creators and action types.

// createSlice accepts a single configuration object parameter, with the following options
//Create an initial state value
export const counterSlice = createSlice({
  // A name ,used in action types
  // name : String,
  name: "counter",

  // The initial state for reducer
  initialState,
  // An object of "case reducers". Key names will be used to generate actions
  reducers: {
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the key should be other
    // action types
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementBy, (state, action) => {
  //       // action is inferred correctly here if using TS
  //     })
  //     // you can chain calls, or have separate 'builder.addCase()' lines each time
  //     .addCase(decrement, (state, action) => {})
  //     //you can match a range of action types
  //     .addMatcher(isRejectedAction, (state, action) => {
  //       // 'action' will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
  //     })
  //     // and provide a default case if no other handlers matched
  //     .addDefaultCase((state, action) => {});
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
