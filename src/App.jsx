import { useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const [todos, setTodos] = useState([]);

  const agregar = () => {
    console.log(todos);
    const value = ref.current.value;
    if (todos.length === 0) {
      setTodos([value]);
    }
    setTodos([...todos, value]);
    ref.current.value = "";
  };

  return (
    <div className="container mx-auto p-4 lg:px-56 md:px-40 xl:px-96">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2 w-full"
          placeholder="Agregar Nueva Tarea"
          ref={ref}
        />
        <button
          type="reset"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
          onClick={agregar}
        >
          Agregar
        </button>
      </div>
      <div>
        {todos.map((el, index) => {
          return (
            <div className="flex mb-4" key={index}>
              <div className="bg-gray-500 text-white px-4 py-2 rounded-l w-full">
                {el}
              </div>
              <button
                type="reset"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r"
                onClick={() => {
                  setTodos(
                    todos.filter((el, i) => {
                      return i !== index;
                    })
                  );
                }}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
