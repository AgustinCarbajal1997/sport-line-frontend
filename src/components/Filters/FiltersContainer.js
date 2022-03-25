import React, { useEffect, useState } from "react";
import FieldsChecked from "./FieldsChecked";
import FilterItem from "./FilterItem";

const FiltersContainer = ({ filters, setPage }) => {
  const [filterFields, setFilterFields] = useState(null);
  useEffect(() => {
    let filterObj = filters.reduce((ac, item) => {
      const fields = {
        genre: ac.genre ? [...ac.genre, item.genre] : [item.genre],
        brand: ac.brand ? [...ac.brand, item.brand] : [item.brand],
        type: ac.type ? [...ac.type, item.type] : [item.type],
      };

      return fields;
    }, {});

    filterObj = {
      genre: [...new Set(filterObj.genre)],
      brand: [...new Set(filterObj.brand)],
      type: [...new Set(filterObj.type)],
    };

    setFilterFields(filterObj);
  }, [filters]);

  return (
    <>
      {filterFields && (
        <div className="filters-container">
          <FieldsChecked setPage={setPage}/>
          <FilterItem
            items={filterFields.genre}
            title="GENERO"
            field="genre"
            setPage={setPage}
          />
          <FilterItem
            items={filterFields.brand}
            title="MARCA"
            field="brand"
            setPage={setPage}
          />
          <FilterItem
            items={filterFields.type}
            title="TIPO DE PRODUCTO"
            field="type"
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};

export default FiltersContainer;
