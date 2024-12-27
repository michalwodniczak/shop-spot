import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/Cart/cartSlice";
import CartIcon from "../../../assets/cart.png";
import { Button, Text, BadgeWrapper } from "./styled";

export const CartButton = () => {
  const cartItem = useSelector(selectCart);
  return (
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
  );
};
