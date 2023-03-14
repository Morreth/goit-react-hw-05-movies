import styled from "styled-components";

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 52px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 26px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 5px 0px rgba(3, 98, 128, 0.2),
    0px 1px 1px 0px rgba(3, 98, 128, 0.14),
    0px 2px 1px -1px rgba(3, 98, 128, 0.12);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const CastItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CastNameList = styled.ul`
  padding: 8px;
  list-style: none;
`;
export const CastNameItem = styled.li`
  margin-bottom: 5px;
  font-weight: 700;
`;
