import { Header } from "./Header";
import { CartButton } from "./CartButton";
import { Wrapper } from "./styled";

export const Navigation = () => {
  return (
    <Wrapper>
      <Header />
      <CartButton />
    </Wrapper>
  );
};
