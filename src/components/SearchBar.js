export default function SearchBar({ onSearchInputChange, searchTerm }) {
  /**
   * Вызывает функцию, отслеживающую изменения инпута поиска из App.js
   * @param {object} evt - событие изменения инпута
   */
  function handleSearchInputChange(evt) {
    onSearchInputChange(evt);
  }
  return (
    <input
      className='search-bar'
      type='text'
      placeholder='Поиск заметок'
      onChange={handleSearchInputChange}
      value={searchTerm || ""}
    />
  );
}
