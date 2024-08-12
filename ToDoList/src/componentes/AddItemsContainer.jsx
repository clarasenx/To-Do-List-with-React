const AddItemsContainer = ({ addToList }) => {
  let newTask = '';

  return (
    <div className="mt-4 flex gap-2 sm:px-6 sm:text-lg">
      <input
        placeholder="Add task"
        type="text"
        className="border rounded px-[2px] sm:px-2 py-[1px] w-2/3"
        onChange={(evt) => {
          newTask = evt.target.value;
        }}
      />
      <button
        className="sm:px-2 sm:w-1/3 font-semibold hover:text-green-900 hover:bg-slate-200"
        onClick={() => {
          if (newTask !== '') {
            addToList(newTask);
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItemsContainer;
