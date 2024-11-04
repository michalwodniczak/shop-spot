import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../CartButton/styled";
import { Item, List, StyledNavLink, Overlay } from "./styled";
import hamburgerIcon from "../../../../assets/hamburgerMenu.png";

export const Menu = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseInt(theme.breakpoints.mobile)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseFloat(theme.breakpoints.mobile));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.mobile]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      {isMobile ? (
        <>
          <Button onClick={toggleMenu} aria-label="Toggle menu">
            <img src={hamburgerIcon} alt="Menu Icon" />
          </Button>
          <Overlay isOpen={isMenuOpen}>
            <List mobile>
              <Item>
                <StyledNavLink to="/">Electronics</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to="/">Jewelery</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to="/">Men's clothing</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to="/">Women's clothing</StyledNavLink>
              </Item>
            </List>
          </Overlay>
        </>
      ) : (
        <List>
          <Item>
            <StyledNavLink to="/">Electronics</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/">Jewelery</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/">Men's clothing</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/">Women's clothing</StyledNavLink>
          </Item>
        </List>
      )}
    </nav>
  );
};
