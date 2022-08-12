import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TaskEditor from "./TaskEditor";
import data from "./data.json";

function App() {
  const [tasks, setTasks] = useState(data);
  return (
    <div className='App'>
      <Header />
      <div className='todo'>
        <TodoList tasks={tasks} />
        <TaskEditor />
      </div>
    </div>
  );
}

export default App;
