import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [
    { id: 1, title: "Todo 1", status: "À faire", label: "Quotidien" },
    { id: 2, title: "Todo 2", status: "En cours", label: "Occasionnel" },
    { id: 3, title: "Todo 3", status: "Terminée", label: "Court terme" },
  ];

  const handleDelete = (id: number) => {
    console.log(`Delete todo with ID ${id}`);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default App;
