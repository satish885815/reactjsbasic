import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    console.log(this);
    this.setState({
      message: "Good Bye",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Event Click</button> */}
        <button onClick={() => this.clickHandler()}>Event Click</button>
        <button onClick={this.clickHandler.bind(this)}>Event Click</button>
      </div>
    );
  }
}

export default EventBind;
