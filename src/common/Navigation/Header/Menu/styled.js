import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  font-size: 16px;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    order: 1;
  }
`;

export const Item = styled.li`
  width: 140px;
  text-align: center;
  /* @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    display: none;
  } */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
