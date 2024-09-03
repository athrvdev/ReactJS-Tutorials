import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
