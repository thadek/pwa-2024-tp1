
import { CheckIcon } from "@heroicons/react/24/outline";
import { Task } from "../../../types/Task";


export default function CheckButton({task, onTaskClick}:Readonly<{
    task: Task;
    onTaskClick: (task: Task) => void;
  }>){
    
    return (
        <button className={`${task.completed? "bg-blue-400" : "bg-blue-500 hover:bg-blue-700" } text-white font-bold py-2 px-4 rounded`}
        onClick={(e) => {
            e.stopPropagation();
            onTaskClick(task);}
        }
        {...task.completed && {hidden: true}}
        >
           <CheckIcon className={'w-5'}/>
        </button>
    )
}