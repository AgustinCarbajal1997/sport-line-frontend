import React from "react";

const DetailSize = ({ list, size, setSize }) => {
  return (
    <div className="details-size-container">
      {list.map((item, idx) => (
        <div
          key={idx}
          className={
            item.unites
              ? "details-size-item-stock"
              : "details-size-item-without-stock"
          }
          onClick={item.unites ? () => setSize(item.type) : null}
          style={{ border: `${size === item.type ? "2px solid #353535" : ""}` }}
        >
          <h4>{item.type}</h4>
        </div>
      ))}
    </div>
  );
};

export default DetailSize;
