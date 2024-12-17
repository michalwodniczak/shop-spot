import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { selectCart } from "../Product/productSlice";

export const Cart = () => {
  const cartProducts = useSelector(selectCart);
  
  return (
    <Main>
      {cartProducts.length === 0 ? (
        <p>Koszyk jest pusty!</p>
      ) : (
        cartProducts.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={product.image}/>
          </div>
        ))
      )}
    </Main>
  );
};
