import TodoTask from "./TodoTask";

export default function TodoList({ tasks }) {
  return (
    <ul className='todo__items-container'>
      {tasks.map((task) => {
        return <TodoTask task={task} key={task._id} />;
      })}
    </ul>
  );
}
