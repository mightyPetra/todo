import { forwardRef, InputHTMLAttributes } from 'react'
import { Input } from '@/components/ui/input'


export const ToDoInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (
    {...properties}, ref
  ) => {
  return (<Input ref={ref} {...properties}/>)
})