import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MoviesDetails/MoviesDetail'));
const Reviews = lazy(() => import('pages/Review/Review'));

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
