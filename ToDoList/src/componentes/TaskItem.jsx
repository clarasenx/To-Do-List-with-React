const TaskItem = ({
  task,
  toggleTaskSelection,
  isSelected,
}) => {
  return (
    <div className="flex w-full sm:px-6 text-wrap">
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
