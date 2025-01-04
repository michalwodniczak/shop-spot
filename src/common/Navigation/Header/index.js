import { StyledHeader, StyledLink, Title } from "./styled";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Title>Shop-Spot</Title>
      </StyledLink>
      <Menu />
    </StyledHeader>
  );
};
