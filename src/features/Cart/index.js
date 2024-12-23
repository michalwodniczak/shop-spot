import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { removeFromCart, selectCart } from "./cartSlice";
import { CartListWrapper} from "../../common/Tile/styled";
import { CartsTile } from "../../common/Tile";
import { RemoveButton } from "../../common/Button/styled";
import { CartText } from "./styled";

export const Cart = () => {
  const cartProducts = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <Main>
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
              <RemoveButton onClick={() => dispatch(removeFromCart(product))} />
            </CartsTile>
          ))
        )}
      </CartListWrapper>
    </Main>
  );
};
