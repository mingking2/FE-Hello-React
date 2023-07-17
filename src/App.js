//import MyComponent from './MyComponent';
import React from "react";
import Timer from "./Timer.js";
import Counter from "./Counter.js";

const App = () => {
  return (
    <div className="App">
      <h1>Timer App</h1>
      <Timer />
      <Counter />
    </div>
  );
};

export default App;
