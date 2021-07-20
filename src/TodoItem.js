import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleRemove() {
        this.props.removeTodo(this.props.id);
    };

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    };

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleToggle() {
        this.props.toggleTodo(this.props.id)
    };

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate} className="Todo-editForm">
                        <input type="text" name="task" value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleEdit}>
                            <i className="fas fa-pen" />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div >
            )
        };
        return result;
    };
};


export default TodoItem;