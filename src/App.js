import React, { useState } from "react";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = value => {
    setCounter(counter + value);
  };

  const decrement = value => {
    setCounter(counter - value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple React example</p>
        <p>Counter Value: {counter}</p>
        <div>
          <IncrementButton amount={1} onIncrement={increment} />
          <DecrementButton amount={1} onDecrement={decrement} />
        </div>
        <div>
          <IncrementButton amount={10} onIncrement={increment} />
          <DecrementButton amount={10} onDecrement={decrement} />
        </div>
        <div>
          <IncrementButton amount={100} onIncrement={increment} />
          <DecrementButton amount={100} onDecrement={decrement} />
        </div>
        <div>
          <IncrementButton amount={1000} onIncrement={increment} />
          <DecrementButton amount={1000} onDecrement={decrement} />
        </div>
      </header>
    </div>
  );
}

export default App;
