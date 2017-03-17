// React
import React from 'react';

// Component
const TodoListItem = function({ todo, onCheckTodo, onSelectTodo }) {
    return (
        <li className={todo.check ? 'todo_list_item checked' : 'todo_list_item'}>
            <span 
                onClick={() => onSelectTodo(todo)}>
                {todo.value}
            </span>
            <i className="material-icons" onClick={() => onCheckTodo(todo)}/>    
        </li>
    );  
}

// Export component
export default TodoListItem;