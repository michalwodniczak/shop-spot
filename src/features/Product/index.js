import { useEffect } from "react";
import {
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProduct } from "./productSlice";
import { Main } from "../../common/Main/Main";
import { DetailsTile } from "../../common/Tile";

export const Product = () => {
  const { id } = useParams();
  const product = useSelector(selectProduct);
  console.log(product);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  if(!product){
    return <p>Loading</p>
  }
  
  return (
    <Main>
      <DetailsTile
        name={product.description.title}
        image={product.description.image}
        price={product.description.price}
        rate={product.description.rating.rate}
        description={product.description.description}
      ></DetailsTile>
    </Main>
  );
};
