import { useTasks } from '../../hooks/useTasks';

const TaskCounter: React.FC = () => {
  const { tasks } = useTasks();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="flex-col items-center w-full justify-between rounded-lg gap-2 p-2 bg-white text-black border-2 border-blue-400">
      <p>Tareas totales: {totalTasks}</p>
      <p>Tareas completadas: {completedTasks}</p>
      <p>Tareas restantes: {remainingTasks}</p>
    </div>
  );
};

export default TaskCounter;