import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="flex flex-col mt-4 gap-2">
      {taskList.map((t, idx) => (
        <TaskItem task={t} removeFromList={removeFromList} key={`taskItem-${idx}`}/>
      ))}
    </div>
  );
};

export default ItemsContainer;
