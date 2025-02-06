import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectDescription, selectStatus } from "./productSlice";
import { Main } from "../../common/Main/Main";
import { DetailsTile } from "../../common/Tile";
import { Button } from "../../common/Button/index";
import { Loading } from "../../common/Loading";
import { CartTimer } from "../Cart/CartTimer";

export const Product = () => {
  const { id } = useParams();
  const product = useSelector(selectDescription);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Main>
      <CartTimer/>
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
