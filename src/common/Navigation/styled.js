import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: space-around;
  }
`;
