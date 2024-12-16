import { useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { addToCart } from "../../features/Product/productSlice";

export const Button = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product && product.id) {
      dispatch(addToCart(product));
    } else {
      console.error("produkt nie zostałdodany");
    }
  };
  return <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>;
};
