import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <li className='todo-item'>
      <span>{todo.text}</span>
      <div className="btn-group">
        <button className="edit-btn" onClick={() => onEdit(todo.id)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
