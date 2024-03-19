import React, {Component} from "react";

export default class UpdateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favFood: "burger"
        }
    }

    changeFavFood = () => {
        this.setState({favFood: "Pizza"})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.favFood !== nextState.favFood;
    }

    render() {
        return(
            <div>
                <div>
                    <h3>My Favorite Food is {this.state.favFood}</h3>
                    <button onClick={this.changeFavFood}>Change Food</button>
                </div>
            </div>
        )
    }
}