import React, { Component, PureComponent } from "react";
import MemoCom from "./MemoCom";
import PureCom from "./PureCom";

export class ParentCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Satish",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Satish" });
    });
  }
  render() {
    console.log(this.state.name, "nd");
    return (
      <div>
        <MemoCom name={this.state.name} />
        <PureCom name={this.state.name} />
      </div>
    );
  }
}

export default ParentCom;
