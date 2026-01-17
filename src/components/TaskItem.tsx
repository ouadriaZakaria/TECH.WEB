import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';
import { Task } from '@/types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`group flex items-center gap-4 p-4 bg-card border border-border rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 ${
        task.completed ? 'opacity-60' : ''
      }`}
    >
      {/* Checkbox */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(task.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          task.completed
            ? 'bg-success border-success'
            : 'border-border hover:border-primary'
        }`}
      >
        {task.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          >
            <Check size={14} className="text-success-foreground" />
          </motion.div>
        )}
      </motion.button>

      {/* Task text */}
      <span
        className={`flex-1 text-foreground transition-all duration-200 ${
          task.completed ? 'line-through text-task-complete' : ''
        }`}
      >
        {task.text}
      </span>

      {/* Delete button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 p-2 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-md hover:bg-destructive/10"
      >
        <Trash2 size={18} />
      </motion.button>
    </motion.div>
  );
};

export default TaskItem;
