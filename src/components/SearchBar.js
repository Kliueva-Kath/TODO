export default function SearchBar({ onSearchInputChange, searchTerm }) {
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
