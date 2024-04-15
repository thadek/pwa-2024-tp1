
import { TrashIcon } from "@heroicons/react/24/outline";
import { Task } from "../../../types/Task";


export default function DeleteButton({task, onTaskDelete}:Readonly<{
    task: Task;
    onTaskDelete: (task: Task) => void;
  }>){
    
    return (
        <button className="bg-red-500 border-2 border-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
            e.stopPropagation();
            onTaskDelete(task);
          }}>
            
           <TrashIcon className={'w-5'}/>
        </button>
    )





}