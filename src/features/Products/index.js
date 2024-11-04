import { useDispatch, useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { fetchProducts, selectProducts } from "./productsSlice";
import { useEffect } from "react";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Main>
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <img src={product.image} width="200" />
        </div>
      ))}
    </Main>
  );
};
