import TrendingList from 'components/TrendingList/TrendingList';
import { getTrendingFilmsToday } from 'helpers/API';
import { useEffect, useState } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const trendingFIlms = async () => {
      try {
        const response = await getTrendingFilmsToday();
        const { results } = response.data;
        setFilms(results);
      } catch (error) {
        console.log(error);
      }
    };
    trendingFIlms();
  }, []);
  return (
    <main>
      <h2>Trending films</h2>
      <ul>
        <TrendingList films={films} />
      </ul>
    </main>
  );
};

export default Home;
