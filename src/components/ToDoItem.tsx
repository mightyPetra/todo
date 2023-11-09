import { ToDo } from '../context'
import { motion } from 'framer-motion'
import cn from 'classnames'

// single item
export const ToDoItem = (props: { item: ToDo }) => {
  const { item } = props

  return (
    <motion.li
      layout
      className={cn(
        'p-5 rounded-xl bg-zinc-900',
        item.done && 'bg-opacity-50 text-zinc-500',
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration: item.done ? 'line-through' : 'none',
        }}
      >
        {item.title}
      </motion.span>
    </motion.li>
  )

}