//! CREATE A REDUX STATE SLICE
//Import "createSlice" from "@reduxjs/toolkit"
//Import "createAction" from "@reduxjs/toolkit"
import { createAction, createSlice } from "@reduxjs/toolkit";

// The initial state value for this slice of state
const initialState = {
  btnValues: ["C", "+-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="],
  value: 0,
};

//Create an action
const increment = createAction("counter/increment");

let action = increment();
action = increment(5);
console.log(action);
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
    // increment: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  //Like reducers, extraReducers can be an object containing Redux case reducer functions.
  //Th keys should be other Redux string action type constants, and "createSlice" will not
  // auto-generate action types or action creators for reducers included in this parameter.

  extraReducers: (builder) => {},
});

//! RETURN VALUE (createSlice)
// {
// 	name: String,
// 	reducer: reducerFunction,
// 	actions: Record<String, actionCreator>,
// 	caseReducers: Record<String,CaseReducer>,
// 	getInitialState: ()=> State
// }

export default counterSlice.reducer;
