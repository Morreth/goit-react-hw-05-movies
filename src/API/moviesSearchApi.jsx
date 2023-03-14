import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = 'f249ae3da3f79140d8f15bddadf6e5ab';
const URL = 'https://api.themoviedb.org/3/';

export const findMovies = async () => {
  return await axios
    .get(`${URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
  
};

export const getId = async id => {
  return await axios
    .get(`${URL}movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const findActors = async id => {
  return await axios
    .get(`${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
};

export const findReviews = async id => {
  return await axios
    .get(
      `${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data.results);
};

export const findQuery = async query => {
  return await axios
    .get(
      `${URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(response => response.data.results);
};
