import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MoviesDetails/MoviesDetail";
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
        <Route path="/movies/:id" element={<MovieDetails/>} />
      </Routes>
    </div>
  );
};
