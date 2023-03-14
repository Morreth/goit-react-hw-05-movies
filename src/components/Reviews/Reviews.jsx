import { Outlet, useParams } from 'react-router-dom';
import { findReviews } from 'API/moviesSearchApi';
import Container from 'components/Container';
import MovieReview from 'components/MovieReview';
import useMovieSearch from 'API/movieSearch';
import { NoReview } from '../MovieReview/MovieReview.styled';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearch(findReviews, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <Container isLoading={isLoading} error={error} movieArr={movieArr}>
      {!isLoading && movieArr.length !== 0 ? (
        <MovieReview movies={movieArr} />
      ) : (
        <NoReview> There are no reviews for this film.</NoReview>
      )}
      <Outlet/>
    </Container>
  );
};

export default MoviesDetails;
