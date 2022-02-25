import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
  };

  styles = {
    fontSize: 50,
    fonWeight: "bold",
  };

  render() {
      let classes="badge m-2 bg-"
      classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}
export default Counter;
