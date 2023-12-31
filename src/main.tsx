import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/global.css';
import App from './App';
import { ToDoProvider } from './context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>
);
