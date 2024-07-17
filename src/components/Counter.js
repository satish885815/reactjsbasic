import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback", this.state.count);
    //   }
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  handleIncrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleIncrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
