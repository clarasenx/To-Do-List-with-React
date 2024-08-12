const TaskItem = ({ task, removeFromList }) => {
  return (
    <div className="flex justify-between sm:px-6 text-wrap">
      <p className="w-2/3 text-lg break-words">{task}</p>
      <button
        className="px-2 hover:text-red-700 hover:bg-slate-200 font-semibold rounded-md sm:w-1/3"
        onClick={() => removeFromList(task)}
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
