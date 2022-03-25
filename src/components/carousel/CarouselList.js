import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper";
import useWindowsDimensions from "../../customHooks/useWindowsDimensions";
const CarouselList = ({ products }) => {
  const { width } = useWindowsDimensions();
  const [slidesPerView, setSlidesPerView] = useState(width);
  useEffect(() => {
    if (width < 480) return setSlidesPerView(2);
    if (width >= 480 && width < 768) return setSlidesPerView(3);
    if (width >= 768 && width < 1024) return setSlidesPerView(4);
    if (width >= 1024) return setSlidesPerView(5);
  }, [width]);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
          hideOnClick: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel-item">
              <Link
                to={`/articulo/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="carousel-item-img"
                  style={{ position: "relative" }}
                >
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
                <div className="carousel-item-data">
                  <h4 className="carousel-item-title">{item.title}</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px" }}>
                      <h5 className="carousel-item-price">
                        $
                        {!item.discount
                          ? item.price
                          : item.price - (item.price * item.discount) / 100}
                      </h5>
                      {item.discount > 0 && (
                        <h5
                          className="carousel-item-price"
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
                        className="carousel-item-price"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselList;
