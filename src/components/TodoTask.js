import { useState } from "react";

export default function TodoTask({ task }) {
  const [isAwaiting, setIsAwaiting] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function handleGreyButtonClick() {
    setIsAwaiting(true);
    setIsInProgress(false);
    setIsDone(false);
  }

  function handleBlueButtonClick() {
    setIsInProgress(true);
    setIsDone(false);
    setIsAwaiting(false);
  }

  function handleGreenButtonClick() {
    setIsDone(true);
    setIsInProgress(false);
    setIsAwaiting(false);
  }

  return (
    <li
      className={`todo-item ${isAwaiting && "todo-item_type_awaiting"} ${
        isInProgress && "todo-item_type_in-progress"
      } ${isDone && "todo-item_type_done"}`}>
      <p className='todo-item__text'>{task.task}</p>
      <div className='todo-item__button-panel'>
        <div className='todo-item__states'>
          <button
            type='button'
            className='todo-item__state-button todo-item__state-button_type_gray'
            onClick={handleGreyButtonClick}>
            <p className='todo-item__state-tooltip'>ожидает</p>
          </button>
          <button
            type='button'
            className='todo-item__state-button todo-item__state-button_type_blue'
            onClick={handleBlueButtonClick}>
            <p className='todo-item__state-tooltip'>в процессе</p>
          </button>
          <button
            type='button'
            className='todo-item__state-button todo-item__state-button_type_green'
            onClick={handleGreenButtonClick}>
            <p className='todo-item__state-tooltip'>выполнена</p>
          </button>
        </div>
        <div className='todo-item__options'>
          <button
            type='button'
            className='todo-item__edit-button'
            alt='edit task'
          />
          <button
            type='button'
            className='todo-item__delete-button'
            alt='delete task'
          />
        </div>
      </div>
    </li>
  );
}
