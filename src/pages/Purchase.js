import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PurchaseAlert from "../components/purchases/PurchaseAlert";
import PurchasesContainer from "../components/purchases/PurchasesContainer";
import createQuery from "../utils/createQuery";
const Purchase = () => {
  const user = useSelector((state) => state.user.dataUser);
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.purchases.length) return setQuery(null);
    const queryGenerated = createQuery(user.purchases);
    setQuery(queryGenerated);
  }, [user, navigate]);
  return (
    <div className="purchase-page">
      {user.purchases.length > 0 ? (
        <PurchasesContainer query={query} />
      ) : (
        <PurchaseAlert />
      )}
    </div>
  );
};

export default Purchase;
