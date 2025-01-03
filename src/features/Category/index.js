import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems, selectStatus, setCategory } from "./categorySlice";
import { Loading } from "../../common/Loading";
import { selectItems } from "./categorySlice";
import { Main } from "../../common/Main/Main";
import { LargeListWrapper } from "../../common/Tile/styled";
import { StyledLink } from "../../common/Tile/styled";
import { ListLargeTile } from "../../common/Tile";

export const Category = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const products = useSelector(selectItems);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(setCategory(categoryName));
    dispatch(fetchItems(categoryName));
  }, [dispatch, categoryName]);

  if (status === "loading") {
    return <Loading />;
  }
  return (
    <Main>
      <LargeListWrapper>
        {products.map((product) => (
          <li key={product.id}>
            <StyledLink to={`/products/${product.id}`}>
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
