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
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        id={counter.id}
                        value={counter.value}
                        onDelete={this.handleDelete}
                    />
                ))}
            </React.Fragment>
        );
    }

    handleDelete = (counterId) => {
        console.log("Event Handler Called", counterId);
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };
}

export default Counters;
