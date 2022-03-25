import React from "react";
import CarouselList from "./CarouselList";

const CarouselContainer = ({ products }) => {
  return (
    <div className="carousel-container">
      <CarouselList products={products}/>
    </div>
  );
};

export default CarouselContainer;
