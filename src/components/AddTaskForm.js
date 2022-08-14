import { useState } from "react";

// компонент формы добавления заметки
export default function AddTaskForm({ onAddTask }) {
  // стейт контролируемого инпута формы
  const [inputValue, setInputValue] = useState("");

  /**
   * Отвечает за отслеживание изменений инпута
   * @param {object} evt
   */
  function handleChange(evt) {
    setInputValue(evt.target.value);
    console.log(inputValue);
  }

  /**
   * Отвечает за отправку формы добавления заметки -
   * вызывает функцию добавления из App.js и очищает инпут
   * @param {object} evt
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddTask(inputValue);
    setInputValue("");
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <textarea
        className='form__edit-window'
        placeholder='Введите заметку'
        onChange={handleChange}
        value={inputValue || ""}
        required></textarea>
      <button type='submit' className='form__save-button'>
        Добавить заметку
      </button>
    </form>
  );
}
