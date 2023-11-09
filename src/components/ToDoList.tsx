import { useToDo } from '../context'
import { Ghost } from 'react-kawaii'
export const ToDoList = () => {
  const { items } = useToDo()

  if (!items.length) {
    return (<div className="max-w-lg px-5 m-auto">
      <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
        <Ghost size={50} mood="blissful" color="white" />
        You have nothing to do!
      </h1>
    </div>)
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {items.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}