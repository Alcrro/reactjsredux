import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./features/addToCart/addItems";
import { addToCart } from "./features/addToCart/addToCart";

const AddItem = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.item.item);
  const addItemes = () => {
    console.log(`AddState: ${item}`);
    dispatch(increment());
  };
  return (
    <div>
      <h1>Items</h1>
      <div className="container container-items">
        <div className="show-item">Stock: {item}</div>
        <div className="add-item">
          <button onClick={addItemes}>Add item</button>
        </div>
      </div>
    </div>
  );
};

const AddToCart = () => {
  const dispatch = useDispatch();
  const addToCarte = useSelector((state) => state.addToCart.cartItem);
  const addToCartItems = () => {
    console.log(`AddToCartState: ${addToCarte}`);
    dispatch(addToCart());
  };

  return (
    <div>
      <AddItem />
      <h1>AddToCart</h1>
      <div className="container container-add-to-cart">
        <div className="show-toCart">Items: {addToCarte}</div>
        <div className="add-toCart">
          <button onClick={addToCartItems}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
