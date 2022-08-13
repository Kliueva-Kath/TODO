import { useState } from "react";
import Form from "./Form";

export default function EditTaskForm({
  onEditTask,
  editedTask,
  editValue,
  onEditFormChange,
  onCancelEditButtonClick,
}) {
  function handleCancelEditButtonClick() {
    onCancelEditButtonClick();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditTask(editValue);
  }
  return (
    <Form onSubmit={handleSubmit} buttonText='Сохранить изменения'>
      <textarea
        className='form__edit-window'
        placeholder='Внесите свои изменения'
        onChange={onEditFormChange}
        value={editValue}
        required></textarea>
      <button type='submit' className='form__save-button'>
        Сохранить изменения
      </button>
      <button
        type='button'
        className='form__cancel-button'
        onClick={handleCancelEditButtonClick}>
        Отменить редактирование
      </button>
    </Form>
  );
}
