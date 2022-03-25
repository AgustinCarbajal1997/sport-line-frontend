import React from "react";
import useFetch from "../../customHooks/useFetch";
import { BASE_URL } from "../../utils/constants/url";
import DetailItem from "./DetailItem";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../../store/actions/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DetailsContainer = ({ productId }) => {
  const { data } = useFetch(`${BASE_URL}/api/products/getById/${productId}`);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.dataUser);
  const access_token = useSelector((state) => state.user.access_token);
  const onPostProductCart = (dataProduct) => {
    if(!dataProduct.size){
      toast.error("¡Seleccione un talle por favor!", {
        style: {
          backgroundColor: "#383838",
          color: "#ffffff",
        },
      });
      return;
    }
    dispatch(postCart(access_token, dataProduct,"Agregado al carrito"));
  };
  return (
    <>
      {data && (
        <DetailItem
          item={data.data}
          user={user}
          onPostProductCart={onPostProductCart}
        />
      )}
      <ToastContainer/>
    </>
  );
};

export default DetailsContainer;
