import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      name,
    });
    setTitle("");
    setName("");
  };


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} 
      className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
        />
        <textarea
          placeholder="Escribe la tarea "
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-slate-300 p-3 w-full mb-2"

        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-red-500">Guardar</button>
      </form>
    </div>
  );
}

// Onchage = Capturamos el evento onchage, capturamos los que la persona escribe //

// useState = Guardamos un estado.

// PreventDefault = Es un evento que cancerla el comportamiento del formulario por defecto .
