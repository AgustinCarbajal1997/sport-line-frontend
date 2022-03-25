import React from "react";
import { Link } from "react-router-dom";
const PurchaseAlert = () => {
  return (
    <div className="alert-cart-no-products">
      <h2>NO HAY COMPRAS REALIZADAS HASTA EL MOMENTO</h2>
      <Link to="/">
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default PurchaseAlert;