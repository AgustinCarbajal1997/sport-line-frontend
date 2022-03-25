import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavsContainer from "../components/favs/FavsContainer";
import createQuery from "../utils/createQuery";

const Favorites = () => {
  const user = useSelector((state) => state.user.dataUser);
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.favorites.length) return setQuery(null);
    const queryGenerated = createQuery(user.favorites);
    setQuery(queryGenerated);
  }, [user, navigate]);
  return (
    <div className="favs-container">
      <h2 className="favs-title">Tus favoritos</h2>
      {!user.favorites.length && <h3>No hay favoritos</h3>}
      {user?.favorites?.length && query && <FavsContainer query={query} />}
    </div>
  );
};

export default Favorites;
