import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';
import { getTrendingFilmsToday } from 'helpers/API';
import { useEffect, useState } from 'react';
import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const trendingFIlms = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingFilmsToday();
        const { results } = response.data;
        setFilms(results);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    trendingFIlms();
  }, []);
  return (
    <main>
      <h2 className={css.h2}>Trending films</h2>
      {isLoading ? <Loader /> : null}
      {err ? <p>{err}</p> : null}
      <ul>
        <TrendingList films={films} />
      </ul>
    </main>
  );
};

export default Home;
