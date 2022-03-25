import React from "react";
import useFetch from "../../customHooks/useFetch";
import BannerList from "./BannerList";
import { BASE_URL } from "../../utils/constants/url";
const BannerContainer = () => {
  const { data } = useFetch(`${BASE_URL}/api/products/getHighlights`);
  return <div>{data?.data?.docs && <BannerList data={data.data.docs} />}</div>;
};

export default BannerContainer;
