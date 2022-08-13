import { useState } from "react";
import Form from "./Form";

export default function AddTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddTask(inputValue);
    setInputValue("");
  }
  return (
    <Form onSubmit={handleSubmit} buttonText='Добавить заметку'>
      <textarea
        className='form__edit-window'
        placeholder='Введите заметку'
        onChange={handleChange}
        value={inputValue || ""}
        required></textarea>
    </Form>
  );
}
