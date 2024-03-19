import React, {Component} from 'react';
import todoService from '../services/todo-service';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: "",
            userId: null,
            completed: false,
            submitted: false
        }

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeUserId = this.onChangeUserId.bind(this)
        this.saveTodo = this.saveTodo.bind(this)
        this.newTodo = this.newTodo.bind(this)
    }

    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    onChangeUserId(e) {
        this.setState({
            userId: e.target.value
        });
    }

    saveTodo() {
        var data = {
            id: this.state.id,
            userId: this.state.userId,
            title: this.state.title
        }

        todoService.createTodo(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                userId: response.data.userId,
                title: response.data.title,
                completed: response.data.completed,

                submitted: true
            });
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    newTodo() {
        this.setState({
          id: null,
          userId: null,
          title: "",
          completed: false,
    
          submitted: false
        });
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.submitted ? (
                        <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newTodo}>
                          Add Todo
                        </button>
                      </div>
                    ): (
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    name="title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                    name="description"
                                />
                            </div>

                            <button onClick={this.saveTutorial} className="btn btn-success">
                            Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}