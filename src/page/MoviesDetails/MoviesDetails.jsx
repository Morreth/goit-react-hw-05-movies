import { useParams, useLocation } from 'react-router-dom';
import { getId } from 'API/moviesSearchApi';
import Container from 'components/Container';
import MovieDetail from 'components/MovieDetail';
import useMovieSearch from 'API/movieSearch';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';




  const popularMovies = useMovieSearch(getId, id);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      <Container isLoading={isLoading} error={error} movieArr={movieArr}>
        
        {movieArr.length !== 0 && (
          <MovieDetail movies={movieArr} backLinkHref={backLinkHref} />
        )}
       
      </Container>
    </main>
  );
};

export default MoviesDetails;
