import React from 'react';
import './App.css';
import TodoList from './Componentes/TodoList';
function App() {
  return (
    <div className="todo-App">
     <h1>Lista de tarefas</h1>
     <TodoList />
    </div>
  );
}

export default App;
