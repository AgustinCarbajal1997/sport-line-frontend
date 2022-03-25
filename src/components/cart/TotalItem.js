import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { confirmPurchase } from "../../store/actions/user.action";
const TotalItem = ({ products }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.user.access_token);
  useEffect(() => {
    const total = products
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b);
    setTotal(total);
  }, [products]);

  const onClickPaymentInformation = () => {
    // dispatch(confirmPurchase(access_token));
    navigate("/informacion-pago");
  };

  return (
    <div className="cart-total-products">
      <h2>TOTAL</h2>
      <h3>${total}</h3>
      <button onClick={onClickPaymentInformation}>Finalizar compra</button>
    </div>
  );
};

export default TotalItem;
