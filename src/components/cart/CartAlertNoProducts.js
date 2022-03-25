import React from "react";
import { Link } from "react-router-dom";
const CartAlertNoProducts = () => {
  return (
    <div className="alert-cart-no-products">
      <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
      <Link to="/">
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default CartAlertNoProducts;