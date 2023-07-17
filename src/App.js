//import MyComponent from './MyComponent';
import React from "react";
import Timer from "./Timer.js";
import Counter from "./Counter.js";
import Say from "./Say.js";

const App = () => {
  return (
    <div className="App">
      <h1>Timer App</h1>
      <Timer />
      <Counter />
      <Say />
    </div>
  );
};

export default App;
