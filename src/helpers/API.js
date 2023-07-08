import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ab598497fd3a9501ac3ad96f36b0f9e2';
const LNG = 'language=en-US';

export const getTrendingFilmsToday = () => {
  const data = axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&${LNG}`
  );
  return data;
};

export const getMovieForId = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&${LNG}`);
  return data;
};

export const getActorsForMovie = id => {
  const data = axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&${LNG}`
  );
  return data;
};

export const getReviewsForMovie = id => {
  const data = axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&${LNG}`
  );
  return data;
};

export const getMoviesBySearchTerm = value => {
  const data = axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query: value,
      api_key: API_KEY,
    },
  });
  return data;
};
