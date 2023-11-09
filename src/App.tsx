import React from 'react';
import { Toaster } from 'react-hot-toast'
import { AddToDo, ToDoList } from './components'

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center"/>
      <AddToDo />
      <ToDoList/>
    </div>
  );
}

export default App;
