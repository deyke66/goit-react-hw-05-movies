import { useRef } from 'react';

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef();
  const hendleSubmit = e => {
    e.preventDefault();
    const term = inputRef.current.value;
    onSubmit(term);
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input name="search" type="text" ref={inputRef} required />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
