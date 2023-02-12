import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello World</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default Counter;
