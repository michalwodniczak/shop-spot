import styled from "styled-components";

export const StyledButton = styled.button`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const RemoveButton = styled(StyledButton)`
  display: inline-block;
  margin-left: 10px;

  &::before{
    content: "Remove to Cart";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &::before {
      content: "Remove";
    }
  }
`;
