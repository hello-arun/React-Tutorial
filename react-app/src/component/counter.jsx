import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    // To Bind Event Handeler
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "null" : count;
    }
}

export default Counter;
