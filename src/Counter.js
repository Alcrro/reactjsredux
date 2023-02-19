import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const displayValues = useSelector((state) => state.counter.btnValues);
  const value = useSelector((state) => state.counter.value);

  {
    displayValues.map((values, i) => {
      <div className="test" key={i}>
        <button>{values}</button>
      </div>;
    });
  }

  return <div>{displayValues}</div>;
};

export default Counter;
