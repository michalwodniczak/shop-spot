import { StyledHeader, Title, List, Item } from "./styled";
export const Header = () => (
  <StyledHeader>
    <Title>Shop-Spot</Title>
    <nav>
      <List>
        <Item>Electronics</Item>
        <Item>Jewelery</Item>
        <Item>men's clothing</Item>
        <Item>women's clothing</Item>
      </List>
    </nav>
  </StyledHeader>
);
