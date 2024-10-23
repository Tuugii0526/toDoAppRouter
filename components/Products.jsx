import { useToDo } from "./ContextProvider"
import { ToDoCard } from "./ToDoCard"
export const Products=()=>{
 const {tasks}=useToDo()
 return (
    <div className="w-[200px] h-fit flex flex-col gap-4">
      {tasks.map(task=><ToDoCard task={task}/>)}
    </div>
 )
}