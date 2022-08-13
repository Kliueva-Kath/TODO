import { useState } from "react";
import Form from "./Form";

export default function EditTaskForm({
  onEditTask,
  editedTask,
  editValue,
  onEditFormChange,
}) {
  /*   const [inputValue, setInputValue] = useState(editedTask.task);

  function handleChange(evt) {
    setInputValue(evt.target.value);
  } */
  console.log(editedTask.task);

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditTask(editValue);
    console.log("clicked");
  }
  return (
    <Form onSubmit={handleSubmit} buttonText='Сохранить изменения'>
      <textarea
        className='form__edit-window'
        placeholder='Внесите свои изменения'
        onChange={onEditFormChange}
        value={editValue}
        required></textarea>
    </Form>
  );
}
