import React, { Component } from "react";
import ComponentD from "./ComponentD";
import { UserConsumer } from "./userContex";

class ComponentC extends Component {
  static contextType = UserConsumer;
  render() {
    const user = this.context;
    return (
      <div>
        <h1>{user}</h1>
        <ComponentD />
      </div>
    );
  }
}

export default ComponentC;
