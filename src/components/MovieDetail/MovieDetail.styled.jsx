import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #032c80;
  font-weight: 500;
  border: 1px solid #032c80;
  margin-left: 32px;
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: #1882e7;
    border: 1px solid #1882e7;
    color: #e8ede7;
  }
`;

export const MovieSection = styled.section`
  padding: 32px;
`;
export const MovieInfoContainer = styled.div`
  display: flex;
`;

export const MovieDetailImg = styled.img`
  width: 350px;
  object-fit: cover;
  margin-right: 32px;
  margin-bottom: 32px;
`;

export const MovieInfoTitle = styled.h2`
  margin-bottom: 45px;
`;
export const MovieInfoH = styled.h3`
  margin-bottom: 15px;
`;
export const MovieInfoText = styled.p`
  margin-bottom: 30px;
`;
export const InfoNavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #032c80;
  font-weight: 500;
  border: 1px solid #032c80;
  &.active {
    color: #e8ede7;
    background-color: #1882e7;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: #1882e7;
    border: 1px solid #1882e7;
    color: #e8ede7;
  }
  &:first-of-type {
    margin-right: 15px;
  }
`;
