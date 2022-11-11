import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 1 },
            { id: 3, value: 0 },
            { id: 4, value: 10 },
        ],
    };
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.counters.map((counter) => (
                        <li>
                            <Counter key={counter.id} value={counter.value} />
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Counters;
