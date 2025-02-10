import { StyledHamburgerButton, Line } from "./styled";

export const HamburgerButton = ({ isOpen, toggleMenu }) => (
  <StyledHamburgerButton onClick={toggleMenu} arial-label="Toggle menu">
    <Line isOpen={isOpen} />
    <Line isOpen={isOpen} />
    <Line isOpen={isOpen} />
  </StyledHamburgerButton>
);
