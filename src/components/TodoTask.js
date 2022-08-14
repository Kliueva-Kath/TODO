import { useState } from "react";

// компонент отдельной заметки
export default function TodoTask({
  task,
  onDeleteTask,
  onEditTaskButtonClick,
}) {
  // стейт - заметка ожидает
  const [isAwaiting, setIsAwaiting] = useState(false);
  // стейт - заметка в процессе выполнения
  const [isInProgress, setIsInProgress] = useState(false);
  // стейт - заметка выполнена
  const [isDone, setIsDone] = useState(false);

  /**
   * Отвечает за изменение статуса заметки на "ожидает"
   * при клике на серую кнопку
   */
  function handleGreyButtonClick() {
    setIsAwaiting(true);
    setIsInProgress(false);
    setIsDone(false);
  }

  /**
   * Отвечает за изменение статуса заметки на "в процессе"
   * при клике на голубую кнопку
   */
  function handleBlueButtonClick() {
    setIsInProgress(true);
    setIsDone(false);
    setIsAwaiting(false);
  }

  /**
   * Отвечает за изменение статуса заметки на "выполнена"
   * при клике на зеленую кнопку
   */
  function handleGreenButtonClick() {
    setIsDone(true);
    setIsInProgress(false);
    setIsAwaiting(false);
  }

  /**
   * Отвечает за удаление заметки -
   * вызывает функцию удаления из App.js
   */
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  /**
   * Отвечает за клик по кнопке изменения заметки
   * передает объъект изменяемой заметки в стейт в App.js
   */
  function handleEditTaskButtonClick() {
    onEditTaskButtonClick(task);
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
            onClick={handleEditTaskButtonClick}
          />
          <button
            type='button'
            className='todo-item__delete-button'
            onClick={handleDeleteTask}
          />
        </div>
      </div>
    </li>
  );
}
