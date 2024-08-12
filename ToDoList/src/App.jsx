import { useState } from "react";
import AddItemsContainer from "./componentes/AddItemsContainer";
import ItemsContainer from "./componentes/ItemsContainer";

function App() {
  const [taskList, setTaskList] = useState(["Task de exemplo :P"]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  const addToList = (item) => {
    setTaskList([...taskList, item]);
  };

  return (
    <div className="w-40 sm:w-[400px] lg:w-[800px] bg-white shadow-lg pb-5 pt-3 px-5 rounded-md">
      <div className="border-b border-slate-400">
        <h1 className="text-lg sm:text-4xl text-center lg:text-left font-semibold pb-2">
          To Do's List
        </h1>
      </div>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
