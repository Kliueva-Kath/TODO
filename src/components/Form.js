export default function Form() {
  return (
    <form className='form'>
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
