import Loader from 'components/Loader/Loader';
import { getMovieForId } from 'helpers/API';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [releaseData, setReleaseData] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const location = useLocation();
  const locationRef = useRef(location.state?.from); // location.state && location.state.from
  useEffect(() => {
    const getFilm = async id => {
      try {
        setIsLoading(true);
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
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilm(id);
  }, [id]);
  return (
    <main className={css.main}>
      <section className={css.section}>
        <div>
          <Link to={locationRef.current ?? '/'}>
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>

        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
        <h2 className={css.h2}>{`${title} ${releaseData}`}</h2>
        <p className={css.p}>{`Rating: ${rating.toFixed(2)}`}</p>
        <h3 className={css.h3}>Overview</h3>
        <p className={css.p}>{overview}</p>
        <h3 className={css.h3}>Genres</h3>
        {genres.map(i => (
          <p key={i.id}>{i.name}</p>
        ))}
      </section>
      <section>
        <h2>Additional information</h2>
        <ul className={css.ul}>
          <li>
            <Link to="cast">
              <Button variant="contained">Cast</Button>
            </Link>
          </li>
          <li>
            <Link to="reviews">
              <Button variant="contained">Reviews</Button>
            </Link>
          </li>
        </ul>
        <Outlet />
      </section>
      {isLoading ? <Loader /> : null}
      {err ? <p>{err}</p> : null}
    </main>
  );
};
export default MovieDetails;
