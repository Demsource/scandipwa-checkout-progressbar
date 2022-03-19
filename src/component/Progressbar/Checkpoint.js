import React, { Component } from "react";

export default class Checkpoint extends Component {
  render() {
    const { isPassed, isReached, stepCount, stepName } = this.props;

    return (
      <div className={`checkpoint ${isReached ? "checkpoint_reached" : ""}`}>
        {isPassed ? <div className="tick"></div> : stepCount}
        <span className="step-name">{stepName}</span>
      </div>
    );
  }
}
