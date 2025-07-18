import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './styles.css';

function App() {
  return (
    <div className="app">
      <h1>To-Do App with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;