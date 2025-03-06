import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import {
  fetchProducts,
  selectItems,
  selectStatus,
  selectError,
} from "./productsSlice";
import { useEffect } from "react";
import { LargeListWrapper, StyledLink } from "../../common/Tile/styled";
import { ListLargeTile } from "../../common/Tile";
import { Loading } from "../../common/Loading";
import { CartTimer } from "../Cart/CartTimer";
import { ErrorPage } from "../../common/ErrorPage";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorPage errorCode={error} />;
  }

  return (
    <Main>
      <CartTimer />
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
