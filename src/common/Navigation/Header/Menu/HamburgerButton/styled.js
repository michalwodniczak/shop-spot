import styled from "styled-components";

export const StyledHamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
`;

export const Line = styled.span`
  display: block;
  height: 4px;
  background-color: black;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(13px) rotate(45deg)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-13px) rotate(-45deg)" : "none"};
  }
`;
