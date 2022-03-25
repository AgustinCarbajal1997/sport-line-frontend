import React from "react";
import { useSelector } from "react-redux";
import CartAlertNoProducts from "../components/cart/CartAlertNoProducts";
import CartContainer from "../components/cart/CartContainer";
const Cart = () => {
  const user = useSelector((state) => state.user.dataUser);
  return (
    <>
      {user.cart.length > 0 ? (
        <CartContainer user={user} />
      ) : (
        <CartAlertNoProducts />
      )}
    </>
  );
};

export default Cart;
