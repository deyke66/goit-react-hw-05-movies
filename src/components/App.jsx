import Cast from "pages/Cast/Cast";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MoviesDetails/MoviesDetail";
import Reviews from "pages/Review/Review";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
 
      </Routes>
    </div>
  );
};
