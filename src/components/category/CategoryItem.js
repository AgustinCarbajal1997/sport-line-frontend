import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <Link to={`/articulo/${item.id}`} style={{ textDecoration: "none" }}>
        <div className="category-item-img" style={{ position: "relative" }}>
          <img src={item.images[0]} alt={item.title} />
          {item.price > 14999 && (
            <h4
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                margin: 0,
                backgroundColor: "#f65226",
                fontSize: "0.7rem",
                fontWeight: "300",
                color: "#ffffff",
                padding: "3px",
                marginBottom: "4px",
              }}
            >
              ENVÍO GRATIS
            </h4>
          )}
        </div>
        <div className="category-item-data">
          <h4 className="category-item-title">{item.title}</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <h5 className="category-item-price">
                $
                {!item.discount
                  ? item.price
                  : item.price - (item.price * item.discount) / 100}
              </h5>
              {item.discount > 0 && (
                <h5
                  className="category-item-price"
                  style={{
                    textDecoration: "line-through",
                    color: "#a4a4a4",
                    fontWeight: "400",
                  }}
                >
                  ${item.price}
                </h5>
              )}
            </div>
            {item.discount > 0 && (
              <div
                className="category-item-price"
                style={{
                  backgroundColor: "#f65226",
                  borderRadius: "50%",
                  color: "#ffffff",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "3px",
                }}
              >
                {item.discount}%
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
