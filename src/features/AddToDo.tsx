import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ToDoInput } from './ToDoInput'
import { ToDo, useToDo } from '@/context'
import { toast } from 'sonner'
export const AddToDo = () => {

  const [todoItem, setTodoItem] = useState<ToDo | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const  { addToDo } = useToDo()
  const form = useForm()

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
      description: 'I am todo item >:E',
      done: false
    })
  }

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault() // prevents page reload
    if (todoItem && todoItem?.title !== ''){
      addToDo(todoItem)
      setTodoItem(null)
      toast.success('Item added!')
    } else {
      toast.error('You need to add a title first!')
    }
  }

  return (
    <Form {...form} >
      <form onSubmit={handleAddItem} className="justify-center w-full flex max-w-lg gap-2 p-5 m-auto">
        <FormField
          control={form.control}
          name="todo"
          render={() => (
            <FormItem>
              <FormControl>
                <ToDoInput
                  ref={inputRef}
                  value={todoItem?.title}
                  className="w-full px-5 py-2"
                  onChange={onInput}
                  type={'text'}
                  placeholder={'I want to....'}
                />
            </FormControl>
            </FormItem>
          )} />
        <Button type={'submit'}>Add</Button>
      </form>
    </Form>
  )

}