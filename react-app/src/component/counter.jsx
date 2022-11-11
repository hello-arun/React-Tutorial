import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
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
        this.setState({ value: this.state.value + 1 });
    };

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "null" : count;
    }
}

export default Counter;
