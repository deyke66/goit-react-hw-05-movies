import SearchBar from 'components/MovieSearchBar/MovieSearchBar';
import { getMoviesBySearchTerm } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const getFilms = async value => {
      try {
        setIsLoading(true);
        const {
          data: { results },
        } = await getMoviesBySearchTerm(value);
        setFilms(results);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms(query);
  }, [query]);

  const onSubmit = term => {
    setSearchParams({
      query: term,
    });
  };

  return (
    <div>
      {isLoading ? <Loader /> : null}
      {err ? <p>{err}</p> : null}
      <SearchBar onSubmit={onSubmit} />
      {Array.isArray(films) && (
        <TrendingList location={location} films={films} />
      )}
    </div>
  );
};
export default Movies;
