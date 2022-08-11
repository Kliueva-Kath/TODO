import TodoTask from "./TodoTask";

export default function TodoList() {
  return (
    <ul className='todo__items-container'>
      <TodoTask />
      <button type='button' className='todo__add-task-button'>
        Новая заметка
      </button>
    </ul>
  );
}
