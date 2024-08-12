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
    <div className="bg-white shadow-lg py-3 px-5 rounded-md">
      <div className="border-b border-slate-400">
        <h1 className="sm:text-4xl text-3xl font-semibold pb-2">
          Minha Lista de <br className="sm:hidden" /> Tarefas do dia
        </h1>
      </div>
      <AddItemsContainer addToList={addToList}/>
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
