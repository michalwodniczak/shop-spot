import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    position: relative;
    width: calc(100% - 20px);
    margin: 20px auto;
    padding: 2px;
    bottom: 0;
    right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevice}px) {
    margin: 0 auto;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  display: inline;
  margin: 0 2px;
`;
