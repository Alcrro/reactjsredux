import React from "react";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import Counter from "./Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
