// Sass
const css = require('./app.scss');

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import DateHeader from './components/date_header.js';
import TodoInput from './components/input.js';
import TodoList from './components/todo_list.js';
import RemoveBtn from './components/remove_btn.js'

// App class
class App extends React.Component {
    constructor (props) {
        super(props);

        // Set initial state
        this.state = {
            todos: [
                {value: 'Simple todo list', check: false},
                {value: 'React', check: false},
                {value: 'Check all to remove', check: true},
                {value: 'Click me to change text', check: false},
                {value: 101, check: false}
                ],
            selected: null
        };
    }

    // Add todo, update state
    addTodo(newTodo) {
        this.setState({
            todos: this.state.todos.concat(newTodo),
            selected: null
        });
    }

    // Remove todo, update state
    onRemoveAll() {
        this.setState({
            todos: [],
            selected: null
        });
    }

    // Check todo, update state
    onCheckTodo(target) {
        const newTodos = this.state.todos.map((todo) => {
            if (todo === target) {
                todo.check = !todo.check;
            }
            return todo;
        });
        this.setState({
            todos: newTodos,
            selected: null
        });
    }

    // Select todo, update state
    onSelectTodo(target) {
        this.setState({
            todos: this.state.todos,
            selected: target
        });
    }

    // Change todo, update state
    onChangeTodo(change) {
        const newTodos = this.state.todos.map((todo) => {
            if (todo === this.state.selected) {
                todo.value = change;
            }
            return todo;
        });
        this.setState({
            todos: newTodos,
            selected: null
        });
    }

    // Cancel change todo, reset selected todo, update state
    onCancelChange() {
        this.setState({
            todos: this.state.todos,
            selected: null
        });
    }

    // Render
    render() {
        const checks = this.state.todos.filter((todo) => todo.check);

        return (
            <div className="wrapper">
                <DateHeader />
                { this.state.todos.length > 0 ? <TodoList 
                    todos={this.state.todos} 
                    onCheckTodo={ todo => {this.onCheckTodo(todo)}}
                    onSelectTodo={ todo => {this.onSelectTodo(todo)}}
                /> : null}

                {checks.length === this.state.todos.length && this.state.todos.length > 0 ? 
                    <RemoveBtn 
                        onRemoveAll={() => this.onRemoveAll()}
                    />
                    : 
                    <TodoInput 
                        selected={this.state.selected}
                        addTodo={ newTodo => {this.addTodo(newTodo)}}
                        onChangeTodo={(change) => this.onChangeTodo(change)}
                        onCancelChange={() => this.onCancelChange()}
                    />
                }                
            </div>
        );
    }
}


// Render app to the DOM
ReactDOM.render(<App />, document.querySelector('#app'));