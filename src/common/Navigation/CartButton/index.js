import { Link } from "react-router-dom";
import CartIcon from "../../../assets/cart.png";
import { Button } from "./styled";

export const CartButton = () => {
  return (
    <Link to="/cart">
      <Button>
        <img src={CartIcon} alt="" />
      </Button>
    </Link>
  );
};
