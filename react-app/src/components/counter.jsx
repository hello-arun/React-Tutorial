import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["Arun", "Varun", "Hello"],
  };

  styles = {
    fontSize: 50,
    fonWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}
export default Counter;
