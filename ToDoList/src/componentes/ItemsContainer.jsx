import { useState } from "react";
import TaskItem from "./TaskItem";

const ItemsContainer = ({
  taskList,
  toggleTaskSelection,
  selectedTasks,
  deleteSelectedTasks,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex justify-center gap-2 px-2">
        <input
          type="checkbox"
          name="borderInput"
          id="borderButton"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="hover:cursor-pointer"
        />
        <label
          className="font-semibold hover:cursor-pointer"
          htmlFor="borderButton"
        >
          Add Border
        </label>
      </div>
      {taskList.map((t, idx) => (
        <TaskItem
          task={t}
          toggleTaskSelection={toggleTaskSelection}
          isSelected={selectedTasks.includes(t)}
          key={`taskItem-${idx}`}
          showBorder={checked}
        />
      ))}
      <button
        className="sm:flex sm:w-1/3 justify-center px-2 py-2 mt-2 bg-zinc-500 text-white font-bold rounded-md hover:bg-red-700"
        onClick={deleteSelectedTasks}
      >
        Delete
      </button>
    </div>
  );
};

export default ItemsContainer;
