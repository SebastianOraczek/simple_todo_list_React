import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    };

    createTodo(newTodo) {
        this.setState(old => ({
            todos: [...old.todos, newTodo]
        }));
    };

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    updateTodo(id, updatedTask) {
        const updatedTodo = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            };
            return todo;
        });
        this.setState({ todos: updatedTodo });
    };

    toggleCompletion(id) {
        const updatedTodo = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            };
            return todo;
        });
        this.setState({ todos: updatedTodo });
    };

    render() {
        const todos = this.state.todos.map(todo => (
            <TodoItem
                task={todo.task}
                key={todo.id} id={todo.id}
                completed={todo.completed}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleCompletion}
            />
        ));

        return (
            <div className="TodoList">
                <h1>React Todo List</h1>
                <ul>
                    {todos}
                </ul>
                <TodoForm createTodo={this.createTodo} />
            </div>
        )
    }
};

export default TodoList;