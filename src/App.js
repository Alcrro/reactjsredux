import React from "react";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Auth from "./Auth";
import AddToCart from "./AddToCart";

const App = () => {
  return (
    <Provider store={store}>
      <Auth />
      <hr />
      <Counter />
      <hr />
      <AddToCart />
    </Provider>
  );
};

export default App;
