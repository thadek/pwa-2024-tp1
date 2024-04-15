import { Dispatch, SetStateAction } from "react";

export default function SearchBar({setSearch}:{setSearch:Dispatch<SetStateAction<string>>}){
    
    
    const searchTasks = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearch(value);
    }
   
   
    return (
        <div className="flex items-center w-full justify-between  rounded-lg gap-2">
            <input type="text" placeholder="Buscar tarea" onChange={searchTasks} className="w-full outline outline-1 focus:outline-blue-500 p-2 bg-white text-black border-2 border-blue-400  rounded-lg gap-2"/>  
        </div>
    );
}