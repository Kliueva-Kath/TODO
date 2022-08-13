import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import EditTaskForm from "./EditTaskForm";
import data from "./data.json";

function App() {
  const [tasks, setTasks] = useState(data);

  function handleDeleteTask(task) {
    setTasks((state) => state.filter((t) => t._id !== task._id));
  }

  function handleAddTask(taskValue) {
    const newTask = { _id: nanoid(), task: taskValue };
    setTasks([newTask, ...tasks]);
  }

  return (
    <div className='App'>
      <Header />
      <div className='todo'>
        <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
        <EditTaskForm onAddTask={handleAddTask} />
      </div>
    </div>
  );
}

export default App;
