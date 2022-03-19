import React, { Component } from "react";

export default class Bar extends Component {
  render() {
    return (
      <div class="bar">
        <div
          className={`fill ${this.props.isReached ? "fill_full" : ""}`}
        ></div>
      </div>
    );
  }
}
