import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        tags: ["Arun", "Seema", "Jhinu"],
    };
    styles = {
        fontSize: 15,
        fontWeight: "bold",
    };
    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <React.Fragment>
                <span style={this.styles} className={classes}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "null" : count;
    }
}

export default Counter;
