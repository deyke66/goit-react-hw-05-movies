import { getMovieForId } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [releaseData, setReleaseData] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getFilm = async id => {
      try {
        const response = await getMovieForId(id);
        const {
          release_date,
          poster_path,
          vote_average,
          overview,
          genres,
          original_title,
        } = response.data;
        setTitle(original_title);
        setPoster(poster_path);
        setReleaseData(release_date);
        setOverview(overview);
        setGenres([...genres]);
        setRating(vote_average);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm(id);
  }, [id]);
  return (
    <main>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
      <h2>{`${title} ${releaseData}`}</h2>
      <p>{`Rating: ${rating.toFixed(2)}`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres.map(i => (
        <p key={i.id}>{i.name}</p>
      ))}
    </main>
  );
};
export default MovieDetails;
