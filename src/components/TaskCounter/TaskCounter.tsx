import { Task } from "../../types/Task";

const TaskCounter = ({tasks}:{tasks:Task[]}) => {
  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="flex flex-col items-center justify-between rounded-lg gap-2 p-2 bg-white text-black border-2 border-blue-400">
      <p>Tareas totales: {totalTasks}</p>
      <p>Tareas completadas: {completedTasks}</p>
      <p>Tareas restantes: {remainingTasks}</p>
    </div>
  );
};

export default TaskCounter;