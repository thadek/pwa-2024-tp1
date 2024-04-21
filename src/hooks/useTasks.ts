import { Task } from "../types/Task";
import { useState, useEffect } from "react";


export const useTasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const obtainTasks = () => {
      const tasks = localStorage.getItem("tasks");
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    }; 
    obtainTasks();
    return () => setIsLoading(false);
  }, []);


  const addTask = (task:Task) => {

    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const markTaskComplete = (task: Task) => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        if(!t.completed) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
      }
      return t;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (task: Task) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

 

  return { tasks, setTasks, addTask, markTaskComplete, deleteTask, isLoading };
}

