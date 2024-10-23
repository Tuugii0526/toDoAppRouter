import { useToDo } from "./ContextProvider";
import { useState } from "react";
export const ToDoCard = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { editItem, deleteItem } = useToDo();
  const [title, setTitle] = useState(task.title);
  return (
    <div className="flex w-full justify-around">
      {isEditing ? (
        <input
         className="ring-1"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            editItem({...task,title:title})
          }}
        />
      ) : (
        <p>{task.title} </p>
      )}
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          editItem({ ...task, done: e.target.checked });
        }}
      />
      {isEditing ? (
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteItem(task.id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};
