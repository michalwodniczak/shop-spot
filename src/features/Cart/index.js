import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { removeFromCart, selectCart } from "./cartSlice";
import { CartListWrapper } from "../../common/Tile/styled";
import { CartsTile } from "../../common/Tile";
import { StyledButton } from "../../common/Button/styled";

export const Cart = () => {
  const cartProducts = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <Main>
      <CartListWrapper>
        {cartProducts.length === 0 ? (
          <CartsTile>
            <p>Koszyk jest pusty!</p>
          </CartsTile>
        ) : (
          cartProducts.map((product) => (
            <CartsTile
              key={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
            >
              <StyledButton onClick={() => dispatch(removeFromCart(product))}>
                Remove to Cart
              </StyledButton>
            </CartsTile>
          ))
        )}
      </CartListWrapper>
    </Main>
  );
};
