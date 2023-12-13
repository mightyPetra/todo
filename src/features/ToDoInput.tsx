import { forwardRef } from 'react'
import { Input, InputProps } from '@mui/joy'


export const ToDoInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {...properties}, ref
  ) => {
  return (<Input ref={ref} {...properties}/>)
})