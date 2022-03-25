import React from "react";
import PurchasesItem from "./PurchasesItem";

const PurchasesList = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <PurchasesItem item={item} key={idx} />
      ))}
    </>
  );
};

export default PurchasesList;
