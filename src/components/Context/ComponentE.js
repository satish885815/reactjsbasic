import React, { Component } from "react";
import { UserConsumer } from "./userContex";

class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {(user) => {
          return <h1>{user}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentE;
