import { forwardRef, InputHTMLAttributes } from 'react'

export const ToDoInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (
    {...properties}, ref
  ) => {
  return (<input ref={ref} {...properties}/>)
})