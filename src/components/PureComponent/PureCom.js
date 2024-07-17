import React, { Component, PureComponent } from "react";

export default class PureCom extends PureComponent {
  render() {
    console.log("pure component");
    return <div>{this.props.name}</div>;
  }
}
