import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';
import Container from '@mui/material/Container';
import css from './App.module.css';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MoviesDetails/MoviesDetail'));
const Reviews = lazy(() => import('pages/Review/Review'));

export const App = () => {
  return (
    <Container>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.unactive)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.unactive)}
          to="/movies"
        >
          Movies
        </NavLink>
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
    </Container>
  );
};
