import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #038065;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #81bece;
  font-weight: 500;
  &.active {
    color: #E5E9F2;
    background-color: #038065;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #E5E9F2;
  }
`;
