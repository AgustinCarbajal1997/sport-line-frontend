import React from "react";
import useFetch from "../../customHooks/useFetch";
import { BASE_URL } from "../../utils/constants/url";
import CategoryList from "../category/CategoryList";

const FavsContainer = ({ query }) => {
  const { data } = useFetch(
    `${BASE_URL}/api/products/getSeveralIds${query}&page=1&limit=12&pagination=true`
  );

  return (
    <div className="container-products-favs">
      {data?.data?.docs && <CategoryList products={data.data.docs} />}
    </div>
  );
};

export default FavsContainer;
