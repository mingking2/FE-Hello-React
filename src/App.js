//import MyComponent from './MyComponent';
import React from "react";
import Timer from "./Timer.js";
import Counter from "./Counter.js";
import Say from "./Say.js";
import EventPractice from "./EventPractice.js";
import ValidationSample from "./ValidationSample.js";

const App = () => {
  return (
    <div className="App">
      <h1>Timer App</h1>
      <Timer />
      <Counter />
      <Say />
      <EventPractice />
      <ValidationSample />
    </div>
  );
};

export default App;
