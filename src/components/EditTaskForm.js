import { useState } from "react";
import Form from "./Form";

export default function EditTaskForm({ onAddTask }) {
  const [taskValue, setTaskValue] = useState("");

  function handleChange(evt) {
    setTaskValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("clicked");
    onAddTask(taskValue);
    setTaskValue("");
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <textarea
        className='form__edit-window'
        placeholder='Введите заметку'
        onChange={handleChange}
        value={taskValue || ""}
        required></textarea>
      <button type='submit' className='form__save-button'>
        Создать
      </button>
    </form>
  );
}
