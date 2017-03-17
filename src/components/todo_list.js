// React
import React from 'react';

// Components
import TodoListItem from './todo_list_item';

// Component
const TodoList = function({ todos, onCheckTodo, onSelectTodo }) {
    // List of todos
    const todoItems = todos.map( (todo, i) => {
        return (
            <TodoListItem 
                key={i + todo.value + i} 
                todo={todo}
                onCheckTodo={onCheckTodo}
                onSelectTodo={onSelectTodo} />
        );
    });

    return (
        <ul className="todo_list">   
            {todoItems}
        </ul>
    );
}

// Export component
export default TodoList;