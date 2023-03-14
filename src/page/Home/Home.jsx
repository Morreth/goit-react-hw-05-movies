import { findMovies } from 'API/moviesSearchApi';
import MoviesGallary from 'components/MoviesGallary';
import Container from 'components/Container';
import useMovieSearch from 'API/movieSearch';
import { TrendingTitle } from './Home.styled';

const Home = () => {
  const popularMovies = useMovieSearch(findMovies);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      <Container isLoading={isLoading} error={error} movieArr={movieArr}>
        <TrendingTitle>Trending today</TrendingTitle>
        {movieArr.length !== 0 && <MoviesGallary movies={movieArr} />}
      </Container>
    </main>
  );
};
export default Home;
