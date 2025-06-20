import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/Actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
