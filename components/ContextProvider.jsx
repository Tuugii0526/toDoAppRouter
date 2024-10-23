"use client"

import { createContext,useContext,useReducer,useMemo} from "react"
let nextId=3
const initialTasks=[
    {id:1,title:"wash dish",done:false},
    {id:2,title:"have a dinner",done:true}
]
const ToDoContext=createContext(null)
function tasksReducer(tasks,action){
switch(action.type)
{
    case 'ADD':{
        const {title}=action.payload
        return [...tasks,{id:nextId++,title:title,done:false}]
    }
    case 'DELETE':{
        const {id}=action.payload
        return tasks.filter(task=>task.id!==id)
    }
    case 'EDIT':{
        const {task}=action.payload
        console.log('task is :',task)
        return tasks.map(t=>{
            if(t.id==task.id)
            {
                return task
            }
            return t
        })
    }
}
}
export const ContextProvider=({children})=>{
    const [tasks,dispatch]=useReducer(tasksReducer,initialTasks)
    const addItem=(title)=>{
   dispatch({type:'ADD',payload:{title:title}})
    }
    const deleteItem=(id)=>{
        dispatch({type:'DELETE',payload:{id:id}})
    }
    const editItem=(task)=>{
        dispatch({type:'EDIT',payload:{task:task}})
    }
    const value=useMemo(()=>(
        {
            tasks:tasks,
            deleteItem,
            editItem,
            addItem
        }
    ),[tasks])
return (
    <ToDoContext.Provider value={value}>
    {children}
    </ToDoContext.Provider>
)
}
export function useToDo(){
    const context=useContext(ToDoContext)
    return context
}