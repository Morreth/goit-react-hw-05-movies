import { useLocation } from 'react-router-dom';
import {
  PopularMovieList,
  MovieItem,
  MovieItemImg,
  MovieTitle,
  MovieLink,
} from './MoviesGallary.styled';
import PropTypes from 'prop-types';

const MoviesGallary = ({ movies }) => {
  const location = useLocation();
  return (
    <PopularMovieList>
      {movies.map(({ id, original_title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieItemImg
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />{' '}
            <MovieTitle>{original_title}</MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </PopularMovieList>
  );
};

MoviesGallary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MoviesGallary;
