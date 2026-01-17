import { motion } from 'framer-motion';
import { useTasks } from '@/hooks/useTasks';
import TaskForm from '@/components/TaskForm';
import TaskFilters from '@/components/TaskFilters';
import TaskList from '@/components/TaskList';
import TaskCounter from '@/components/TaskCounter';
import { CheckCircle2 } from 'lucide-react';

const Index = () => {
  const {
    tasks,
    allTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    remainingCount,
    completedCount,
  } = useTasks();

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
            Mes Tâches
          </h1>
          <p className="text-muted-foreground text-lg">
            Organisez votre journée, une tâche à la fois
          </p>
        </motion.header>

        {/* Main content */}
        <div className="flex flex-col gap-6">
          {/* Task Form */}
          <TaskForm onAddTask={addTask} />

          {/* Filters */}
          <TaskFilters
            filter={filter}
            onFilterChange={setFilter}
            allCount={allTasks.length}
            activeCount={remainingCount}
            completedCount={completedCount}
          />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />

          {/* Counter */}
          {allTasks.length > 0 && (
            <TaskCounter
              remaining={remainingCount}
              completed={completedCount}
            />
          )}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          Les données sont sauvegardées localement dans votre navigateur
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
