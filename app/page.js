"use client"

import { AddTask } from "@/components/AddTask"
import { useToDo } from "@/components/ContextProvider"
import { Products } from "@/components/Products"
export default function Home() {
  const {tasks,deleteItem,editItem,addItem}=useToDo()
  return (
    <div className="w-1/2 h-full flex flex-col justify-center m-auto">
    <AddTask/>
    <Products/>
    </div>
  )}
