const TaskItem = ({ task, removeFromList }) => {
  return (
    <div className="flex justify-between px-6">
      <p className="text-2xl">{task}</p>
      <button
        className="px-2 hover:text-red-700 hover:bg-slate-200 font-bold rounded-md"
        onClick={() => removeFromList(task)}
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
