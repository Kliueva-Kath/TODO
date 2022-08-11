import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TaskEditor from "./TaskEditor";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='todo'>
        <TodoList />
        <TaskEditor />
      </div>
    </div>
  );
}

export default App;
