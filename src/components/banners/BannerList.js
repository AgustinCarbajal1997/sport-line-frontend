import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
const BannerList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="banner-image-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        speed={1300}
      >
        {data.map((img, idx) => (
          <SwiperSlide
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(img.query)}
          >
            <img src={img.banner} alt={`pic${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerList;
