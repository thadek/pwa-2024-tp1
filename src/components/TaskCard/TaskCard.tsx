import { Task } from "../../types/Task";
import CheckButton from "../Buttons/CheckButton/CheckButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";


export default function TaskCard({
  task,
  onTaskComplete,
  onTaskDelete,
}: Readonly<{
  task: Task;
  onTaskComplete: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
}>) {


  const { completed, description, title } = task;
  


  return (
    <div
      className={`flex items-center w-full justify-between w p-4 ${completed ? "bg-green-200 border-2 border-green-400" : "bg-blue-200 border-2 border-blue-400"} shadow-md rounded-lg gap-2`}

    >
      <div>
        <h3 className={`text-lg font-semibold ${completed ? "text-green-600" : "text-blue-500"}`}>{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className={`text-sm ${completed ? "text-green-600" : "text-blue-500"}`}>{completed ? "Completada" : "Pendiente"}</p>
      </div>

      <div className="flex gap-2">
        <CheckButton task={task} onTaskClick={onTaskComplete} />
        <DeleteButton task={task} onTaskDelete={onTaskDelete} />
      </div>

    </div>
  );
}
