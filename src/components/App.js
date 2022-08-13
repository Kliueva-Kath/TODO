import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import data from "../utils/data.json";

function App() {
  const [tasks, setTasks] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState([]);
  const [editValue, setEditValue] = useState("");

  function handleDeleteTask(task) {
    setTasks((state) => state.filter((t) => t._id !== task._id));
  }

  function handleAddTask(taskValue) {
    const newTask = { _id: Math.floor(Math.random() * 10000), task: taskValue };
    setTasks([newTask, ...tasks]);
  }

  function handleEditTaskButtonClick(clickedTask) {
    setIsEditing(true);
    setEditedTask(clickedTask);
    setEditValue(clickedTask.task);
  }

  function handleEditFormChange(evt) {
    setEditValue(evt.target.value);
  }

  function handleEditTask(editValue) {
    const tasksUpdate = [...tasks].filter(
      (task) => task._id !== editedTask._id
    );
    const newTask = { _id: editedTask._id, task: editValue };

    setTasks([newTask, ...tasksUpdate]);

    setEditValue("");
    setIsEditing(false);
  }

  function handleCancelEditButtonClick() {
    setIsEditing(false);
  }

  return (
    <div className='App'>
      <Header />
      <div className='todo'>
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onEditTaskButtonClick={handleEditTaskButtonClick}
        />
        {isEditing ? (
          <EditTaskForm
            onEditTask={handleEditTask}
            editedTask={editedTask}
            isEditing={isEditing}
            editValue={editValue}
            onEditFormChange={handleEditFormChange}
            onCancelEditButtonClick={handleCancelEditButtonClick}
          />
        ) : (
          <AddTaskForm onAddTask={handleAddTask} />
        )}
      </div>
    </div>
  );
}

export default App;
