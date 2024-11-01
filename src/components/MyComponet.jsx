import React, { Component } from "react";

class MyComponent extends Component {
  x = 0;

  incrementX = () => {
    this.x += 1;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <p>Value of x: {this.x}</p>
        <button onClick={this.incrementX}>Increment X</button>
      </div>
    );
  }
}

export default MyComponent;
