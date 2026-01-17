import { motion } from 'framer-motion';

interface TaskCounterProps {
  remaining: number;
  completed: number;
}

const TaskCounter = ({ remaining, completed }: TaskCounterProps) => {
  const total = remaining + completed;
  const progress = total > 0 ? (completed / total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col gap-3 p-4 bg-card border border-border rounded-lg shadow-soft"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {remaining === 0 && total > 0
            ? '🎉 Toutes les tâches sont terminées !'
            : `${remaining} tâche${remaining > 1 ? 's' : ''} restante${remaining > 1 ? 's' : ''}`}
        </span>
        <span className="text-muted-foreground font-medium">
          {completed}/{total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-success rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default TaskCounter;
