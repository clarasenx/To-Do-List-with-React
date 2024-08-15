const TaskItem = ({
  task,
  toggleTaskSelection,
  isSelected,
  showBorder
}) => {
  return (
    <div className={`flex w-full sm:px-6  py-2 text-wrap ${showBorder ? "border-b border-zinc-500" : ""}`}>
      <input
        type="checkbox"
        checked={isSelected}
        className='mr-2 sm:mr-4'
        onChange={() => toggleTaskSelection(task)}
      />
      <p className="w-2/3 text-lg break-words">{task}</p>
    </div>
  );
};

export default TaskItem;
