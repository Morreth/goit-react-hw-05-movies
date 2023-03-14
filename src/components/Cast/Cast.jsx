import { useParams } from 'react-router-dom';
import { findActors } from 'API/moviesSearchApi';
import MovieActors from 'components/MovieActors';
import useMovieSearch from 'API/movieSearch';
import Container from 'components/Container';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearch(findActors, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <Container isLoading={isLoading} error={error} movieArr={movieArr}>
      {movieArr.length !== 0 && <MovieActors movies={movieArr} />}
    </Container>
  );
};

export default MoviesDetails;
