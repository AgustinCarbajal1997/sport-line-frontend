import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ products }) => {
  return (
    <div className="category-list-container">
      <div className="category-list">
        {products.map((item, idx) => (
          <CategoryItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
