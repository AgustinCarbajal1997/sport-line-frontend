import React, { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
const FieldsChecked = ({ setPage }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (!searchParams.toString().trim().length) {
      setChecked(null);
      return;
    }
    let newObject = {};
    for (let [key, value] of searchParams) {
      if (
        key === "q[]" ||
        key === "page" ||
        key === "pagination" ||
        key === "limit"
      )
        continue;
      newObject = {
        ...newObject,
        [key]: value,
      };
    }
    setChecked(newObject);
  }, [search]);

  const onDeleteFieldHandle = (item) => {
    let searchParams = new URLSearchParams(search);
    searchParams.delete(item);
    searchParams.set("page", 1);
    setPage(1);
    navigate({
      search: `${searchParams}`,
    });
  };

  return (
    <div className="fields-container">
      {checked &&
        Object.keys(checked).map((item, idx) => (
          <div key={idx} className="fields-item">
            <h5>{checked[item]}</h5>
            <RiCloseFill
              size={16}
              color={"#353535"}
              style={{ cursor: "pointer" }}
              onClick={() => onDeleteFieldHandle(item)}
            />
          </div>
        ))}
    </div>
  );
};

export default FieldsChecked;
