import { useContext } from 'react'
import { ToDoContext } from './ToDoContext'

// custom hook
export const useToDo = () => {
  const context = useContext(ToDoContext)

  if (!context) {
    throw new Error('useToDo must be used within a ToDoProvider')
  }

  return context
}