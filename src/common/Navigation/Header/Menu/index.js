import { useState,useEffect } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../CartButton/styled";
import { Item, List, StyledNavLink } from "./styled";
import hamburgerIcon from "../../../../assets/hamburgerMenu.png";

export const Menu = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseInt(theme.breakpoints.mobile)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseFloat(theme.breakpoints.mobile));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <nav>
      {isMobile ? (
        <Button>
          <img src={hamburgerIcon} alt="" />
        </Button>
      ) : (
        <List>
          <Item>
            <StyledNavLink>Electronics</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink>Jewelery</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink>Men's clothing</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink>Women's clothing</StyledNavLink>
          </Item>
        </List>
      )}
    </nav>
  );
};
