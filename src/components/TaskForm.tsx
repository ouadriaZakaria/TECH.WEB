import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAddTask(text);
    setText('');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="relative flex gap-3"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
        className="flex-1 px-5 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 shadow-soft"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-soft"
      >
        <Plus size={20} />
        <span className="hidden sm:inline">Ajouter</span>
      </motion.button>
    </motion.form>
  );
};

export default TaskForm;
