import React from "react";
import CartList from "./CartList";
import TotalItem from "./TotalItem";
const CartContainer = ({ user }) => {
  return (
    <>
      <div className="cart-list-container">
        <CartList products={user.cart} />
        <TotalItem products={user.cart} />
      </div>
    </>
  );
};

export default CartContainer;