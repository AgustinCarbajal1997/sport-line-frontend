import React from "react";
import BannerContainer from "../components/banners/BannerContainer";
import useFetch from "../customHooks/useFetch";
import { BASE_URL } from "../utils/constants/url";
import CarouselContainer from "../components/carousel/CarouselContainer";
import useWindowDimensions from "../customHooks/useWindowsDimensions";
import InputSearch from "../components/navBar/InputSearch";
const Home = () => {
  const { width } = useWindowDimensions();
  const { data } = useFetch(`${BASE_URL}/api/products/getProductHighlighted`);
  return (
    <div>
      <BannerContainer />
      {width<768 && <InputSearch />}
      {data?.data.docs && (
        <div className="">
          <h2 className="highlight-title">NUESTROS DESTACADOS</h2>
          <CarouselContainer products={data.data.docs} />
        </div>
      )}
    </div>
  );
};

export default Home;
