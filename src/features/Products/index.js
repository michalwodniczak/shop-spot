import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { fetchProducts, selectItems, selectStatus } from "./productsSlice";
import { useEffect } from "react";
import { LargeListWrapper, StyledLink } from "../../common/Tile/styled";
import { ListLargeTile } from "../../common/Tile";
import { Loading } from "../../common/Loading";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Main>
      <LargeListWrapper>
        {products.map((product) => (
          <li key={product.id}>
            <StyledLink to={`products/${product.id}`}>
              <ListLargeTile
                image={product.image}
                name={product.title}
                rate={product.rating.rate}
                countRate={product.rating.count}
                price={product.price}
              />
            </StyledLink>
          </li>
        ))}
      </LargeListWrapper>
    </Main>
  );
};
