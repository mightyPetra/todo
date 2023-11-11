import { Toaster } from 'sonner'
import { AddToDo, ToDoList } from './features'

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
