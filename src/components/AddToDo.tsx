import React, { useEffect, useRef, useState } from 'react'
import { ToDoInput } from './ToDoInput'
import { ToDo, useToDo } from '../context'
import toast from 'react-hot-toast'
export const AddToDo = () => {

  const [todoItem, setTodoItem] = useState<ToDo | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const  { addToDoItem } = useToDo()

  //focus on input element
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus()
    }
  }, [])

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem({
      id: event.target.value,
      title: event.target.value,
      done: false
    })
  }

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault() // prevents page reload
    if (todoItem && todoItem?.title !== ''){
      addToDoItem(todoItem)
      setTodoItem(null)
      toast.success('Item added!')
    } else {
      toast.error('You need to add a title first!')
    }
  }

  return (
    <form onSubmit={handleAddItem}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <ToDoInput
          ref={inputRef}
          // value={todoItem?.title}
          onChange={onInput}
          type={'text'}
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder={'I want to....'}
        />
        <button
          type={'submit'}
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Add
        </button>
      </div>
    </form>
  )

}