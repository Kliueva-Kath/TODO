export default function Form({ children, buttonText, onSubmit }) {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
      <button type='submit' className='form__save-button'>
        {buttonText}
      </button>
    </form>
  );
}
