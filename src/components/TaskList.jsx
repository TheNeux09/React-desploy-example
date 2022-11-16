import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center">No Hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

// Dentro de Vite si o si tenemos que colocar elemento JSX....

// Para mostror los datos dentro de la patalla hay que guardarlo dentro de un estado //

// useEffect = Esto se usa cuando carga el componente...
