import React from 'react';
import { Toaster } from 'react-hot-toast'
import './App.css';
import './styles.css';
import { AddTodoItem } from './components/AddTodoItem'

function App() {
  return (
    <div className="App">
      <div class="heading">
        <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg">
        <h1 class="heading__title">To-Do List</h1>
      </div>
      <Toaster position="top-center"/>
      <AddTodoItem />
    </div>
  );
}

export default App;
