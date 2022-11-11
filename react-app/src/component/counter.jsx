import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        tags: ["Arun", "Seema", "Jhinu"],
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <React.Fragment>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }

    // To Bind Event Handeler
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "null" : count;
    }
}

export default Counter;
