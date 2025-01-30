import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/Cart/cartSlice";
import CartIcon from "../../../assets/cart.png";
import { Button, Text, BadgeWrapper } from "./styled";

export const CartButton = () => {
  const cartItem = useSelector(selectCart);

  if (cartItem.length === 0) {
    return (
      <span>
        <Button disabled>
          <img src={CartIcon} alt="" />
        </Button>
      </span>
    );
  }

  return cartItem.length > 0 ? (
    <Link to="/cart">
      <Button>
        <img src={CartIcon} alt="" />
        {cartItem.length > 0 && (
          <BadgeWrapper>
            <Text>{cartItem.length}</Text>
          </BadgeWrapper>
        )}
      </Button>
    </Link>
  ) : (
    <span>
      <Button disabled>
        <img src={CartIcon} alt="" />
      </Button>
    </span>
  );
};
