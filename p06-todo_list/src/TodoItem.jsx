import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.task}
      </span>
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
