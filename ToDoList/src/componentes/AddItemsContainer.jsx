const AddItemsContainer = ({ addToList }) => {
  let newTask = '';

  return (
    <div className="mt-4 flex justify-between px-6">
      <input
        placeholder="Insira sua tarefa"
        type="text"
        onChange={(evt) => {
          newTask = evt.target.value;
        }}
      />
      <button
        onClick={() => {
          addToList(newTask);
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
