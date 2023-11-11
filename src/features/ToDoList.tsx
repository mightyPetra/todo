import { useToDo } from '@/context'
import { Ghost } from 'react-kawaii'
import { ToDoItem } from '@/features/ToDoItem.tsx'
import { motion } from 'framer-motion'

export const ToDoList = () => {
  const { todos } = useToDo()

  if (!todos.length) {
    return (
      <div className="rounded-md border m-auto max-w-lg p-5">
        <h1 className="flex items-center flex-col gap-5">
          <Ghost size={50} mood="blissful" color="white"/>
          You have nothing to do!
        </h1>
      </div>)
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
      <div className="w-full max-w-lg divide-y divide-layer-3">
        <motion.ul>
          {todos.map(todo => (<ToDoItem key={todo.id} todo={todo}/>))}
        </motion.ul>
        </div>
      </div>
      )
    }