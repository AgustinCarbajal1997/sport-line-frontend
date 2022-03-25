import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../customHooks/useFetch";
import { BASE_URL } from "../../utils/constants/url";
import PurchasesList from "./PurchasesList";

const PurchasesContainer = ({ query }) => {
  const access_token = useSelector((state) => state.user.access_token);
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = useFetch(
    `${BASE_URL}/api/cart/getPurchases${query}&page=1&limit=20&pagination=true`,
    options
  );
  return (
    <div className="purchases-container">
      {/* {loading && <LoadingBars />} */}
      {data?.data?.docs && <PurchasesList data={data.data.docs} />}
    </div>
  );
};

export default PurchasesContainer;
