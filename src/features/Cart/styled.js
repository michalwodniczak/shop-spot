import styled from "styled-components";

export const CartWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevice}px) {
    flex-direction: column;
    align-items: center;
  };
`;

export const CartText = styled.p`
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
`;

export const Result = styled.div`
  padding: 20px;
  border-radius: 5px;
  width: 324px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ResultTitle = styled.h2`
  font-size: 24;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevice}px) {
    font-size: 20px;
  };
`;

export const ResultTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ResultText = styled.p`
  font-size: 20px;
`;

export const ResultTextValue = styled.p`
  font-size: 24px;
  font-weight: 700;
`