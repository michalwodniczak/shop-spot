import { useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { addToCart } from "../../features/Cart/cartSlice";

export const Button = ({ product }) => {
  const dispatch = useDispatch();
 
  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }
    
    if (cartProduct && cartProduct.id) {
      dispatch(addToCart(cartProduct));
    } 
    
  };
  return <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>;
};
