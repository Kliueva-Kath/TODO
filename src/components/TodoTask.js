export default function TodoTask() {
  return (
    <li className='todo__item'>
      <p className='todo__item-text'>todo item write your item here</p>
      <div className='todo__item-options'>
        <button type='button' className='todo__edit-button' alt='edit task' />
        <button
          type='button'
          className='todo__delete-button'
          alt='delete task'
        />
      </div>
    </li>
  );
}
