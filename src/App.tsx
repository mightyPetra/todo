import React from 'react';
import { Toaster } from 'react-hot-toast'
import './App.css';
import { AddTodoItem } from './components/AddTodoItem'

function App() {
  return (
    <div className="App">
      <Toaster position="top-center"/>
      <AddTodoItem />
    </div>
  );
}

export default App;
