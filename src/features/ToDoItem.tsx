import { ToDo, useToDo } from '@/context'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Box, ButtonGroup, Checkbox, IconButton, Input, Sheet } from '@mui/joy'
import { DeleteOutline, EditOutlined, SaveOutlined } from '@mui/icons-material'

export const ToDoItem = (props: { todo: ToDo }) => {
  const { todo } = props
  const { updateToDoStatus, editToDo, deleteToDo } = useToDo()

  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [toDoTitle, setToDoTitle] = useState<string>('')

  const editInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingKey != null && editInputRef.current) {
      editInputRef.current.focus()
    }
  }, [editingKey])

  const handleStatusUpdate = (id: string) => {
    updateToDoStatus(id)
    toast.success(!todo.done ? 'Good job!' : 'Let\'s give it another try :D')
  }

  const handleEdit = (id: string, updatedTitle: string) => {
    setEditingKey(id)
    setToDoTitle(updatedTitle)
    if (editInputRef.current) {
      editInputRef.current.focus()
    }
  }

  const handleUpdate = (id: string) => {
    if (toDoTitle.trim() !== '') {
      editToDo(id, toDoTitle)
      setEditingKey(null)
      setToDoTitle('')
      toast.success('ToDo updated successfully!')
    } else {
      toast.error('ToDo field cannot be empty!')
    }
  }

  const handleDelete = (id: string) => {
    deleteToDo(id)
    toast.success('ToDo deleted successfully!')
  }

  const renderToDoEditInput =
    (<>
        <div>
          <Input
            ref={editInputRef}
            type={'text'}
            value={toDoTitle}
            onChange={e => setToDoTitle(e.target.value)}/>
        </div>
        <div>
          <IconButton onClick={() => handleUpdate(todo.id)} size="sm"><SaveOutlined /></IconButton>
        </div>
      </>
)

  const renderToDoItem =
    (<>
      <Checkbox onClick={() => handleStatusUpdate(todo.id)} label={todo.title} sx={{ textDecoration: todo.done ? 'line-through' : 'none'}}/>
      <ButtonGroup variant="plain" size={'sm'}>
        <IconButton onClick={() => handleEdit(todo.id, todo.title)}>
          <EditOutlined fontSize={'small'}/>
        </IconButton>
        <IconButton onClick={() => handleDelete(todo.id)}>
          <DeleteOutline fontSize={'small'}/>
        </IconButton>
      </ButtonGroup>
    </>)

  return (
    <li key={todo.id} className={cn(todo.done && 'bg-opacity-50 text-zinc-500')}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > div': { p: 2, borderRadius: 'md' }
      }}>
        <Sheet variant="outlined">
          {editingKey === todo.id ? renderToDoEditInput : renderToDoItem}
        </Sheet>
      </Box>
    </li>
  )
}