import React from "react";

function IncrementButton(props) {
  const { amount, onIncrement } = props;
  return (
    <button onClick={() => onIncrement(amount)}>Increment by {amount}</button>
  );
}

export default IncrementButton;
