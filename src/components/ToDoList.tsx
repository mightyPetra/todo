import { useToDo } from '@/context'
import { ToDoItem } from './ToDoItem.tsx'
import { Button, List, ListDivider, ListItem, Typography } from '@mui/joy'

export const ToDoList = () => {
  const { todos, deleteCompletedToDos } = useToDo()

  const renderEmptyToDoList = <>
    <ListItem className={"self-center"}>🦄 You have nothing to do!</ListItem>
    <ListDivider inset="context"/>
  </>


  const renderToDoList = todos.map(todo => (<ToDoItem key={todo.id} todo={todo}/>))
  const notDoneToDos = todos.filter((t) => !t.done)
  const doneToDos = todos.filter((t) => t.done)

  return <List variant="outlined" sx={{ borderRadius: 'sm' }}>
    {todos.length ? renderToDoList : renderEmptyToDoList}
    <div className={'grid grid-cols-3 ml-4 mr-1 content-center text-xs'}>
      <Typography className={'place-self-left content-center'} level={'body-xs'}>
        {notDoneToDos.length} items left
      </Typography>
      <div></div>
      <Button className={'place-self-end '}
              disabled={!doneToDos.length} variant={'plain'} size={'sm'}
              sx={{ fontSize: 'xs', color: 'gray' }}
              onClick={deleteCompletedToDos}>
        Clear Completed
      </Button>
    </div>
  </List>
}