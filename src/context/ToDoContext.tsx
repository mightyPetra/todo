import React, { createContext, useState } from 'react'
// import { nanoid } from 'nanoid'

export interface ToDo {
  id: string;
  title: string;
  description?: string;
  done: boolean;
}

interface ToDoContextProps {
  items: ToDo[]
  addToDoItem: (item: ToDo) => void
}
export const ToDoContext = createContext<ToDoContextProps | undefined>(undefined)

export const ToDoProvider = (props: { children: React.ReactNode }) => {
  const [items, setTodoItems] = useState<ToDo[]>([])

  const addToDoItem = (item: ToDo) => {
    setTodoItems([...items, item])
  }

  const value: ToDoContextProps = {
    items,
    addToDoItem
  }

  return (
    <ToDoContext.Provider value={value}>
      {props.children}
    </ToDoContext.Provider>
  )
}
