// компонент формы редактирования заметок
export default function EditTaskForm({
  onEditTask,
  editedTask,
  editValue,
  onEditFormChange,
  onCancelEditButtonClick,
}) {
  /**
   * Отвечает за клик по кнопке отмены редактирования -
   * вызывает функцию отмены из App.js
   */
  function handleCancelEditButtonClick() {
    onCancelEditButtonClick();
  }

  /**
   * Отвечает за событие сабмита формы редактирования -
   * вызывает функцию отправки формы из App.js
   * @param {object} evt - событие отправки формы
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    onEditTask(editValue);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
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
    </form>
  );
}
