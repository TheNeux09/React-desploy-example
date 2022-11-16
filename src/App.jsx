import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}
