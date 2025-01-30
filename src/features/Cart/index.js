import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main } from "../../common/Main/Main";
import {
  removeFromCart,
  selectCart,
  removeAllProductFromCart,
} from "./cartSlice";
import { CartListWrapper } from "../../common/Tile/styled";
import { CartsTile } from "../../common/Tile";
import { RemoveButton } from "../../common/Button/styled";
import { CartText } from "./styled";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const [timeLeft, setTimeLeft] = useState(() => {
    const storeData = JSON.parse(localStorage.getItem("cart"));
    if (storeData?.expirationTime) {
      const remainingTime = Math.floor(
        (storeData.expirationTime - Date.now()) / 1000
      );
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem("cart");
      dispatch(removeAllProductFromCart());
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, dispatch]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Main>
      {timeLeft > 0 ? (
        <p>
          Pozostały czas {minutes ? minutes : null} minut {seconds} sekund
        </p>
      ) : (
        ""
      )}
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
