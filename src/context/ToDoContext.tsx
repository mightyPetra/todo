import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

export interface ToDo {
  id: string;
  title: string;
  description?: string;
  done: boolean;
}

interface ToDoContextProps {
  todos: ToDo[]
  addToDo: (title: string) => void
  deleteToDo: (id: string) => void
  deleteCompletedToDos: () => void
  editToDo: (id: string, title: string) => void
  updateToDoStatus: (id: string) => void
}

export const ToDoContext = createContext<ToDoContextProps | undefined>(undefined)

export const ToDoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ToDo[]>([])


  const addToDo = (title: string) => {
    const todo = { id: nanoid(), title: title, done: false }
    setTodos([...todos, todo])
  }

  const deleteToDo = (id: string) => {
    setTodos(todos => todos.filter(todo => todo.id != id))
  }

  const deleteCompletedToDos = () => {
    setTodos(todos => todos.filter(todo => !todo.done))
  }

  const editToDo = (id: string, title: string) => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title, done: false }
        }
        return todo
      })
    })
  }

  const updateToDoStatus = (id: string) => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    })

  }

  const value: ToDoContextProps = {
    todos: todos,
    addToDo,
    deleteToDo,
    deleteCompletedToDos,
    editToDo,
    updateToDoStatus
  }

  return (
    <ToDoContext.Provider value={value}>
      {props.children}
    </ToDoContext.Provider>
  )
}
