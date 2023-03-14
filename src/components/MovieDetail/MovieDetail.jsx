import { Outlet } from 'react-router-dom';
import {
  MovieSection,
  MovieDetailImg,
  InfoNavLinkStyled,
  MovieInfoContainer,
  GoBackLink,
  MovieInfoTitle,
  MovieInfoText,
  MovieInfoH,
} from './MovieDetail.styled';

const MovieDetail = ({ movies, backLinkHref }) => {
  const userScore = (Number(movies.vote_average) * 10).toFixed(2);

  const genres = [];
  movies.genres && movies.genres.forEach(g => genres.push(g.name));
  const genresString = genres.join(', ');
  const year = movies.release_date.slice(0, 4);

  return (
    <>
      <GoBackLink to={backLinkHref}>Go back</GoBackLink>
      <MovieSection>
        <MovieInfoContainer>
          <MovieDetailImg
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt={movies.original_title}
          />
          <div>
            <MovieInfoTitle>
              {movies.original_title} ({year})
            </MovieInfoTitle>
            <MovieInfoText>User Score: {userScore} %</MovieInfoText>
            <MovieInfoH>Overview</MovieInfoH>
            <MovieInfoText>{movies.overview}</MovieInfoText>
            <MovieInfoH>Genres</MovieInfoH>
            <MovieInfoText>{genresString}</MovieInfoText>
          </div>
        </MovieInfoContainer>

        <ul>
          <InfoNavLinkStyled to="cast" state={{ from: backLinkHref }}>
            Cast
          </InfoNavLinkStyled>
          <InfoNavLinkStyled to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </InfoNavLinkStyled>
        </ul>
      </MovieSection>
      <Outlet />
    </>
  );
};

export default MovieDetail;

