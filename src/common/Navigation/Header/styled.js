import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    font-size: 22px;
  };
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

export const Nav = styled.nav`
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
    order:-1;
  };
`;