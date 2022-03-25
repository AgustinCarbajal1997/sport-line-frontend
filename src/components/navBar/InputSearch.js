import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Suggestions } from "./Suggestions";
import { BASE_URL } from "../../utils/constants/url";
import useClickOutsideRef from "../../customHooks/useClickOutsideRef";
const createQuery = (str) => {
  let queryArray = str.split(" ").reduce((ac, item, idx) => {
    if (!item.trim().length) return ac;
    return !idx ? ac + "?q[]=" + item : ac + "&q[]=" + item;
  }, "");
  return queryArray;
};

const InputSearch = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [query, setQuery] = useState("");
  const searchContainer = useRef(null);
  useClickOutsideRef(searchContainer,setSuggestions);
  const navigate = useNavigate();

  const onChangeText = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length < 2) {
      return setSuggestions(null);
    }
    const queryArray = createQuery(value);
    try {
      const response = await fetch(
        `${BASE_URL}/api/products/generalSearch/${queryArray}&page=1&limit=12&pagination=true`
      );
      const { data } = await response.json();
      data?.docs?.length ? setSuggestions(data.docs) : setSuggestions(null);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = () => {
    if (!suggestions) return;
    const queryArray = createQuery(query);
    navigate(`/busqueda${queryArray}&page=1&limit=12&pagination=true`);
    setSuggestions(null);
  };
  const onKeyDownEnterHandler = (e) => {
    if (!suggestions) return;
    if (e.keyCode === 13) {
      onSubmitHandler();
      setSuggestions(null);
      return;
    }
  };
  
  return (
    <div className="search-container" ref={searchContainer}>
      <input
        type="text"
        onChange={onChangeText}
        onKeyDown={onKeyDownEnterHandler}
        value={query}
        placeholder="Buscar productos"
      />
      <div onClick={onSubmitHandler} className="search-icon">
        <FiSearch color="#ffffff" size="20px" />
      </div>
      {suggestions && query.length > 1  &&(
        <Suggestions
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default InputSearch;
