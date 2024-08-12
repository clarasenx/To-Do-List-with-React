import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="flex flex-col mt-4 gap-2">
      {taskList.map((t) => (
        <TaskItem task={t} removeFromList={removeFromList} />
      ))}
    </div>
  );
};

export default ItemsContainer;
