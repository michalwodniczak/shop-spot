import { useSelector, useDispatch } from "react-redux";
import { Main } from "../../common/Main/Main";
import { removeFromCart, selectCart } from "./cartSlice";
import { CartListWrapper } from "../../common/Tile/styled";
import { CartsTile } from "../../common/Tile";
import { RemoveButton, StyledButton } from "../../common/Button/styled";
import {
  CartText,
  CartWrapper,
  Result,
  ResultTitle,
  ResultTextContainer,
  ResultText,
  ResultTextValue,
} from "./styled";
import { CartTimer } from "./CartTimer";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <Main>
      <CartWrapper>
        <CartTimer />
        <CartListWrapper>
          {cartProducts.length === 0 ? (
            <CartText>Cart is empty!</CartText>
          ) : (
            cartProducts.map((product) => (
              <CartsTile
                key={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
              >
                <RemoveButton
                  onClick={() => dispatch(removeFromCart(product))}
                />
              </CartsTile>
            ))
          )}
        </CartListWrapper>
        {totalPrice ? (
          <Result>
            <ResultTitle>Order Summary</ResultTitle>
            <ResultTextContainer>
              <ResultText>Total</ResultText>
              <ResultTextValue>{totalPrice.toFixed(2)}</ResultTextValue>
            </ResultTextContainer>
            <StyledButton
              primary
              onClick={() => alert("chciałeś zrobic zakupy")}
            >
              Go to checkout
            </StyledButton>
          </Result>
        ) : null}
      </CartWrapper>
    </Main>
  );
};
