export default function TaskEditor() {
  return (
    <div className='task-editor'>
      <textarea
        className='task-editor__edit-window'
        placeholder='Введите заметку'></textarea>
      <button type='submit' className='task-editor__save-button'>
        Создать
      </button>
    </div>
  );
}
