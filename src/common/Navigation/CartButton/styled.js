import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: -4px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 18px;
  height: 18px;
  font-size: 16px;
  margin: 0;
`;
