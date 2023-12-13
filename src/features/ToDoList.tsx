import { useToDo } from '@/context'
import { Ghost } from 'react-kawaii'
import { ToDoItem } from './ToDoItem.tsx'
import { Box, Sheet } from '@mui/joy'

export const ToDoList = () => {
  const { todos } = useToDo()

  if (!todos.length) {
    return (
      <Box sx={{ display: 'flex', gap: 2, '& > div': { p: 2, borderRadius: 'md' } }}>
        <Sheet variant='outlined' className="m-auto">
        <h1 className="flex items-center  gap-5">
          <Ghost size={50} mood="blissful" color="white"/>
          You have nothing to do!
        </h1>
        </Sheet>
      </Box>
    )
  }

  return (
    <ul className="grid max-w-md gap-2 px-5 m-auto">
      {todos.map(todo => (<ToDoItem key={todo.id} todo={todo}/>))}
    </ul>
  )
}