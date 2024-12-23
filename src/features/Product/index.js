import { useEffect } from "react";
import {
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectDescription } from "./productSlice";
import { Main } from "../../common/Main/Main";
import { DetailsTile } from "../../common/Tile";
import { Button } from "../../common/Button/index";

export const Product = () => {
  const { id } = useParams();
  const product = useSelector(selectDescription);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <Main>
      <DetailsTile
        name={product.title}
        image={product.image}
        rate={product?.rating?.rate || 0}
        price={product.price}
        description={product.description}
      >
        <Button product={product} />
      </DetailsTile>
    </Main>
  );
};
