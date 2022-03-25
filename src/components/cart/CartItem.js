import React from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { postCart, deleteProductCart } from "../../store/actions/user.action";
const CartItem = ({ item }) => {
  const access_token = useSelector((state) => state.user.access_token);
  const dispatch = useDispatch();
  const addQuantity = () => {
    if (item.quantity + 1 > 5) {
      console.log("Stock alcanzado");
      return;
    }
    const dataProduct = {
      productId: item.productId,
      quantity: item.quantity + 1,
      size:item.size
    };
    dispatch(postCart(access_token, dataProduct, "Unidad agregada"));
  };
  const subtractQuantity = () => {
    if (item.quantity - 1 === 0) {
      console.log("No se puede ordenar 0");
      return;
    }
    const dataProduct = {
      productId: item.productId,
      quantity: item.quantity - 1,
      size:item.size
    };
    dispatch(postCart(access_token, dataProduct, "Unidad quitada"));
  };
  const removeProduct = () => {
    const dataProduct = {
      productId: item.productId,
      size:item.size
    }
    dispatch(deleteProductCart(access_token, dataProduct));
  };
  return (
    <div className="cart-item" >
      <div className="cart-item__img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item__data" >
        <h2>{item.title}</h2>
        <div className="cart-item-buttons">
          <div className="cart-item-addition-subtract">
            <button onClick={() => subtractQuantity()}>
              <HiMinusSm size={26} />
            </button>
            <h2>{item.quantity}</h2>
            <button onClick={() => addQuantity()}>
              <HiPlusSm size={26} />
            </button>
          </div>
          <div className="cart-item-button-size">Talle: {item.size}</div>
          <div className="cart-item-button-price"> $ {item.price}</div>
          <div className="cart-item-delete-button">
            <button onClick={() => removeProduct()}>
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
