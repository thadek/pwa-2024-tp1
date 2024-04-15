
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import { Task } from "../../types/Task";


export default function AddTaskModal({ setShowModal, addTask }:
  Readonly<{ setShowModal: (show: boolean) => void, addTask: (task: Task) => void }>) {


  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")



  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: title,
      description: description,
      completed: false,
    };

    addTask(newTask);
    setShowModal(false);
  };



  return (
    <>
      <form onSubmit={handleAddTask}
        className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >


        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-900 outline-none focus:outline-none">
            {/*header*/}


            <div className="relative flex flex-row justify-between	 bg-blue-950 p-4 rounded-t">
              <h3 className="text-2xl font-semibold">
                Agregar tarea
              </h3>
              <button
                className=" background-transparent font-bold rounded-full border-none text-sm outline-none hover:text-red-500  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

            </div>




            <div className="flex flex-col flex-auto text-end p-5 gap-3  text-black">
              {/* Inputs para crear una nueva tarea */}
              <label className="block">
              <input
                type="text"
                className="w-full p-3 rounded-lg peer  "
                placeholder="Título"
                value={title}
                
                onChange={handleTitleChange}
                required
                
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                El título es requerido
              </p>
              </label>
              <label className="block">
              <textarea
                className="w-full p-3 peer rounded-lg "
                placeholder="Descripción"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
              <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
               La descripción es requerida
              </p>
              </label>

            </div>

            <div className="flex items-center justify-end gap-3 p-5 ">

              <button
                className=" text-emerald-500 flex gap-2   group  text-sm px-6 py-2  border-2 border-emerald-500 hover:bg-emerald-950 rounded-md   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >

                <p className="">Agregar tarea</p>
                <ArrowRightIcon className="h-5 group-hover:translate-x-2 ease-in duration-150 " />


              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}