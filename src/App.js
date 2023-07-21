import { Component } from "react";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.ScrollBottom()}>
          맨 밑으로
        </button>
      </div>
      
    );
  }
}

export default App;