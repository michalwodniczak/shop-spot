import { useEffect } from "react";
import {
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { setProductId } from "./productSlice";

export const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(setProductId(id));
  });

  return (
    <p>{id}</p>
  );
};
