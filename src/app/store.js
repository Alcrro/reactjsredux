//! CREATE A REDUX STORE
//import "configureStore" from "@reduxjs/toolkit"
//Q:	What is "configureStore"?
//A: 	Wraps "createStore" to provide simplified configuration options and good defaults.
//		It  can automatically combine your slice reducers, add whatever Redux middleware
//		you supply, includes "redux-thunk" by default, and enables use o f the Redux DevTools Extension
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import itemReducer from "../features/addToCart/addItems";
import addToCartReducer from "../features/addToCart/addToCart";
//Create an empty Redux store and exporting it
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    item: itemReducer,
    addToCart: addToCartReducer,
  },
});
