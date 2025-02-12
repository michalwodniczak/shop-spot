import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProductFromCart, selectCart } from "../cartSlice";
import { Wrapper, Text } from "./styled";

export const CartTimer = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cart"));
    if (storeData?.expirationTime) {
      const remainingTime = Math.floor(
        (storeData.expirationTime - Date.now()) / 1000
      );
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (timeLeft <= 0 && timeLeft !== 0) {
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

  if (cartProducts.length !== 0) {
    return (
      <Wrapper>
        <Text>Your purchases will remain in the cart for:</Text>
        <Text>
          {minutes ? `${minutes} min ` : null}
          {seconds ? `${seconds} sec` : null}
        </Text>
      </Wrapper>
    );
  }
  return null;
};
