import { useState } from "react";
import AddItemsContainer from "./componentes/AddItemsContainer";
import ItemsContainer from "./componentes/ItemsContainer";

function getDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const date = String(today.getDate()).padStart(2, "0");
  return `${date}/${month}/${year}`;
}

function App() {
  const [taskList, setTaskList] = useState(["Task de exemplo :P"]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  const addToList = (item) => {
    setTaskList([...taskList, item]);
  };

  const toggleTaskSelection = (task) => {
    if (selectedTasks.includes(task)) {
      setSelectedTasks(selectedTasks.filter((t) => t !== task));
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const deleteSelectedTasks = () => {
    const newList = taskList.filter((task) => !selectedTasks.includes(task));
    setTaskList(newList);
    setSelectedTasks([]);
  };

  return (
    <div className="w-40 sm:w-[400px] lg:w-[800px] bg-white shadow-lg pb-5 pt-3 px-5 rounded-md">
      <div className="flex items-baseline justify-between border-b border-slate-400">
        <h1 className="text-lg sm:text-4xl text-center lg:text-left font-semibold pb-2">
          To Do's List
        </h1>
        <p className="hidden sm:flex lg:text-lg font-medium">{currentDate}</p>
      </div>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer
        taskList={taskList}
        removeFromList={removeFromList}
        toggleTaskSelection={toggleTaskSelection}
        deleteSelectedTasks={deleteSelectedTasks}
        selectedTasks={selectedTasks}
      />
    </div>
  );
}

export default App;
