import React from "react";

function DecrementButton(props) {
  const { amount, onDecrement } = props;
  return (
    <button onClick={() => onDecrement(amount)}>Decrement by {amount}</button>
  );
}

export default DecrementButton;
