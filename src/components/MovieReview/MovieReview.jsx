
import { ReviewList, ReviewItem, ReviewAuthor } from './MovieReview.styled';

const MovieReview = ({ movies }) => {
  <ReviewList>
    {movies.map(({ id, author, content }) => (
      <ReviewItem key={id}>
        <ReviewAuthor>{author}</ReviewAuthor>
        <p>{content}</p>
      </ReviewItem>
    ))}
  </ReviewList>;
};



export default MovieReview;
