import styled from "styled-components";

export const Main = styled.main`
  max-width: 1200px;
  margin: 80px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    margin-top: 20px;
  }
`;
