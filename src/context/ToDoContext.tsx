import React, { createContext } from 'react'
// import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

export const ToDoContext = createContext<undefined>(undefined)

export const ToDoProvider = (props: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={undefined}>
      {props.children}
    </TodoContext.Provider>
  )
}
