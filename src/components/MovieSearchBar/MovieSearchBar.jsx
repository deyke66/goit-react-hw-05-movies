import { useRef } from 'react';
import css from './MovieSearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef();
  const hendleSubmit = e => {
    e.preventDefault();
    const term = inputRef.current.value;
    onSubmit(term);
  };
  return (
    <form className={css.form} onSubmit={hendleSubmit}>
      <input
        className={css.input}
        name="search"
        type="text"
        ref={inputRef}
        required
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
