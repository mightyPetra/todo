import React, { useEffect, useRef, useState } from 'react'
import { ToDoInput } from './ToDoInput'
export const AddTodoItem = () => {

  const [todoItem, setTodoItem] = useState<string>('')
  const [todoItems, setTodoItems] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  //focus on input element
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus()
    }
  }, [])
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(event.target.value)
  }

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault() // prevents page reload
    if (todoItem.trim() !== ''){
      setTodoItems([...todoItems, todoItem])
      setTodoItem('')
    }
  }

  return (
    <form onSubmit={handleAddItem}>
      <div>
        <ToDoInput
          ref={inputRef}
          value={todoItem}
          onChange={onInput}
          type={'text'}
          placeholder={'I want to....'}
        />
        <button
          type={'submit'}
        >
          Add Item
        </button>
      </div>
    </form>
  )

}