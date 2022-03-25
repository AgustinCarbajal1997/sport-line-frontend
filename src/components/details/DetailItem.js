import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import DetailFav from "./DetailFav";
import DetailSize from "./DetailSize";

const DetailItem = ({ item, user, onPostProductCart }) => {
  const [size, setSize] = useState(null);
  return (
    <div className="details-container">
      <div className="details-image-container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {item.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`pic${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="details-data-container">
        <div className="details-data">
          {user && <DetailFav user={user} productId={item.id} />}
          <h5>{item.genre}</h5>
          <h2>{item.title}</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <h5 className="details-item-price">
                $
                {!item.discount
                  ? item.price
                  : item.price - (item.price * item.discount) / 100}
              </h5>
              {item.discount > 0 && (
                <h5
                  className="details-item-price-linethrogh"
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
                  marginLeft:"25px"
                }}
              >
                {item.discount}%
              </div>
            )}
          </div>
          <DetailSize list={item.size} size={size} setSize={setSize} />
          <div>
            <button
              onClick={() =>
                onPostProductCart({ productId: item.id, quantity: 1, size })
              }
            >
              <AiOutlineShoppingCart color="#ffffff" size={20} /> AÑADIR AL
              CARRITO
            </button>
          </div>
        </div>
      </div>
      <div className="details-desc-container">
        <div>
          <h3>Descripción</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
