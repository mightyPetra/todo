import React, { useEffect, useRef, useState } from 'react'
import { ToDoInput } from './ToDoInput'
import { useToDo } from '@/context'
import { toast } from 'sonner'
import { Button } from '@mui/joy'
export const AddToDo = () => {

  const [ todoInput, setTodoInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const  { addToDo } = useToDo()

  //focus on input element
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus()
    }
  }, [])

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value)
  }

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault() // prevents page reload
    if (todoInput && todoInput !== ''){
      addToDo(todoInput)
      setTodoInput('')
      toast.success('Item added!')
    } else {
      toast.error('You need to add a title first!')
    }
  }

  return (
    <>
      <form onSubmit={handleAddItem}>
          <ToDoInput
            ref={inputRef}
            value={todoInput}
            onChange={onInput}
            type={'text'}
            placeholder={'I want to....'}
            endDecorator={
              <Button
                variant={"soft"}
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                type={'submit'}
              >+</Button>
            }
          />
      </form>
    </>
  )

}