import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    order: 2;
  }
`;
