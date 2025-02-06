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
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`
