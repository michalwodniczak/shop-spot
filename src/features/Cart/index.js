import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { selectCart } from "./cartSlice";
import { CartListWrapper } from "../../common/Tile/styled";
import { CartTile } from "../../common/Tile";

export const Cart = () => {
  const cartProducts = useSelector(selectCart);

  return (
    <Main>
      <CartListWrapper>
        {cartProducts.length === 0 ? (
          <p>Koszyk jest pusty!</p>
        ) : (
          cartProducts.map((product) => (
            // <div key={product.id}>
            //   <p>{product.title}</p>
            //   <p>{product.price}</p>
            //   <img src={product.image} />
            // </div>
            <CartTile key={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            />
          ))
        )}
      </CartListWrapper>
    </Main>
  );
};
