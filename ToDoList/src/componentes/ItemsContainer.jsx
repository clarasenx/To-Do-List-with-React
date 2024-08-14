import TaskItem from "./TaskItem";

const ItemsContainer = ({
  taskList,
  toggleTaskSelection,
  selectedTasks,
  deleteSelectedTasks
}) => {
  return (
    <div className="flex flex-col mt-4 gap-2">
      {taskList.map((t, idx) => (
        <TaskItem
          task={t}
          toggleTaskSelection={toggleTaskSelection}
          isSelected={selectedTasks.includes(t)}
          key={`taskItem-${idx}`}
        />
      ))}
        <button
          className="px-4 py-2 mt-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-700"
          onClick={deleteSelectedTasks}
        >
          Delete
        </button>
    </div>
  );
};

export default ItemsContainer;
