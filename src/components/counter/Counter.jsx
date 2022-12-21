import React from "react";

const Counter = (props) => {

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
};

export default Counter;
