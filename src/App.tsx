import { Toaster } from 'sonner'
import { AddToDo, ToDoList } from './components'

function App() {
  return (
    <>
      {/*<div className="bg-fixed" ="background-image: url('img/john-fowler-RsRTIofe0HE-unsplash.jpg')"></div>*/}
      <div className="grid grid-cols-3 gap-8 min-w-fit">
        <div/>
        <div className="flex-col w-full place-self-center">
          <h1 className={"font-mono text-lg"}>TODO</h1>
          <Toaster position="bottom-center"/>
          <AddToDo/>
          <div className="p-3"></div>
          <ToDoList/>
        </div>
        <div/>
      </div>
    </>
  )
}

export default App
