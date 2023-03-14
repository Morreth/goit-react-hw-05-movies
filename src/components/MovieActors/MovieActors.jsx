import {
  CastList,
  CastItem,
  CastItemImg,
  CastNameList,
  CastNameItem,
} from './MovieActors.styled';
import PropTypes from 'prop-types'

const MovieActors = ({ movies }) => {
  return (
    <CastList>
      {movies.map(({ original_name, profile_path, character, id }) => (
        <CastItem key={id}>
          <CastItemImg
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={original_name}
          />{' '}
          <CastNameList>
            <CastNameItem>{original_name}</CastNameItem>
            <li>Character - {character}</li>
          </CastNameList>
        </CastItem>
      ))}
    </CastList>
  );
};

MovieActors.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      character: PropTypes.string,
    })
  ),
};

export default MovieActors;
