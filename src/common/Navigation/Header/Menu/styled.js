import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  opacity: 0.9;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  ${(props) =>
    props.mobile &&
    css`
      flex-direction: column;
    `}
`;

export const Item = styled.li`
  width: 140px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
    margin-top: 20px;
    width: 200px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: blue;
  }
`;
