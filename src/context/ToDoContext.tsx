import React, { createContext, useState } from 'react'
// import { useLocalStorage } from 'usehooks-ts'
// import { nanoid } from 'nanoid'

export interface ToDo {
  id: string;
  title: string;
  description?: string;
  done: boolean;
}

interface ToDoContextProps {
  todos: ToDo[]
  addToDo: (item: ToDo) => void
  deleteToDo: (id: string) => void
  editToDo: (id: string, title: string, description?: string) => void
  updateToDoStatus: (id: string) => void
}
export const ToDoContext = createContext<ToDoContextProps | undefined>(undefined)

export const ToDoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ToDo[]>([])


  const addToDo = (item: ToDo) => {
    setTodos([...todos, item])
  }

  const deleteToDo = (id: string) => {
    setTodos(todos => todos.filter(todo => todo.id === id))
  }

  const editToDo = (id: string, title: string, description?: string) => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title, description }
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
    editToDo,
    updateToDoStatus
  }

  return (
    <ToDoContext.Provider value={value}>
      {props.children}
    </ToDoContext.Provider>
  )
}
