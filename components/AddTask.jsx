import { useToDo } from "./ContextProvider"
import { useState } from "react"
export const AddTask=()=>{
const {addItem}=useToDo()
const [title,setTitle]=useState('')
return (
    <div className="w-[200px]  flex">
        <input type="text" className="ring-1" placeholder="Add a task" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button onClick={()=>{
            addItem(title)
        }}>Add</button>
    </div>
)
}