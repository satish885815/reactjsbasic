import React, { Component } from "react";

export class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welecom Visitors",
    };
  }
  change = () => {
    this.setState({
      message: "Thank you for Suscribe",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.change()}>Suscribe</button>
        <button onClick={this.change}>Suscribe</button>
      </div>
    );
  }
}

export default StateExample;
