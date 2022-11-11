import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };
    styles = {
        fontSize: 15,
        fontWeight: "bold",
    };
    render() {
        return (
            // This creates an extra div
            // <div>
            //     <span>{this.state.count}</span>
            //     <button>Increment</button>
            // </div>

            // To Skip having extra div we can use
            <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "null" : count;
    }
}

export default Counter;
