import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!task.trim()) return;

    if (editId !== null) {
      setTodos(todos.map(todo =>
        todo.id === editId ? { ...todo, text: task } : todo
      ));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task }]);
    }

    setTask('');
  };

  const handleEdit = (id) => {
    const todo = todos.find(t => t.id === id);
    setTask(todo.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <h1>Todo List</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAdd}>
            {editId !== null ? 'Update' : 'Add'}
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
