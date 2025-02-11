import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Item, List, StyledNavLink, Overlay } from "./styled";
import { Nav } from "../styled";
import { HamburgerButton } from "./HamburgerButton";

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
    <Nav>
      {isMobile ? (
        <>
          <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Overlay isOpen={isMenuOpen}>
            <List mobile>
              <Item>
                <StyledNavLink
                  to="/category/electronics"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronics
                </StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink
                  to="/category/jewelery"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jewelery
                </StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink
                  to="/category/men's clothing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men's clothing
                </StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink
                  to="/category/women's clothing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women's clothing
                </StyledNavLink>
              </Item>
            </List>
          </Overlay>
        </>
      ) : (
        <List>
          <Item>
            <StyledNavLink to="/category/electronics">
              Electronics
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/category/jewelery">Jewelery</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/category/men's clothing">
              Men's clothing
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/category/women's clothing">
              Women's clothing
            </StyledNavLink>
          </Item>
        </List>
      )}
    </Nav>
  );
};
