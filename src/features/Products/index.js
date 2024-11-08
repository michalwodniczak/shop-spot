import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { fetchProducts, selectProducts } from "./productsSlice";
import { useEffect } from "react";
import { LargeListWrapper } from "../../common/Tile/styled";
import { ListLargeTile } from "../../common/Tile";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Main>
      <LargeListWrapper>
        {products.map((product) => (
          <li key={product.id}>
            <ListLargeTile
              image={product.image}
              name={product.title}
              rate={product.rating.rate}
              countRate={product.rating.count}
              price={product.price}
            />
          </li>
        ))}
      </LargeListWrapper>
    </Main>
  );
};
