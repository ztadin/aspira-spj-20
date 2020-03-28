import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple React example</p>
        <p>Counter Value: {counter}</p>
        <div>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
        <div>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
