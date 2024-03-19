import React, { Component } from "react";
import TodoService from "../services/todo-service";

export default class TodosList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentTodo: null,
            currentIndex: -1
        };

        this.retrieveTodos = this.retrieveTodos.bind(this);
    }

    componentDidMount() {
        this.retrieveTodos();
    }

    retrieveTodos() {
        TodoService.getAllTodos()
        .then(response => {
            this.setState({
                todos: response.data
            });
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <div>
                    <table>
                        <thead>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </thead>
                        <tbody>
                            {this.state.todos ? this.state.todos.map((item, index) => (
                                 <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed}</td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}