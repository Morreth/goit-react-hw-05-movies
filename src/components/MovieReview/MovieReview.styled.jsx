import styled from "styled-components";

export const ReviewList = styled.ul`
  padding: 32px;
  list-style: none;
`;
export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const ReviewAuthor = styled.h2`
  margin-bottom: 15px;
`;

export const NoReview = styled.p`
  padding-left: 32px;
  padding-right: 32px;
  font-size: 24px;
  font-weight: 500;
`;
