import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: "green"
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: "blue"})
        }, 5000)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !==this.state.count) {
            alert("Component is updated. Current Count: ", this.state.count)
        }
    }

    render() {
        return(
            <div>
                <div>
                    <p>Counter: {this.state.count}</p>
                    <button onClick={this.handleButtonClick}>Increment Counter</button>
                </div>
                <div>
                    <h3>My favorite color is {this.state.color}</h3>
                </div>
            </div>
            
        )
    }
}