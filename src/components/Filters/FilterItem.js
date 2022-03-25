import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
const FilterItem = ({
  items,
  title,
  field,
  setPage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();

  const onSearchQueryHandle = (field, item) => {
    let searchParams = new URLSearchParams(search);
    searchParams.set(field, item);
    searchParams.set("page", 1);
    setPage(1)
    navigate({
      search: `${searchParams}`,
    });
  };

  return (
    <div className="filter-item">
      <div className="filter-item-header">
        <h2 className="filter-item-title">{title}</h2>
        <IoIosArrowUp
          size={20}
          color={"#353535"}
          style={{
            cursor: "pointer",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all .3s ease",
          }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {items.map((item, idx) => (
        <h4
          className="filter-item-field"
          key={idx}
          style={{ display: isOpen ? "block" : "none" }}
          onClick={() => onSearchQueryHandle(field, item)}
        >
          {item}
        </h4>
      ))}
    </div>
  );
};

export default FilterItem;
