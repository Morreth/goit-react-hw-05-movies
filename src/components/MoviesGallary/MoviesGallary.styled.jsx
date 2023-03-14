import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopularMovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 52px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 26px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const MovieItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 5px 0px rgba(3, 98, 128, 0.2),
    0px 1px 1px 0px rgba(3, 98, 128, 0.14),
    0px 2px 1px -1px rgba(3, 98, 128, 0.12);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MovieTitle = styled.p`
  padding: 8px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #012e4a;
`;
