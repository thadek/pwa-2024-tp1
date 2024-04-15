import TaskCard from "../TaskCard/TaskCard";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../types/Task";

import { useState } from "react";

import Skeleton from "../Skeleton/Skeleton";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Buttons/Button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Title from "../Title/Title";





export default function TasksContainer() {

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const { tasks, markTaskComplete, deleteTask, isLoading, addTask } = useTasks();


  



  const handleTaskComplete = (task: Task) => {
    markTaskComplete(task);
  };

  const handleTaskDelete = (task: Task) => {
    deleteTask(task);
  };



  if (isLoading) return <Skeleton />;

  const filteredTasks = tasks.filter((task) => {
    return task.description.toLowerCase().includes(search.toLowerCase());
  });


  return (<>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="flex flex-col gap-3  p-10 rounded items-center justify-center">



        <Title title="Grupo 12 PWA - TodoList" />
      
      <div className="flex gap-3 w-full">
      <SearchBar setSearch={setSearch}  />
        <Button className="w-12 p-2 text-blue-500 font-bold " onClick={() => setShowModal(true)}><PlusIcon/></Button>
      </div>
      
        
        {
          tasks.length === 0 ?
            <span className="  text-yellow-500 rounded p-3 w-full text-center">
              <p className={` text-xl prototype`}>No hay tareas cargadas, ya podes descansar </p>
            </span>
            :
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onTaskComplete={handleTaskComplete}
                onTaskDelete={handleTaskDelete}
              />
            ))
        }


        {
           tasks.length>0 && filteredTasks.length === 0 &&
           <span className="  text-red-500 rounded p-3 w-full text-center">
             <p className={` text-xl prototype`}>No se encontraron tareas con el valor {search} </p>
           </span>
        }


        

      </div>

      {showModal && (<AddTaskModal addTask={addTask} setShowModal={setShowModal} />)}


    </main>


  </>
  );

}