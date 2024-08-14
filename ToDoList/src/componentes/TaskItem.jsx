const TaskItem = ({
  task,
  toggleTaskSelection,
  isSelected,
}) => {
  return (
    <div className="flex justify-between sm:px-6 text-wrap">
      <input
        type="checkbox"
        checked={isSelected}
        className='mr-2'
        onChange={() => toggleTaskSelection(task)}
      />
      <p className="w-2/3 text-lg break-words">{task}</p>
    </div>
  );
};

export default TaskItem;
