import { ToDo, useToDo } from '@/context'
import { motion } from 'framer-motion'
import { Checkbox } from '@/components/ui/checkbox'
// import cn from 'classnames'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils.ts'

// single item
export const ToDoItem = (props: { todo: ToDo }) => {
  const { todo } = props
  // const [editingKey, setEditingKey] = useState<string | null>(null)
  const  { updateToDoStatus } = useToDo()

  useEffect(() => {

  }, [todo])

  const handleStatusUpdate = (id: string) => {
    updateToDoStatus(id)
    console.info(todo)
    toast.success(!todo.done ? 'Good job!' : 'Let\'s give it another try :D')
  }

  return (
    <motion.li layout key = {todo.id} className={ cn( 'p-1.5', todo.done && 'bg-opacity-50 text-zinc-500')}>
        <div className="flex items-center space-x-2 rounded-md border p-4">
        <Checkbox onClick={() => handleStatusUpdate(todo.id)}/>
        <label className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <h4 style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.title}
          </h4>
        </label>
        </div>
    </motion.li>
  )
}