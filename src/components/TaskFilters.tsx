import { motion } from 'framer-motion';
import { FilterType } from '@/types/task';

interface TaskFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  allCount: number;
  activeCount: number;
  completedCount: number;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'Toutes' },
  { key: 'active', label: 'En cours' },
  { key: 'completed', label: 'Terminées' },
];

const TaskFilters = ({
  filter,
  onFilterChange,
  allCount,
  activeCount,
  completedCount,
}: TaskFiltersProps) => {
  const getCounts = (key: FilterType) => {
    switch (key) {
      case 'all': return allCount;
      case 'active': return activeCount;
      case 'completed': return completedCount;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex gap-2 p-1 bg-secondary/50 rounded-lg"
    >
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`relative flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
            filter === key
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {filter === key && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary rounded-md"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              filter === key 
                ? 'bg-primary-foreground/20' 
                : 'bg-muted'
            }`}>
              {getCounts(key)}
            </span>
          </span>
        </button>
      ))}
    </motion.div>
  );
};

export default TaskFilters;
