import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IoFilterOutline } from "react-icons/io5";
import CategoryList from "../components/category/CategoryList";
import FiltersContainer from "../components/Filters/FiltersContainer";
import Modal from "../components/modal/Modal";
import useFetch from "../customHooks/useFetch";
import { BASE_URL } from "../utils/constants/url";
import useWindowsDimensions from "../customHooks/useWindowsDimensions";
import Pagination from "../components/pagination/Pagination";
const Category = () => {
  const { search } = useLocation();
  let searchParams = new URLSearchParams(search);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const navigate = useNavigate();
  const { category } = useParams();
  const { width } = useWindowsDimensions();

  const { data: products } = useFetch(
    `${BASE_URL}/api/products/getByCategory/${category}?page=${page}&limit=12&pagination=true${search}`
  );
  const { data: filters } = useFetch(
    `${BASE_URL}/api/products/getByCategory/${category}`
  );
  const onNextPage = () => {
    if (page >= products.data.totalPages) return;
    let searchParams = new URLSearchParams(search);
    searchParams.set("page", page + 1);
    setPage(page + 1);
    navigate({
      search: `${searchParams}`,
    });
  };
  const onPrevPage = () => {
    if (page <= 1) return;
    let searchParams = new URLSearchParams(search);
    searchParams.set("page", page - 1);
    setPage(page - 1);
    navigate({
      search: `${searchParams}`,
    });
  };
  return (
    <>
      <div className="category-section">
        {filters?.data?.docs && width > 768 && (
          <div style={{ width: "100%" }}>
            <h2
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#353535",
              }}
            >
              Filtrar
            </h2>
            <FiltersContainer
              filters={filters.data.docs}
              search={search}
              setPage={setPage}
            />
          </div>
        )}

        {filters?.data?.docs && width < 768 && (
          <div className="button-modal-filter-container">
            <div onClick={() => setModal(true)}>
              <IoFilterOutline size={30} color="#353535" />
              <h4>FILTRAR</h4>
            </div>
          </div>
        )}
        {filters?.data?.docs && modal && width < 768 && (
          <Modal setModal={setModal}>
            <FiltersContainer
              filters={filters.data.docs}
              search={search}
              setPage={setPage}
            />
          </Modal>
        )}

        {products?.data?.docs && <CategoryList products={products.data.docs} />}
      </div>
      {products?.data?.totalPages && (
        <Pagination
          page={page}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          totalPages={products.data.totalPages}
        />
      )}
    </>
  );
};

export default Category;
